import Image from 'next/image'
import Link from 'next/link'
import type { News } from '@/types'
import {
  formatArticleDate,
  getArticleDescription,
  getArticleTags,
  getArticleTitle,
  getArticleTopic,
  getReadingTime,
} from './article-utils'

type ArticleHeroProps = {
  post: News
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  const title = getArticleTitle(post)
  const description = getArticleDescription(post)
  const topic = getArticleTopic(post)
  const publishedDate = formatArticleDate(post.pubdt || post.createdt)
  const readingTime = getReadingTime(post)
  const tags = getArticleTags(post)

  return (
    <header className="relative pt-28">
      <nav
        aria-label="Breadcrumb"
        className="relative z-20 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400"
      >
        <Link
          href="/"
          className="pointer-events-auto rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-cyan-300/60 hover:text-cyan-200"
        >
          Home
        </Link>
        <span className="text-slate-600">/</span>
        <Link
          href="/blog"
          className="pointer-events-auto rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-cyan-300/60 hover:text-cyan-200"
        >
          Blog
        </Link>
        <span className="text-slate-600">/</span>
        <span className="max-w-full rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-cyan-50 sm:max-w-md sm:truncate">
          {title}
        </span>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.98fr_0.72fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            {topic}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-md border border-white/10">
            <div className="px-3 py-4">
              <p className="text-2xl font-bold text-cyan-200">
                {readingTime}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-400">
                phút đọc
              </p>
            </div>
            <div className="px-3 py-4">
              <p className="truncate text-lg font-bold text-white">{topic}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">
                topic
              </p>
            </div>
            <div className="px-3 py-4">
              <p className="text-lg font-bold text-emerald-200">
                {publishedDate}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-400">
                published
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-300">
            Author: <span className="font-bold text-white">{post.username || 'Nguyen Vu Hoang'}</span>
          </div>
        </div>
      </div>

      {post.image && (
        <div className="group relative mt-12 aspect-[16/8] min-h-72 overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950 shadow-2xl shadow-cyan-950/30">
          <Image
            src={post.image}
            alt={title}
            fill
            priority
            sizes="(min-width: 1280px) 1180px, 100vw"
            className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#05070b] via-transparent to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-80" />
        </div>
      )}
    </header>
  )
}
