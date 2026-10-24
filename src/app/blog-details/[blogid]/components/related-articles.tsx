import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import BlogCard from '@/app/blog/blog-card'
import { blogFocusRing } from '@/app/blog/blog-ui'
import type { News } from '@/types'

type RelatedArticlesProps = {
  posts: News[]
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts.length) {
    return null
  }

  return (
    <section aria-labelledby="related-articles-title" className="border-t border-blog-border pt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2
          id="related-articles-title"
          className="text-2xl font-semibold tracking-tight text-blog-text"
        >
          Related articles
        </h2>
        <Link
          href="/blog"
          className={`inline-flex items-center gap-1.5 rounded-sm text-[13px] font-medium text-blog-muted transition-colors hover:text-blog-text ${blogFocusRing}`}
        >
          View all
          <HiArrowRight aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
