'use client'

import { useMemo } from 'react'

import parse, { Element, type DOMNode } from 'html-react-parser'

import { applyHeadingIds, type TocItem } from './article-utils'
import styles from './article-prose.module.css'

type ArticleContentProps = {
  html?: string
  toc?: TocItem[]
}

// Tags that must never render from CMS HTML: executable content, and
// document-level/stylesheet tags that would leak styles into the page.
const BLOCKED_TAGS = new Set([
  'script',
  'noscript',
  'style',
  'link',
  'meta',
  'head',
  'title',
  'object',
  'embed',
  'svg',
  'canvas',
  'form',
  'button',
  'input',
])

const UNSAFE_URL = /^\s*(javascript|vbscript|data):/i
// Absolute (http/https or protocol-relative) or root-relative only. CMS
// content sometimes contains broken code samples such as
// `src="&quot;/vercel.svg&quot;"`, which would resolve under /blog-details/.
const LOADABLE_SRC = /^(https?:)?\/\/|^\/(?!\/)/i

function sanitizeAttributes(element: Element) {
  for (const name of Object.keys(element.attribs)) {
    const value = element.attribs[name]

    if (
      /^on/i.test(name) ||
      name === 'style' ||
      ((name === 'href' || name === 'src') && UNSAFE_URL.test(value))
    ) {
      delete element.attribs[name]
    }
  }

  if (element.name === 'a' && element.attribs.target === '_blank') {
    element.attribs.rel = 'noopener noreferrer'
  }
}

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
          if (!(domNode instanceof Element)) {
            return undefined
          }

          if (
            BLOCKED_TAGS.has(domNode.name?.toLowerCase()) ||
            (domNode.name === 'img' &&
              !LOADABLE_SRC.test(domNode.attribs.src?.trim() ?? ''))
          ) {
            return <></>
          }

          sanitizeAttributes(domNode)
          return undefined
        },
      }),
    [htmlWithHeadingIds]
  )

  return <div className={styles.prose}>{content}</div>
}
