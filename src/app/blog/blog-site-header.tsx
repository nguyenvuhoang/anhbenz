'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog#topics', label: 'Topics' },
  { href: '/', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function BlogSiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060a12]/75 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-20 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="relative flex min-h-20 items-center justify-between gap-4 px-4 py-3 sm:px-5">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-base font-black text-cyan-100 shadow-lg shadow-cyan-950/30">
                AB
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.95)]" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-lg font-bold text-white">
                  Anh Ben
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/[0.06] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#blog-search"
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-100"
              >
                / Search
              </a>
              <a
                href="#articles"
                className="rounded-full bg-linear-to-r from-cyan-200 via-sky-300 to-violet-300 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02]"
              >
                Start Reading
              </a>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-black text-white lg:hidden"
            >
              {isOpen ? 'X' : 'M'}
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
              <nav className="grid gap-2 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <a
                  href="#blog-search"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-cyan-100"
                >
                  / Search
                </a>
                <a
                  href="#articles"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-cyan-200 px-4 py-3 text-sm font-black text-slate-950"
                >
                  Start Reading
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
