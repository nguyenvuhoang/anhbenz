import Image from 'next/image'
import Link from 'next/link'
import type { News } from '@/types'
import {
  formatArticleDate,
  getArticleDescription,
  getArticleTitle,
  getArticleTopic,
  getReadingTime,
} from './article-utils'

type RelatedArticlesProps = {
  posts: News[]
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  const relatedPosts = posts.filter(Boolean).slice(0, 3)

  if (!relatedPosts.length) {
    return null
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-cyan-200">
            Related articles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Bài viết liên quan
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-100 sm:inline-flex"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {relatedPosts.map((post) => {
          const title = getArticleTitle(post)

          return (
            <Link
              key={post.id}
              href={`/blog-details/${post.id}`}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              {post.image && (
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 29vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>
              )}
              <article className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-cyan-200">
                  <span>{getArticleTopic(post)}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>{formatArticleDate(post.pubdt || post.createdt)}</span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-white">
                  {title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                  {getArticleDescription(post)}
                </p>
                <div className="mt-5 text-sm font-bold text-emerald-100">
                  {getReadingTime(post)} phút đọc
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
