'use client'

import type { News } from '@/types'
import BlogContent from './blog-content'
import BlogFooter from './blog-footer'
import BlogSiteHeader from './blog-site-header'
import { blogFont } from './blog-ui'
import { useBlogPageBackground } from './use-blog-page-background'

type BlogClientProps = {
  posts: News[]
}

// The list page intentionally skips the app-wide Providers: it needs no
// React Query, and Providers injects the legacy blog stylesheet whose
// unlayered element rules override Tailwind utilities.
export default function BlogClient({ posts }: BlogClientProps) {
  useBlogPageBackground()

  return (
    <div
      className={`${blogFont.className} min-h-screen bg-blog-bg text-blog-text antialiased`}
    >
      <a
        href="#articles"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blog-text focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-blog-bg"
      >
        Skip to articles
      </a>
      <BlogSiteHeader />
      <main id="news">
        <BlogContent posts={posts} />
      </main>
      <BlogFooter />
    </div>
  )
}
