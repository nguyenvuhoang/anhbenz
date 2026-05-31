'use client'

import { useEffect } from 'react'
import Providers from '@/app/providers'
import Footer from '@/layouts/footer/Footer'
import type { News } from '@/types'
import BlogSiteHeader from './blog-site-header'
import BlogContent from './blog-content'

type BlogClientProps = {
  posts: News[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  useEffect(() => {
    const previousBodyBackground = document.body.style.backgroundColor
    const previousHtmlBackground = document.documentElement.style.backgroundColor

    document.body.style.backgroundColor = '#05070b'
    document.documentElement.style.backgroundColor = '#05070b'

    return () => {
      document.body.style.backgroundColor = previousBodyBackground
      document.documentElement.style.backgroundColor = previousHtmlBackground
    }
  }, [])

  return (
    <Providers>
      <div className="relative isolate min-h-screen overflow-hidden bg-[#05070b]">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(167,139,250,0.2),transparent_30%),radial-gradient(circle_at_50%_74%,rgba(16,185,129,0.1),transparent_34%),#05070b]" />
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-45"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.1) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="relative z-10">
          <BlogSiteHeader />
          <div id="news">
            <BlogContent posts={posts} />
          </div>
          <Footer />
        </div>
      </div>
    </Providers>
  )
}
