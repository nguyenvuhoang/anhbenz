import 'server-only'

import { unstable_cache } from 'next/cache'
import { ConfigValue } from '@/config'
import {
  GATEWAY_PATH,
  createArticleSearchRequest,
  mapArticlesToNews,
  type ArticleSearchResponse,
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

  const feed = (await response.json()) as ArticleSearchResponse
  return mapArticlesToNews(feed).map(toBlogListItem)
}

function toBlogListItem(post: News): News {
  return {
    ...post,
    content: '',
  }
}

export const getBlogPosts = unstable_cache(fetchBlogPosts, ['blog-posts'], {
  revalidate: BLOG_REVALIDATE_SECONDS,
  tags: ['blog-posts'],
})
