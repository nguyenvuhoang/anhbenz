'use client'

import Link from 'next/link'
import Providers from '@/app/providers'
import HeaderTwo from '@/layouts/header/HeaderTwo'
import Footer from '@/layouts/footer/Footer'
import BlogPage from '@/layouts/blog'
import type { News } from '@/types'

type BlogClientProps = {
  blogdata: News[]
}

export default function BlogClient({ blogdata }: BlogClientProps) {
  return (
    <Providers>
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

        <div id="news">
          <BlogPage blogdatainit={blogdata} />
        </div>

        <div className="beny_tm_copyright">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </Providers>
  )
}
