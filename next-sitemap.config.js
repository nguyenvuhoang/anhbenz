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
      const response = await fetch(new URL('/api/v1/gateway', apiBase), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          app: 'BO',
          lang: 'vi',
        },
        body: JSON.stringify({
          workflowid: 'WF_BO_SIMPLE_SEARCH_ARTICLE',
          fields: {
            search_text: '',
            page_index: 0,
            page_size: 100,
          },
        }),
      })

      if (!response.ok) {
        return []
      }

      const feed = await response.json()
      const posts = feed?.data?.items || []

      return posts.map((post) => ({
        loc: `/blog-details/${post.article_id}`,
        lastmod: post.publish_date || post.created_date,
        changefreq: 'weekly',
        priority: 0.7,
      }))
    } catch {
      return []
    }
  },
}
