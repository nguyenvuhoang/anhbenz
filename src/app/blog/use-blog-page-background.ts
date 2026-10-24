'use client'

import { useEffect } from 'react'

const BLOG_BACKGROUND = '#09090b'

// Paints <html>/<body> with the blog background while a blog page is
// mounted, so overscroll and short pages never flash the site default.
export function useBlogPageBackground() {
  useEffect(() => {
    const previousBodyBackground = document.body.style.backgroundColor
    const previousHtmlBackground = document.documentElement.style.backgroundColor

    document.body.style.backgroundColor = BLOG_BACKGROUND
    document.documentElement.style.backgroundColor = BLOG_BACKGROUND

    return () => {
      document.body.style.backgroundColor = previousBodyBackground
      document.documentElement.style.backgroundColor = previousHtmlBackground
    }
  }, [])
}
