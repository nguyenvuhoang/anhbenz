import { Inter } from 'next/font/google'

export const blogFont = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

// Shared horizontal container for header, hero, articles and footer.
export const blogContainer = 'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8'

export const blogFocusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blog-accent'
