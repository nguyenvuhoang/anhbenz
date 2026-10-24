'use client'

import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import type { News } from '@/types'
import BlogCard from './blog-card'
import BlogHero from './blog-hero'
import BlogTopics from './blog-topics'
import { blogContainer, blogFocusRing } from './blog-ui'
import { ALL_TOPICS, getTopicLabel, useBlogPosts } from './use-blog-posts'

const TOPICS_ANCHOR = 'topics'
const ARTICLES_ANCHOR = 'articles'

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

const pageButtonClass = `inline-flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-40 ${blogFocusRing}`

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
    selectedTopic,
    setCurrentPage,
    setQuery,
    setSelectedTopic,
    topicCount,
    topics,
    totalPages,
    totalCount,
  } = useBlogPosts(posts)
  const paginationPages = getPaginationPages(currentPage, totalPages)
  const showFeatured = Boolean(featuredPost) && currentPage === 1

  function goToPage(page: number) {
    setCurrentPage(page)
    document
      .getElementById(ARTICLES_ANCHOR)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <BlogHero
        averageReadingTime={averageReadingTime}
        query={query}
        setQuery={setQuery}
        topicCount={topicCount}
        totalCount={totalCount}
      />

      <div className={`${blogContainer} pb-16 pt-8 sm:pb-20`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <BlogTopics
            id={TOPICS_ANCHOR}
            topics={topics}
            selectedTopic={selectedTopic}
            onSelect={setSelectedTopic}
          />

          <div className="flex shrink-0 items-center gap-3 text-[13px] text-blog-muted">
            <span role="status" aria-live="polite">
              <span className="font-medium tabular-nums text-blog-text">
                {resultCount}
              </span>{' '}
              of <span className="tabular-nums">{totalCount}</span> articles
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className={`rounded-md px-2 py-1 font-medium text-blog-accent transition-colors hover:bg-blog-surface ${blogFocusRing}`}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        <section
          id={ARTICLES_ANCHOR}
          aria-label="Articles"
          className="scroll-mt-24 pt-8"
        >
          {!featuredPost ? (
            <div className="rounded-xl border border-dashed border-blog-border px-6 py-16 text-center">
              <p className="text-base font-medium text-blog-text">
                {hasPosts ? 'No matching articles' : 'No articles yet'}
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm text-blog-muted">
                {hasPosts
                  ? `Nothing matches${query.trim() ? ` “${query.trim()}”` : ''}${
                      selectedTopic !== ALL_TOPICS
                        ? ` in ${getTopicLabel(selectedTopic)}`
                        : ''
                    }. Try another keyword or topic.`
                  : 'New articles will appear here soon.'}
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className={`mt-6 rounded-lg border border-blog-border bg-blog-surface px-4 py-2 text-sm font-medium text-blog-text transition-colors hover:border-blog-border-strong ${blogFocusRing}`}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <>
              {showFeatured && featuredPost && (
                <div>
                  <p className="mb-4 text-[13px] font-medium text-blog-muted">
                    Featured
                  </p>
                  <BlogCard post={featuredPost} priority variant="featured" />
                </div>
              )}

              {paginatedPosts.length > 0 && (
                <div className={showFeatured ? 'pt-12 sm:pt-14' : ''}>
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-blog-text">
                      Latest articles
                    </h2>
                    {totalPages > 1 && (
                      <span className="text-[13px] tabular-nums text-blog-muted">
                        Page {currentPage} of {totalPages}
                      </span>
                    )}
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-12 flex items-center justify-between gap-3 border-t border-blog-border pt-6"
          >
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className={`${pageButtonClass} border-blog-border text-blog-muted hover:border-blog-border-strong hover:text-blog-text`}
            >
              <HiArrowLeft aria-hidden className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-1">
              {paginationPages.map((page, index) => {
                const isActive = page === currentPage
                const previousPage = paginationPages[index - 1]

                return (
                  <span key={page} className="contents">
                    {previousPage && page - previousPage > 1 && (
                      <span
                        aria-hidden
                        className="grid h-9 w-6 place-items-center text-sm text-blog-muted"
                      >
                        …
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label={`Page ${page}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => goToPage(page)}
                      className={`${pageButtonClass} tabular-nums ${
                        isActive
                          ? 'border-blog-text bg-blog-text text-blog-bg'
                          : 'border-transparent text-blog-muted hover:border-blog-border hover:text-blog-text'
                      }`}
                    >
                      {page}
                    </button>
                  </span>
                )
              })}
            </div>

            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className={`${pageButtonClass} border-blog-border text-blog-muted hover:border-blog-border-strong hover:text-blog-text`}
            >
              <span className="hidden sm:inline">Next</span>
              <HiArrowRight aria-hidden className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>
    </>
  )
}
