import { BLOG_REVALIDATE_SECONDS, getBlogPosts } from '@/lib/blog'

export const revalidate = 120

export async function GET() {
  try {
    const posts = await getBlogPosts()

    return Response.json(
      {
        result: {
          data: posts,
        },
        meta: {
          count: posts.length,
          revalidate: BLOG_REVALIDATE_SECONDS,
        },
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${BLOG_REVALIDATE_SECONDS}, stale-while-revalidate=600`,
        },
      }
    )
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        error: 'Unable to load blog posts',
      },
      {
        status: 500,
      }
    )
  }
}
