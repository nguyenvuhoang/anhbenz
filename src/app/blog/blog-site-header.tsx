'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from 'react-icons/hi'
import BlogLogo from './blog-logo'
import { blogContainer, blogFocusRing } from './blog-ui'

const navItems = [
  { href: '/blog', label: 'Blog', current: true },
  { href: '/blog#topics', label: 'Topics', current: false },
  { href: '/', label: 'About', current: false },
  { href: '/#contact', label: 'Contact', current: false },
]

export default function BlogSiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  // The search field lives on the listing page; elsewhere, link to it.
  const searchHref = usePathname() === '/blog' ? '#blog-search' : '/blog#blog-search'

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-blog-border/80 bg-blog-bg/80 backdrop-blur-xl">
      <div className={`${blogContainer} flex h-16 items-center justify-between gap-6`}>
        <BlogLogo showSection priority />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${blogFocusRing} ${
                item.current
                  ? 'text-blog-text'
                  : 'text-blog-muted hover:text-blog-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={searchHref}
            className={`hidden h-9 items-center gap-2 rounded-lg border border-blog-border bg-blog-surface px-3 text-sm text-blog-muted transition-colors hover:border-blog-border-strong hover:text-blog-text sm:inline-flex ${blogFocusRing}`}
          >
            <HiOutlineSearch aria-hidden className="h-4 w-4" />
            Search
            <kbd className="rounded border border-blog-border px-1.5 font-sans text-[11px] leading-5 text-blog-muted">
              /
            </kbd>
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="blog-mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((value) => !value)}
            className={`grid h-9 w-9 place-items-center rounded-lg border border-blog-border text-blog-text transition-colors hover:bg-blog-surface md:hidden ${blogFocusRing}`}
          >
            {isOpen ? (
              <HiOutlineX aria-hidden className="h-5 w-5" />
            ) : (
              <HiOutlineMenu aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="blog-mobile-nav"
          aria-label="Mobile"
          className="border-t border-blog-border md:hidden"
        >
          <div className={`${blogContainer} grid gap-1 py-3`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-blog-surface ${blogFocusRing} ${
                  item.current ? 'text-blog-text' : 'text-blog-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
