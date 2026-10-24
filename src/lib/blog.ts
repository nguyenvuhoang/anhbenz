import 'server-only'

import { unstable_cache } from 'next/cache'
import { ConfigValue } from '@/config'
import {
  GATEWAY_PATH,
  createArticleSearchRequest,
  mapArticlesToNews,
} from '@/lib/articles'
import type { News } from '@/types'

export const BLOG_REVALIDATE_SECONDS = 120

function getApiUrl(path: string) {
  const baseUrl = ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_REST_API_ENDPOINT is not configured')
  }

  return new URL(path, baseUrl).toString()
}

async function fetchBlogPosts() {
  const response = await fetch(getApiUrl(GATEWAY_PATH), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      app: 'BO',
      lang: 'vi',
    },
    body: JSON.stringify(createArticleSearchRequest()),
  })

  if (!response.ok) {
    throw new Error(`Failed to load article feed: ${response.status}`)
  }

  const feed: unknown = await response.json()
  return mapArticlesToNews(feed).map(toBlogListItem)
}

function toBlogListItem(post: News): News {
  return {
    ...post,
    content: '',
  }
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
