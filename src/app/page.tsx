import type { Metadata } from 'next'
import { PortfolioPage } from '@/components/portfolio/portfolio-page'

export const metadata: Metadata = {
  title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer Portfolio',
  description:
    'Premium personal portfolio for Nguyen Vu Hoang, a senior fintech engineer building modern web apps, APIs, mobile experiences, and financial system integrations.',
  openGraph: {
    title: 'Nguyen Vu Hoang (BEN) | Senior Fintech Engineer Portfolio',
    description:
      'Modern personal brand portfolio covering fintech engineering, web apps, APIs, mobile delivery, and system integration.',
    url: '/',
    images: [
      {
        url: 'https://api.jits.com.vn:4001/data/news/image/AnhBen_1235x1235.png',
        width: 800,
        height: 600,
        alt: 'Nguyen Vu Hoang portfolio preview',
      },
    ],
  },
}

export default function Page() {
  return <PortfolioPage />
}
