import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import { blogFocusRing } from '@/app/blog/blog-ui'
import type { TocItem } from './article-utils'
import ShareButtons from './share-buttons'
import { TableOfContentsDesktop } from './table-of-contents'

type ArticleSidebarProps = {
  title: string
  toc: TocItem[]
}

export default function ArticleSidebar({ title, toc }: ArticleSidebarProps) {
  return (
    <aside
      aria-label="Article tools"
      className="hidden lg:block"
    >
      <div className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col gap-8 overflow-y-auto pb-4 [scrollbar-width:thin]">
        <TableOfContentsDesktop items={toc} />

        <div className="border-t border-blog-border pt-6">
          <p className="mb-3 text-[13px] font-medium text-blog-text">Share</p>
          <ShareButtons title={title} />
        </div>

        <Link
          href="/blog"
          className={`inline-flex items-center gap-1.5 self-start rounded-sm text-[13px] text-blog-muted transition-colors hover:text-blog-text ${blogFocusRing}`}
        >
          <HiArrowLeft aria-hidden className="h-3.5 w-3.5" />
          Back to articles
        </Link>
      </div>
    </aside>
  )
}
