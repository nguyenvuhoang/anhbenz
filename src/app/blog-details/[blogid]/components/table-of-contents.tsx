'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { blogFocusRing } from '@/app/blog/blog-ui'
import type { TocItem } from './article-utils'

// Sticky header (64px) plus breathing room. The prose `scroll-margin-top`
// (96px) is below this, so a clicked heading lands inside the active zone.
const ACTIVE_OFFSET = 112
// How long a clicked item stays highlighted while smooth scrolling runs.
const CLICK_LOCK_MS = 900

type TableOfContentsProps = {
  items: TocItem[]
}

type Navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => void

function useTocNavigation(items: TocItem[], onNavigated?: () => void) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const lockUntil = useRef(0)

  useEffect(() => {
    if (!items.length) {
      return
    }

    // Active = last heading scrolled past the offset line. At the very
    // bottom, short final sections can never reach it, so pick the last.
    // A handful of rect reads per scroll is cheap, so no rAF batching.
    function update() {
      if (Date.now() < lockUntil.current) {
        return
      }

      const root = document.documentElement
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2
      let current = items[0].id

      for (const item of items) {
        const element = document.getElementById(item.id)

        if (element && element.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = item.id
        }
      }

      if (atBottom && window.scrollY > 0) {
        current = items[items.length - 1].id
      }

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items])

  const navigate: Navigate = (event, id) => {
    const target = document.getElementById(id)

    if (!target) {
      return
    }

    event.preventDefault()
    lockUntil.current = Date.now() + CLICK_LOCK_MS
    setActiveId(id)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
    onNavigated?.()
  }

  return { activeId, navigate }
}

function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[]
  activeId?: string
  onNavigate: Navigate
}) {
  return (
    <ol className="border-l border-blog-border">
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? 'location' : undefined}
              onClick={(event) => onNavigate(event, item.id)}
              className={`-ml-px block border-l py-1.5 pr-2 text-[13px] leading-5 transition-colors ${blogFocusRing} ${
                item.level === 3 ? 'pl-6' : 'pl-3'
              } ${
                isActive
                  ? 'border-blog-accent text-blog-text'
                  : 'border-transparent text-blog-muted hover:text-blog-text'
              }`}
            >
              {item.text}
            </a>
          </li>
        )
      })}
    </ol>
  )
}

// Mobile / tablet: collapsible block placed before the article body.
export function TableOfContentsMobile({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { activeId, navigate } = useTocNavigation(items, () => setIsOpen(false))

  if (!items.length) {
    return null
  }

  return (
    <div className="mb-8 rounded-xl border border-blog-border bg-blog-surface lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="article-toc-mobile"
        onClick={() => setIsOpen((value) => !value)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-blog-text ${blogFocusRing}`}
      >
        <span>
          On this page{' '}
          <span className="font-normal text-blog-muted">({items.length})</span>
        </span>
        <HiChevronDown
          aria-hidden
          className={`h-4 w-4 text-blog-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <nav
          id="article-toc-mobile"
          aria-label="Table of contents"
          className="border-t border-blog-border px-4 py-3"
        >
          <TocList items={items} activeId={activeId} onNavigate={navigate} />
        </nav>
      )}
    </div>
  )
}

// Desktop: rendered inside the sticky sidebar.
export function TableOfContentsDesktop({ items }: TableOfContentsProps) {
  const { activeId, navigate } = useTocNavigation(items)

  if (!items.length) {
    return null
  }

  return (
    <nav aria-label="Table of contents">
      <p className="mb-3 text-[13px] font-medium text-blog-text">On this page</p>
      <TocList items={items} activeId={activeId} onNavigate={navigate} />
    </nav>
  )
}
