import 'server-only'

import { unstable_cache } from 'next/cache'
import { ConfigValue } from '@/config'
import type { News, NewsQueryArrray } from '@/types'

export const BLOG_REVALIDATE_SECONDS = 120

function getApiUrl(path: string) {
  const baseUrl = ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_REST_API_ENDPOINT is not configured')
  }

  return new URL(path, baseUrl).toString()
}

function toBlogListItem(post: News): News {
  return {
    ...post,
    content: '',
  }
}

async function fetchBlogPosts() {
  const response = await fetch(getApiUrl('/data/allnews'), {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to load blog feed: ${response.status}`)
  }

  const feed = (await response.json()) as NewsQueryArrray
  return feed.result.data.map(toBlogListItem)
}

export const getBlogPosts = unstable_cache(fetchBlogPosts, ['blog-posts'], {
  revalidate: BLOG_REVALIDATE_SECONDS,
  tags: ['blog-posts'],
})
