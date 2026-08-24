'use client'

import { useMemo } from 'react'

import parse, { Element, type DOMNode } from 'html-react-parser'

import { applyHeadingIds, type TocItem } from './article-utils'

type ArticleContentProps = {
  html?: string
  toc?: TocItem[]
}

const BLOCKED_TAGS = new Set([
  'script',
  'object',
  'embed',
  'svg',
])

export default function ArticleContent({
  html,
  toc = [],
}: ArticleContentProps) {
  const safeHtml = typeof html === 'string' ? html : ''

  const htmlWithHeadingIds = useMemo(
    () => applyHeadingIds(safeHtml, toc),
    [safeHtml, toc]
  )

  const content = useMemo(
    () =>
      parse(htmlWithHeadingIds, {
        replace(domNode: DOMNode) {
          if (
            domNode instanceof Element &&
            BLOCKED_TAGS.has(domNode.name?.toLowerCase())
          ) {
            return <></>
          }

          return undefined
        },
      }),
    [htmlWithHeadingIds]
  )

  return (
    <article className="article-prose rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
      {content}
    </article>
  )
}