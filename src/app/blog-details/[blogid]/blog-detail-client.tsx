'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import Providers from '@/app/providers'
import client from '@/data/client'
import Layout from '@/layouts/_layout'
import Footer from '@/layouts/footer/Footer'
import HeaderTwo from '@/layouts/header/HeaderTwo'
import type { News, NewsQueryObject } from '@/types'
import { useQuery } from '@tanstack/react-query'
import ArticleContent from './components/article-content'
import ArticleCTA from './components/article-cta'
import ArticleHero from './components/article-hero'
import ArticleSidebar from './components/article-sidebar'
import {
  extractArticleBody,
  extractHeadings,
} from './components/article-utils'
import ReadingProgress from './components/reading-progress'
import RelatedArticles from './components/related-articles'

type BlogDetailClientProps = {
  blogdetail: NewsQueryObject
  blogid: string
}

function getRelatedPosts(blog: News) {
  return [blog.prevnews, blog.nextnews].filter(Boolean) as News[]
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
    queryKey: ['news-detail', blogid],
    queryFn: () => client.news.getbyid(blogid),
    initialData: blogdetail,
  })

  const blog = data.result.data
  const articleHtml = useMemo(
    () => extractArticleBody(blog.content || ''),
    [blog.content]
  )
  const toc = useMemo(() => extractHeadings(articleHtml), [articleHtml])
  const relatedPosts = useMemo(() => getRelatedPosts(blog), [blog])

  return (
    <Layout>
      <ReadingProgress />
      <div className="home-light min-h-screen bg-[#05070b] text-white">
        <div
          className="pointer-events-none fixed inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_32%),linear-gradient(180deg,rgba(5,7,11,0),#05070b_76%)]" />
        <div className="pointer-events-none fixed inset-x-0 top-0 h-32 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_7px)] opacity-20" />

        <div className="relative z-10">
          <Link
            href="/blog"
            className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-300/30 bg-black/70 px-5 py-3 text-sm font-bold text-cyan-100 shadow-xl shadow-black/30 backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-200 hover:text-slate-950"
          >
            Blog
          </Link>

          <HeaderTwo />

          <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <ArticleHero post={blog} />

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
              <div className="min-w-0">
                <ArticleContent html={articleHtml} toc={toc} />
                <RelatedArticles posts={relatedPosts} />
                <ArticleCTA />
              </div>
              <ArticleSidebar post={blog} toc={toc} />
            </div>
          </main>

          <div className="beny_tm_copyright relative z-10 border-t border-white/10 bg-black/30">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
