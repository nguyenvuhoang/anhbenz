'use client'

import { useMemo } from 'react'
import parse from 'html-react-parser'
import { applyHeadingIds, type TocItem } from './article-utils'

type ArticleContentProps = {
  html: string
  toc: TocItem[]
}

export default function ArticleContent({ html, toc }: ArticleContentProps) {
  const htmlWithHeadingIds = useMemo(() => applyHeadingIds(html, toc), [html, toc])

  return (
    <article className="article-prose rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
      {parse(htmlWithHeadingIds)}
    </article>
  )
}
