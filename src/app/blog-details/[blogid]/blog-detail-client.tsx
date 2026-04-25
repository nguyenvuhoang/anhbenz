'use client'

import Providers from '@/app/providers'
import client from '@/data/client'
import Layout from '@/layouts/_layout'
import BlogNext from '@/layouts/blog/BlogNext'
import BlogPrev from '@/layouts/blog/BlogPrev'
import Footer from '@/layouts/footer/Footer'
import HeaderTwo from '@/layouts/header/HeaderTwo'
import type { NewsQueryObject } from '@/types'
import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import Link from 'next/link'

type BlogDetailClientProps = {
  blogdetail: NewsQueryObject
  blogid: string
}

export default function BlogDetailClient({
  blogdetail,
  blogid,
}: BlogDetailClientProps) {
  return (
    <Providers>
      <BlogDetailContent blogdetail={blogdetail} blogid={blogid} />
    </Providers>
  )
}

function BlogDetailContent({ blogdetail, blogid }: BlogDetailClientProps) {
  const { data } = useQuery({
    queryKey: ['news-detail'],
    queryFn: () => client.news.getbyid(blogid),
    initialData: blogdetail,
  })

  const blog = data.result.data

  return (
    <Layout>
      <div className="home-light">
        <div
          className="home-fixed-wrapper"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <button className="home-button">
            <Link href="/">
              <span className="text">Home</span>
            </Link>
          </button>
        </div>
        <HeaderTwo />
        <div className="beny_tm_about" id="about">
          {blog && blog.content && parse(blog.content)}
        </div>

        <div className="beny_tm_copyright">
          <div className="container">
            {blog && blog.prevnews && <BlogPrev blog={blog.prevnews} />}
            {blog && blog.nextnews && <BlogNext blog={blog.nextnews} />}
          </div>
        </div>

        <div className="beny_tm_copyright">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  )
}
