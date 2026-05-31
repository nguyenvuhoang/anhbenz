import type { News } from '@/types'
import {
  formatArticleDate,
  getArticleTags,
  getArticleTitle,
  getArticleTopic,
  getReadingTime,
  type TocItem,
} from './article-utils'
import ShareButtons from './share-buttons'
import TableOfContents from './table-of-contents'

type ArticleSidebarProps = {
  post: News
  toc: TocItem[]
}

export default function ArticleSidebar({ post, toc }: ArticleSidebarProps) {
  const title = getArticleTitle(post)
  const tags = getArticleTags(post)

  return (
    <aside className="space-y-4 lg:sticky lg:top-24">
      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/15 backdrop-blur">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold uppercase text-white">
            Table of contents
          </h2>
          <span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs font-bold text-cyan-100">
            {toc.length}
          </span>
        </div>
        <TableOfContents items={toc} />
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/15 backdrop-blur">
        <h2 className="text-sm font-bold uppercase text-white">Article signal</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate-400">Reading</dt>
            <dd className="font-bold text-cyan-100">{getReadingTime(post)} phút</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate-400">Topic</dt>
            <dd className="max-w-36 truncate font-bold text-white">
              {getArticleTopic(post)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate-400">Published</dt>
            <dd className="font-bold text-emerald-100">
              {formatArticleDate(post.pubdt || post.createdt)}
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/15 backdrop-blur">
        <h2 className="text-sm font-bold uppercase text-white">Share</h2>
        <div className="mt-4">
          <ShareButtons title={title} />
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-linear-to-br from-cyan-300/10 via-white/[0.04] to-violet-400/10 p-5 shadow-xl shadow-black/15 backdrop-blur">
        <h2 className="text-sm font-bold uppercase text-white">Author</h2>
        <p className="mt-3 text-lg font-bold text-white">
          {post.username || 'Nguyen Vu Hoang'}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Senior frontend engineer focused on fintech, core banking systems and
          resilient product interfaces.
        </p>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/15 backdrop-blur">
        <h2 className="text-sm font-bold uppercase text-white">Topics</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </aside>
  )
}
