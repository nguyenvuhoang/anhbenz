'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import BlogFooter from '@/app/blog/blog-footer'
import BlogSiteHeader from '@/app/blog/blog-site-header'
import { blogContainer, blogFocusRing, blogFont } from '@/app/blog/blog-ui'
import { useBlogPageBackground } from '@/app/blog/use-blog-page-background'
import type { News } from '@/types'
import ArticleContent from './components/article-content'
import ArticleHero from './components/article-hero'
import ArticleSidebar from './components/article-sidebar'
import {
  extractArticleBody,
  extractHeadings,
  getArticleTitle,
} from './components/article-utils'
import ReadingProgress from './components/reading-progress'
import RelatedArticles from './components/related-articles'
import ShareButtons from './components/share-buttons'
import { TableOfContentsMobile } from './components/table-of-contents'

// Header, cover and reading layout share one centred column:
// 760px article + 48px gap + 280px sidebar.
const articleColumn = 'mx-auto w-full max-w-[1088px]'

type BlogDetailClientProps = {
  post: News
  relatedPosts: News[]
}

// Like the /blog listing, this page renders without the app-wide Providers:
// the article arrives fully rendered from the server, so it needs no React
// Query refetch, and Providers would inject the legacy stylesheet.
export default function BlogDetailClient({
  post,
  relatedPosts,
}: BlogDetailClientProps) {
  useBlogPageBackground()

  const title = getArticleTitle(post)
  const articleHtml = useMemo(
    () => extractArticleBody(post.content || '', title),
    [post.content, title]
  )
  const toc = useMemo(() => extractHeadings(articleHtml), [articleHtml])

  return (
    <div
      className={`${blogFont.className} min-h-screen bg-blog-bg text-blog-text antialiased`}
    >
      <a
        href="#article-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-blog-text focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-blog-bg"
      >
        Skip to article
      </a>
      <ReadingProgress />
      <BlogSiteHeader />

      <main className={blogContainer}>
        <article className="pb-16 sm:pb-20">
          <div className={articleColumn}>
            <ArticleHero post={post} />
          </div>

          <div
            className={`${articleColumn} mt-10 grid gap-12 sm:mt-12 lg:grid-cols-[minmax(0,760px)_280px]`}
          >
            <div id="article-content" className="min-w-0 scroll-mt-24">
              <TableOfContentsMobile items={toc} />
              <ArticleContent html={articleHtml} toc={toc} />

              <div className="mt-12 flex flex-col gap-4 border-t border-blog-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/blog"
                  className={`inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-blog-muted transition-colors hover:text-blog-text ${blogFocusRing}`}
                >
                  <HiArrowLeft aria-hidden className="h-4 w-4" />
                  Back to articles
                </Link>
                <ShareButtons title={title} />
              </div>
            </div>

            <ArticleSidebar title={title} toc={toc} />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className={`${articleColumn} pb-16 sm:pb-20`}>
            <RelatedArticles posts={relatedPosts} />
          </div>
        )}
      </main>

      <BlogFooter />
    </div>
  )
}
