import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/data/client'
import BlogDetailClient from './blog-detail-client'

const siteName = 'Nguyen Vu Hoang Portfolio'

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

  return (
    <BlogDetailClient
      blogdetail={blogdetail}
      blogid={blogid}
    />
  )
}