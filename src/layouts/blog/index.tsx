'use client'

import type { News } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type Props = {
  blogdatainit: News[]
}

function formatDate(value?: string) {
  if (!value) {
    return 'Mới cập nhật'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function getReadingTime(post: News) {
  const content = [post.summary, post.content, post.title, post.name]
    .filter(Boolean)
    .join(' ')
    .replace(/<[^>]*>/g, ' ')
  const words = content.trim().split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / 220))
}

function matchesSearch(post: News, query: string) {
  const text = [post.name, post.title, post.summary, post.type, post.username]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return text.includes(query.toLowerCase())
}

function BlogCard({ post, featured = false }: { post: News; featured?: boolean }) {
  const title = post.title || post.name
  const summary =
    post.summary ||
    'Ghi chú thực chiến về kỹ thuật, sản phẩm và cách xây dựng hệ thống bền vững hơn.'
  const image = post.image || '/vercel.svg'

  return (
    <Link
      href={`/blog-details/${post.id}`}
      className={`group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/10 ${
        featured ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr]' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? 'min-h-80 lg:min-h-full' : 'aspect-16/10'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={
            featured
              ? '(min-width: 1024px) 48vw, 100vw'
              : '(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw'
          }
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={featured}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-950/55 to-transparent" />
      </div>

      <article
        className={`flex h-full flex-col ${
          featured ? 'p-6 sm:p-8 lg:p-10' : 'p-5'
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
          <span>{post.type || 'Engineering'}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <time>{formatDate(post.pubdt || post.createdt)}</time>
        </div>

        <h4
          className="line-clamp-3 font-bold text-slate-950 transition group-hover:text-cyan-700"
          style={{
            fontSize: featured ? '18px' : '15px',
            lineHeight: featured ? '1.55' : '1.6',
          }}
        >
          {title}
        </h4>

        <p
          className={`mt-4 text-sm leading-7 text-slate-600 ${
            featured ? 'sm:text-base' : 'line-clamp-3'
          }`}
        >
          {summary}
        </p>

        <div className="mt-auto flex items-center justify-between pt-7 text-sm font-semibold text-slate-500">
          <span>{getReadingTime(post)} phút đọc</span>
          <span className="text-cyan-700 transition group-hover:translate-x-1">
            Đọc bài viết
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage({ blogdatainit }: Props) {
  const [query, setQuery] = useState('')
  const posts = blogdatainit ?? []

  const filteredPosts = useMemo(() => {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      return posts
    }

    return posts.filter((post) => matchesSearch(post, trimmedQuery))
  }, [posts, query])

  const [featuredPost, ...regularPosts] = filteredPosts

  return (
    <section className="relative -mx-4 overflow-hidden bg-slate-50 px-4 py-16 text-slate-950 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">
              Nguyen Vu Hoang Blog
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Góc nhìn kỹ thuật cho sản phẩm web hiện đại
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Ghi chú về Next.js, React, fintech, backend API và những quyết
              định kỹ thuật giúp sản phẩm chạy ổn định hơn trong thực tế.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <label
              htmlFor="blog-search"
              className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
            >
              Tìm bài viết
            </label>
            <div className="mt-3 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-cyan-500 focus-within:bg-white">
              <span className="text-slate-400" aria-hidden="true">
                /
              </span>
              <input
                id="blog-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Next.js, React, fintech..."
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                type="search"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              {filteredPosts.length} bài viết phù hợp
            </p>
          </div>
        </div>

        {featuredPost ? (
          <div
            className="mt-16 sm:mt-20"
            style={{ marginTop: '72px', marginBottom: '48px' }}
          >
            <BlogCard post={featuredPost} featured />
          </div>
        ) : (
          <div
            className="mt-16 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600 sm:mt-20"
            style={{ marginTop: '72px' }}
          >
            Không tìm thấy bài viết phù hợp.
          </div>
        )}

        {regularPosts.length > 0 && (
          <div
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            style={{ marginTop: '48px' }}
          >
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
