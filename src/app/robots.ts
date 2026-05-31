import type { MetadataRoute } from 'next'

const siteUrl = 'https://anhben.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/400', '/404', '/500', '/comming-soon', '/api/'],
      },
    ],
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
