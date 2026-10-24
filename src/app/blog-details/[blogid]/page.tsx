import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/data/client'
import { normalizeArticleType } from '@/lib/articles'
import { getBlogPosts } from '@/lib/blog'
import type { News } from '@/types'
import BlogDetailClient from './blog-detail-client'

const siteName = 'Nguyen Vu Hoang Portfolio'
const siteUrl = 'https://anhben.com'
const RELATED_POSTS_LIMIT = 3

type PageProps = {
  params: Promise<{
    blogid: string
  }>
}

export const revalidate = 60
export const dynamicParams = true

export function generateStaticParams() {
  return []
}

function getDescription(blog: { summary?: string; title?: string; name?: string }) {
  return (blog.summary || blog.title || blog.name || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160)
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { blogid } = await params

  try {
    const blogdetail = await client.news.getbyid(blogid)
    const blog = blogdetail.result.data
    const title = blog.title || blog.name
    const description = getDescription(blog) || title
    const url = `/blog-details/${blog.id}`

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      },
      openGraph: {
        type: 'article',
        locale: 'vi_VN',
        siteName,
        title,
        description,
        url,
        publishedTime: blog.pubdt || blog.createdt,
        modifiedTime: blog.createdt || blog.pubdt,
        authors: [blog.username || 'Nguyen Vu Hoang'],
        images: [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [blog.image],
      },
    }
  } catch {
    return {}
  }
}

// Same-topic articles first (feed order is newest first), then the
// previous/next articles, then the latest of any topic.
async function getRelatedPosts(post: News): Promise<News[]> {
  const neighbours = [post.prevnews, post.nextnews].filter(
    (item): item is News => item !== null
  )
  let feed: News[] = []

  try {
    feed = await getBlogPosts()
  } catch {
    feed = []
  }

  const topic = normalizeArticleType(post.type)
  const candidates = [
    ...feed.filter((item) => topic && normalizeArticleType(item.type) === topic),
    ...neighbours,
    ...feed,
  ]
  const seen = new Set([post.id])
  const related: News[] = []

  for (const item of candidates) {
    if (related.length === RELATED_POSTS_LIMIT) {
      break
    }

    if (item.id && !seen.has(item.id)) {
      seen.add(item.id)
      related.push(item)
    }
  }

  return related
}

function createArticleJsonLd(post: News) {
  const title = post.title || post.name
  const url = `${siteUrl}/blog-details/${post.id}`
  const author = post.username || 'Nguyen Vu Hoang'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: title,
        description: getDescription(post) || title,
        ...(post.image ? { image: post.image } : {}),
        datePublished: post.pubdt || post.createdt || undefined,
        dateModified: post.createdt || post.pubdt || undefined,
        articleSection: post.type || undefined,
        inLanguage: 'vi-VN',
        url,
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: author },
        publisher: {
          '@type': 'Person',
          name: 'Nguyen Vu Hoang',
          url: siteUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  }
}

export default async function Page({ params }: PageProps) {
  const { blogid } = await params

  let blogdetail

  try {
    blogdetail = await client.news.getbyid(blogid)
  } catch {
    notFound()
  }

  const blog = blogdetail?.result?.data

  if (!blog) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(blog)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createArticleJsonLd(blog)).replace(/</g, '\\u003c'),
        }}
      />
      <BlogDetailClient post={blog} relatedPosts={relatedPosts} />
    </>
  )
}