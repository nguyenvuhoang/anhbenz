import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/data/client'
import BlogDetailClient from './blog-detail-client'

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { blogid } = await params

  try {
    const blogdetail = await client.news.getbyid(blogid)
    const blog = blogdetail.result.data

    return {
      title: blog.title,
      description: blog.title,
      openGraph: {
        siteName: 'Nguyen Vu Hoang Portfolio',
        title: blog.title,
        description: blog.title,
        url: `/blog-details/${blog.id}`,
        images: [
          {
            url: blog.image,
            width: 800,
            height: 600,
            alt: blog.title,
          },
        ],
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

  return <BlogDetailClient blogdetail={blogdetail} blogid={blogid} />
}
