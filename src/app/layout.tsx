import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/globals.css'

const quicksand = Quicksand({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anhben.com'),
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Nguyen Vu Hoang Portfolio',
    title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer',
    description:
      'Premium personal portfolio for a senior fintech engineer focused on modern product interfaces and resilient financial systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer',
    description:
      'Modern personal portfolio for fintech engineering, APIs, mobile delivery, and system integration.',
  },
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${quicksand.variable} bg-slate-950 font-sans antialiased`}
        suppressHydrationWarning
      >
        <div id="app-root">{children}</div>
      </body>
    </html>
  )
}
