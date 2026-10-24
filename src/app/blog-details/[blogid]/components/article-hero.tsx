import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import ArticleCover from '@/app/blog/article-cover'
import { blogFocusRing } from '@/app/blog/blog-ui'
import {
  formatBlogDate,
  getPostTopic,
  getReadingTime,
  getTopicLabel,
} from '@/app/blog/use-blog-posts'
import type { News } from '@/types'
import { getArticleDescription, getArticleTitle } from './article-utils'
import ShareButtons from './share-buttons'

const DEFAULT_AUTHOR = 'Nguyen Vu Hoang'

type ArticleHeroProps = {
  post: News
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(-2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  const title = getArticleTitle(post)
  const topic = getPostTopic(post)
  const publishedAt = post.pubdt || post.createdt
  const author = post.username || DEFAULT_AUTHOR

  return (
    <header className="pt-8 sm:pt-10">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-blog-muted">
          <li>
            <Link
              href="/blog"
              className={`inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-blog-text ${blogFocusRing}`}
            >
              <HiArrowLeft aria-hidden className="h-3.5 w-3.5" />
              Back to articles
            </Link>
          </li>
          <li aria-hidden className="text-blog-border-strong">
            /
          </li>
          <li aria-current="page">{getTopicLabel(topic)}</li>
        </ol>
      </nav>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-blog-muted">
        <span className="rounded-md border border-blog-accent/20 bg-blog-accent/[0.08] px-2 py-0.5 text-xs font-medium text-blog-accent">
          {getTopicLabel(topic)}
        </span>
        {publishedAt && (
          <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
        )}
      </div>

      <h1 className="mt-4 max-w-[850px] text-[2rem] font-semibold leading-[1.15] tracking-tight text-blog-text sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.1]">
        {title}
      </h1>

      <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-blog-muted sm:text-lg">
        {getArticleDescription(post)}
      </p>

      <div className="mt-8 flex flex-col gap-4 border-y border-blog-border py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blog-border bg-blog-elevated text-xs font-semibold text-blog-text"
          >
            {getInitials(author)}
          </span>
          <div className="text-[13px] leading-5">
            <p className="font-medium text-blog-text">{author}</p>
            <p className="text-blog-muted">{getReadingTime(post)} phút đọc</p>
          </div>
        </div>
        <ShareButtons title={title} />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-blog-border">
        <ArticleCover
          image={post.image}
          alt={title}
          topic={topic}
          priority
          sizes="(min-width: 1200px) 1088px, 100vw"
        />
      </div>
    </header>
  )
}
