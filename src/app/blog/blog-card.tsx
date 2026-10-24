'use client'

import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import type { News } from '@/types'
import ArticleCover from './article-cover'
import {
  formatBlogDate,
  getPostTopic,
  getReadingTime,
  getTopicLabel,
} from './use-blog-posts'

const fallbackSummary =
  'Ghi chú thực chiến về kỹ thuật, sản phẩm và cách xây dựng hệ thống bền vững hơn.'

type BlogCardProps = {
  post: News
  priority?: boolean
  variant?: 'featured' | 'default'
}

function ArticleMeta({ post, topic }: { post: News; topic: string }) {
  const publishedAt = post.pubdt || post.createdt

  return (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-blog-muted">
      <span className="rounded-md border border-blog-accent/20 bg-blog-accent/[0.08] px-2 py-0.5 font-medium text-blog-accent">
        {getTopicLabel(topic)}
      </span>
      {publishedAt && (
        <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
      )}
      <span aria-hidden className="h-0.5 w-0.5 rounded-full bg-blog-muted" />
      <span>{getReadingTime(post)} phút đọc</span>
    </div>
  )
}

export default function BlogCard({
  post,
  priority = false,
  variant = 'default',
}: BlogCardProps) {
  const title = post.title || post.name
  const summary = post.summary || fallbackSummary
  const topic = getPostTopic(post)
  const href = `/blog-details/${post.id}`

  if (variant === 'featured') {
    return (
      <article className="group relative grid overflow-hidden rounded-2xl border border-blog-border bg-blog-surface transition-colors duration-300 hover:border-blog-border-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-blog-accent lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <ArticleCover
          image={post.image}
          alt={title}
          topic={topic}
          priority={priority}
          sizes="(min-width: 1200px) 620px, (min-width: 1024px) 54vw, 100vw"
        />

        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <ArticleMeta post={post} topic={topic} />

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-blog-text sm:text-[1.75rem]">
            <Link
              href={href}
              className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
            >
              {title}
            </Link>
          </h2>

          <p className="line-clamp-4 text-[15px] leading-7 text-blog-muted">
            {summary}
          </p>

          <span
            aria-hidden
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blog-text"
          >
            Read article
            <HiArrowRight className="h-4 w-4 text-blog-accent transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    )
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-blog-border bg-blog-surface transition-colors duration-300 hover:border-blog-border-strong hover:bg-blog-elevated has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-blog-accent">
      <ArticleCover
        image={post.image}
        alt={title}
        topic={topic}
        sizes="(min-width: 1200px) 373px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <ArticleMeta post={post} topic={topic} />

        <h3 className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-blog-text">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-blog-muted">
          {summary}
        </p>
      </div>
    </article>
  )
}
