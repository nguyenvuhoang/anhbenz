module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://anhben.com',
  generateRobotsTxt: true,
  exclude: ['/400', '/404', '/500', '/comming-soon', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/400', '/404', '/500', '/comming-soon', '/api/'],
      },
    ],
  },
  additionalPaths: async (config) => {
    const apiBase = process.env.NEXT_PUBLIC_REST_API_ENDPOINT

    if (!apiBase) {
      return []
    }

    try {
      const response = await fetch(new URL('/data/allnews', apiBase))

      if (!response.ok) {
        return []
      }

      const feed = await response.json()
      const posts = feed?.result?.data || []

      return posts.map((post) => ({
        loc: `/blog-details/${post.id}`,
        lastmod: post.pubdt || post.createdt,
        changefreq: 'weekly',
        priority: 0.7,
      }))
    } catch {
      return []
    }
  },
}
