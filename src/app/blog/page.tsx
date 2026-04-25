import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/data/client'
import BlogClient from './blog-client'

export const revalidate = 120

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'Với ước mơ thành lập một Doanh nghiệp Kinh Doanh về Công Nghệ Thông Tin tại tỉnh thành nhỏ mà tôi đang sinh sống.',
  openGraph: {
    title: 'Blogs',
    description:
      'Với ước mơ thành lập một Doanh nghiệp Kinh Doanh về Công Nghệ Thông Tin tại tỉnh thành nhỏ mà tôi đang sinh sống.',
    url: '/blog',
    images: [
      {
        url: 'https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?w=740&t=st=1679585208~exp=1679585808~hmac=a9518fe251214cd0017bd3d773beac830a6c80096b506b8e2a870f2fe9a0df41',
        width: 800,
        height: 600,
        alt: 'Blogs',
      },
    ],
  },
}

export default async function Page() {
  let blog

  try {
    blog = await client.news.all()
  } catch (error) {
    console.log(error)
    notFound()
  }

  return <BlogClient blogdata={blog.result.data} />
}
