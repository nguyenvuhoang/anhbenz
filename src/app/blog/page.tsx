import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/data/client'
import type { News } from '@/types'
import BlogClient from './blog-client'

export const revalidate = 120

const blogTitle = 'Blog công nghệ, sản phẩm và kỹ thuật phần mềm'
const blogDescription =
  'Các bài viết mới nhất của Nguyen Vu Hoang về Next.js, React, fintech, thiết kế sản phẩm, backend API và kinh nghiệm xây dựng hệ thống thực tế.'
const blogUrl = '/blog'
const fallbackOgImage =
  'https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?w=1200'

export async function generateMetadata(): Promise<Metadata> {
  let latestPost: News | undefined

  try {
    const blog = await client.news.all()
    latestPost = blog.result.data[0]
  } catch {
    latestPost = undefined
  }

  const ogImage = latestPost?.image || fallbackOgImage

  return {
    title: blogTitle,
    description: blogDescription,
    alternates: {
      canonical: blogUrl,
    },
    keywords: [
      'blog Nguyen Vu Hoang',
      'blog Next.js',
      'React developer Vietnam',
      'fintech engineer',
      'backend API',
      'software engineering',
      'product design',
    ],
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
      type: 'website',
      locale: 'vi_VN',
      siteName: 'Nguyen Vu Hoang Portfolio',
      title: blogTitle,
      description: blogDescription,
      url: blogUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: latestPost?.title || blogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogTitle,
      description: blogDescription,
      images: [ogImage],
    },
  }
}

function createBlogListJsonLd(posts: News[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: blogTitle,
    description: blogDescription,
    url: 'https://anhben.com/blog',
    inLanguage: 'vi-VN',
    author: {
      '@type': 'Person',
      name: 'Nguyen Vu Hoang',
      url: 'https://anhben.com',
    },
    blogPost: posts.slice(0, 12).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title || post.name,
      description: post.summary || post.title || post.name,
      image: post.image,
      datePublished: post.pubdt || post.createdt,
      url: `https://anhben.com/blog-details/${post.id}`,
      author: {
        '@type': 'Person',
        name: post.username || 'Nguyen Vu Hoang',
      },
    })),
  }
}

export default async function Page() {
  let blog

  try {
    blog = await client.news.all()
  } catch (error) {
    console.log(error)
    notFound()
  }

  const posts = blog.result.data

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBlogListJsonLd(posts)),
        }}
      />
      <BlogClient blogdata={posts} />
    </>
  )
}
