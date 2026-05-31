import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { VercelToolbar } from '@vercel/toolbar/next'
import '@/styles/globals.css'

const siteUrl = 'https://anhben.com'
const defaultOgImage =
  'https://api.jits.com.vn:4001/data/news/image/AnhBen_1235x1235.png'

const quicksand = Quicksand({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer',
    template: '%s | Nguyen Vu Hoang',
  },
  description:
    'Senior fintech engineer building modern web applications, backend APIs, mobile experiences, and system integrations for financial products.',
  keywords: [
    'Nguyen Vu Hoang',
    'BEN',
    'Senior Fintech Engineer',
    'Next.js Developer',
    'React Developer',
    'System Integration',
    'API Development',
  ],
  authors: [{ name: 'Nguyen Vu Hoang' }],
  creator: 'Nguyen Vu Hoang',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Nguyen Vu Hoang Portfolio',
    title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer',
    description:
      'Premium personal portfolio for a senior fintech engineer focused on modern product interfaces and resilient financial systems.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Nguyen Vu Hoang portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer',
    description:
      'Modern personal portfolio for fintech engineering, APIs, mobile delivery, and system integration.',
    images: [defaultOgImage],
  },
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${quicksand.variable} bg-slate-950 font-sans antialiased`}
        suppressHydrationWarning
      >
        <div id="app-root">{children}</div>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  )
}
