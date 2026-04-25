'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AOS from 'aos'
import NProgress from 'nprogress'

export default function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient())
  const pathname = usePathname()

  useEffect(() => {
    const stylesheetId = 'legacy-blog-styles'
    let stylesheet = document.getElementById(stylesheetId) as HTMLLinkElement | null

    if (!stylesheet) {
      stylesheet = document.createElement('link')
      stylesheet.id = stylesheetId
      stylesheet.rel = 'stylesheet'
      stylesheet.href = '/legacy-blog.css'
      document.head.appendChild(stylesheet)
    }

    AOS.init()

    return () => {
      stylesheet?.remove()
    }
  }, [])

  useEffect(() => {
    NProgress.done()
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={undefined}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
