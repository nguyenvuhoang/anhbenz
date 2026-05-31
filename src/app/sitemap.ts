import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import type { News } from '@/types'

const siteUrl = 'https://anhben.com'

export const revalidate = 120

function toValidDate(value: string | undefined) {
  if (!value) {
    return new Date()
  }

  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? new Date() : date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: News[] = []

  try {
    posts = await getBlogPosts()
  } catch {
    posts = []
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog-details/${post.id}`,
      lastModified: toValidDate(post.pubdt || post.createdt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
