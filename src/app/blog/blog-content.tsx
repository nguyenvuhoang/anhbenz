'use client'

import type { News } from '@/types'
import BlogCard from './blog-card'
import BlogHero from './blog-hero'
import { useBlogPosts } from './use-blog-posts'

type BlogContentProps = {
  posts: News[]
}

function getPaginationPages(currentPage: number, totalPages: number) {
  return Array.from({ length: totalPages }, (_, index) => index + 1).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      Math.abs(page - currentPage) <= 1
  )
}

export default function BlogContent({ posts }: BlogContentProps) {
  const {
    averageReadingTime,
    clearFilters,
    currentPage,
    featuredPost,
    hasActiveFilters,
    hasPosts,
    paginatedPosts,
    query,
    resultCount,
    setCurrentPage,
    setQuery,
    topics,
    totalPages,
    totalCount,
  } = useBlogPosts(posts)
  const paginationPages = getPaginationPages(currentPage, totalPages)

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-20 pt-10 text-white sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_4%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(167,139,250,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_8px)] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <BlogHero
          averageReadingTime={averageReadingTime}
          query={query}
          setQuery={setQuery}
          topicCount={topics.length - 1}
          totalCount={totalCount}
        />
 

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-white/10 py-5 text-sm text-slate-400">
          <span>
            {resultCount} / {totalCount} bài viết phù hợp
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-full border border-amber-200/40 px-4 py-2 font-bold text-amber-100 transition hover:bg-amber-200 hover:text-slate-950"
            >
              Reset filter
            </button>
          )}
        </div>

        <section id="articles" className="scroll-mt-28 pt-8 sm:pt-10">
         
          {featuredPost ? (
            <BlogCard post={featuredPost} priority variant="featured" />
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-center text-slate-300">
              {hasPosts
                ? 'Không tìm thấy bài viết phù hợp.'
                : 'Chưa có bài viết để hiển thị.'}
            </div>
          )}
        </section>

        {paginatedPosts.length > 0 && (
          <section className="pt-24 sm:pt-28">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-sm font-bold uppercase text-violet-200">
                  Knowledge stream
                </p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Danh sách bài viết
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-12 w-full overflow-x-auto"
          >
            <div className="mx-auto flex w-max min-w-0 flex-row items-center justify-center gap-2 rounded-full border border-white/10 bg-black/35 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <button
                type="button"
                aria-label="Trang trước"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="h-10 rounded-full border border-white/10 px-4 text-sm font-bold text-slate-300 transition hover:border-cyan-300/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/10 disabled:hover:text-slate-300"
              >
                Trước
              </button>

              {paginationPages.map((page, index) => {
                const isActive = page === currentPage
                const previousPage = paginationPages[index - 1]

                return (
                  <span key={page} className="contents">
                    {previousPage && page - previousPage > 1 && (
                      <span className="grid h-10 min-w-10 place-items-center text-sm font-bold text-slate-500">
                        ...
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label={`Trang ${page}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 min-w-10 rounded-full border px-3 text-sm font-bold transition ${
                        isActive
                          ? 'border-cyan-200 bg-linear-to-r from-cyan-200 to-sky-300 text-slate-950'
                          : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/70 hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  </span>
                )
              })}

              <button
                type="button"
                aria-label="Trang sau"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="h-10 rounded-full border border-white/10 px-4 text-sm font-bold text-slate-300 transition hover:border-cyan-300/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/10 disabled:hover:text-slate-300"
              >
                Sau
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  )
}
