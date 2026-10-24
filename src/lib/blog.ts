import 'server-only'

import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import { ConfigValue } from '@/config'
import {
  GATEWAY_PATH,
  createArticleRetrieveRequest,
  createArticleSearchRequest,
  findArticleInFeed,
  mapArticleDetailToNews,
  mapArticlesToNews,
  type ArticleRetrieveResponse,
} from '@/lib/articles'
import type { News } from '@/types'

export const BLOG_REVALIDATE_SECONDS = 120

// A stalled gateway call must never hold a render open indefinitely.
const GATEWAY_TIMEOUT_MS = 15_000
// The gateway intermittently answers `success: false` under load.
const GATEWAY_RETRY_DELAY_MS = 500
// Concurrent cache misses (e.g. several detail pages rendering at once)
// share one in-flight feed download for this long.
const FEED_SHARE_MS = 10_000

function getApiUrl(path: string) {
  const baseUrl = ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_REST_API_ENDPOINT is not configured')
  }

  return new URL(path, baseUrl).toString()
}

function isFailedEnvelope(value: unknown) {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    value.success === false
  )
}

async function postGateway(
  body: unknown,
  { retry = false }: { retry?: boolean } = {}
): Promise<unknown> {
  const request = async () => {
    const response = await fetch(getApiUrl(GATEWAY_PATH), {
      method: 'POST',
      cache: 'no-store',
      signal: AbortSignal.timeout(GATEWAY_TIMEOUT_MS),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        app: 'BO',
        lang: 'vi',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Gateway request failed: ${response.status}`)
    }

    return (await response.json()) as unknown
  }

  if (!retry) {
    return request()
  }

  try {
    const result = await request()

    if (!isFailedEnvelope(result)) {
      return result
    }
  } catch (error) {
    // Timeouts are not retried: a second 15s wait would double the stall.
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw error
    }
  }

  await new Promise((resolve) => setTimeout(resolve, GATEWAY_RETRY_DELAY_MS))
  return request()
}

let sharedFeed: { promise: Promise<unknown>; expiresAt: number } | null = null

// Full search feed, including article content. At ~2.8 MB it exceeds the
// 2 MB data-cache entry limit, so it is shared in memory only briefly.
function fetchArticleFeed() {
  const now = Date.now()

  if (!sharedFeed || sharedFeed.expiresAt <= now) {
    const promise = postGateway(createArticleSearchRequest(), { retry: true })
    sharedFeed = { promise, expiresAt: now + FEED_SHARE_MS }
    promise.catch(() => {
      if (sharedFeed?.promise === promise) {
        sharedFeed = null
      }
    })
  }

  return sharedFeed.promise
}

function toBlogListItem(post: News): News {
  return {
    ...post,
    content: '',
  }
}

async function fetchBlogPosts() {
  return mapArticlesToNews(await fetchArticleFeed()).map(toBlogListItem)
}

// The key is versioned so entries cached from the legacy `/data/allnews`
// feed are never served for the gateway article feed.
export const getBlogPosts = unstable_cache(
  fetchBlogPosts,
  ['blog-posts', 'gateway-articles-v2'],
  {
    revalidate: BLOG_REVALIDATE_SECONDS,
    tags: ['blog-posts'],
  }
)

// WF_BO_RETRIEVE_ARTICLE currently requires a signed-in session, so the
// public search feed (which carries full content) is the fallback.
async function fetchBlogPostById(articleId: string): Promise<News | null> {
  try {
    const response = await postGateway(createArticleRetrieveRequest(articleId))
    return mapArticleDetailToNews(response as ArticleRetrieveResponse)
  } catch {
    return findArticleInFeed(await fetchArticleFeed(), articleId)
  }
}

const getCachedBlogPostById = unstable_cache(
  fetchBlogPostById,
  ['blog-post', 'gateway-articles-v2'],
  {
    revalidate: BLOG_REVALIDATE_SECONDS,
    tags: ['blog-posts'],
  }
)

// `cache` dedupes the generateMetadata + page calls within one request;
// `unstable_cache` shares the result across requests.
export const getBlogPostById = cache(getCachedBlogPostById)
