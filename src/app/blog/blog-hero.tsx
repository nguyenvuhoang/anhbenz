'use client'

import { useEffect, useRef } from 'react'
import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi'
import { blogContainer, blogFocusRing } from './blog-ui'

type BlogHeroProps = {
  averageReadingTime: number
  query: string
  setQuery: (value: string) => void
  totalCount: number
  topicCount: number
}

function isEditableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  )
}

export default function BlogHero({
  averageReadingTime,
  query,
  setQuery,
  totalCount,
  topicCount,
}: BlogHeroProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  // "/" focuses the search field from anywhere on the page.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key !== '/' ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        isEditableTarget(event.target)
      ) {
        return
      }

      event.preventDefault()
      inputRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const stats = [
    { label: totalCount === 1 ? 'article' : 'articles', value: totalCount },
    { label: topicCount === 1 ? 'topic' : 'topics', value: topicCount },
    { label: 'min average read', value: averageReadingTime },
  ]

  return (
    <section
      aria-labelledby="blog-hero-title"
      className="border-b border-blog-border"
    >
      <div className={`${blogContainer} py-12 sm:py-16`}>
        <p className="text-[13px] font-medium tracking-wide text-blog-accent">
          Insights <span className="text-blog-muted">/ Engineering &amp; AI</span>
        </p>

        <h1
          id="blog-hero-title"
          className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-blog-text sm:text-[2.5rem] lg:text-[2.75rem]"
        >
          Ideas, Engineering &amp; Artificial Intelligence
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-blog-muted sm:text-base">
          Practical writing on AI systems, software development, databases,
          DevOps and security, drawn from building real products.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <HiOutlineSearch
              aria-hidden
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-blog-muted"
            />
            <input
              ref={inputRef}
              id="blog-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles, topics, authors…"
              autoComplete="off"
              className="h-11 w-full scroll-mt-24 rounded-lg border border-blog-border bg-blog-surface pl-10 pr-16 text-sm text-blog-text transition-colors placeholder:text-blog-muted/70 hover:border-blog-border-strong focus:border-blog-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blog-accent/25 [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setQuery('')
                  inputRef.current?.focus()
                }}
                className={`absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-blog-muted transition-colors hover:bg-blog-elevated hover:text-blog-text ${blogFocusRing}`}
              >
                <HiOutlineX aria-hidden className="h-4 w-4" />
              </button>
            ) : (
              <kbd
                aria-hidden
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-blog-border px-1.5 font-sans text-[11px] leading-5 text-blog-muted"
              >
                /
              </kbd>
            )}
          </div>

          <dl className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-blog-muted">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-semibold tabular-nums text-blog-text">
                  {stat.value}
                </dd>
                <dd aria-hidden>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
