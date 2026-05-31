'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { News } from '@/types'
import {
  formatBlogDate,
  getPostTopic,
  getReadingTime,
} from './use-blog-posts'

const fallbackImage = '/vercel.svg'
const fallbackSummary =
  'Ghi chú thực chiến về kỹ thuật, sản phẩm và cách xây dựng hệ thống bền vững hơn.'

type BlogCardProps = {
  post: News
  priority?: boolean
  variant?: 'featured' | 'default'
}

export default function BlogCard({
  post,
  priority = false,
  variant = 'default',
}: BlogCardProps) {
  const isFeatured = variant === 'featured'
  const title = post.title || post.name
  const summary = post.summary || fallbackSummary
  const image = post.image || fallbackImage
  const topic = getPostTopic(post)

  return (
    <Link
      href={`/blog-details/${post.id}`}
      className={`group relative grid min-h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07] hover:shadow-cyan-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
        isFeatured ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div
        className={`relative overflow-hidden bg-slate-950 ${
          isFeatured ? 'min-h-88 lg:min-h-full' : 'aspect-16/10'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={
            isFeatured
              ? '(min-width: 1024px) 50vw, 100vw'
              : '(min-width: 1280px) 29vw, (min-width: 768px) 45vw, 100vw'
          }
          className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
          priority={priority}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#05070b] via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-black/65 px-3 py-1 text-xs font-bold uppercase text-cyan-100 backdrop-blur">
          {topic}
        </div>
        {isFeatured && (
          <div className="absolute bottom-4 left-4 rounded-full border border-violet-300/25 bg-violet-400/15 px-3 py-1 text-xs font-bold text-violet-100 backdrop-blur">
            Featured intelligence
          </div>
        )}
      </div>

      <article
        className={`flex min-h-0 flex-col bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025)_45%,rgba(34,211,238,0.09))] ${
          isFeatured ? 'p-6 sm:p-8 lg:p-10' : 'p-5'
        }`}
      >
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-slate-300">
          <time dateTime={post.pubdt || post.createdt}>
            {formatBlogDate(post.pubdt || post.createdt)}
          </time>
          <span className="h-px w-8 bg-cyan-300/60" />
          <span>{getReadingTime(post)} phút đọc</span>
        </div>

        <h2
          className={`font-bold text-white transition group-hover:text-cyan-100 ${
            isFeatured
              ? 'text-2xl leading-tight sm:text-3xl'
              : 'line-clamp-3 text-lg leading-7'
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-4 text-sm leading-7 text-slate-300 ${
            isFeatured ? 'sm:text-base' : 'line-clamp-3'
          }`}
        >
          {summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-bold">
          <span className="inline-flex items-center gap-2 text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.85)]" />
            Signal ready
          </span>
          <span className="text-cyan-200 transition group-hover:translate-x-1">
            Đọc bài viết →
          </span>
        </div>
      </article>
    </Link>
  )
}
