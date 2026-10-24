import type { News } from '@/types'

export type TocItem = {
  id: string
  level: number
  text: string
}

export function stripHtml(value?: string | null) {
  if (!value) {
    return ''
  }

  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getArticleTitle(post: News) {
  return post.title || post.name || 'Article'
}

export function getArticleDescription(post: News) {
  return (
    post.summary ||
    stripHtml(post.content).slice(0, 156) ||
    'Góc nhìn kỹ thuật về sản phẩm web, fintech và hệ thống số hiện đại.'
  )
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 72)
}

function normalizeHeadingText(value: string) {
  return stripHtml(value).toLowerCase()
}

export function extractArticleBody(html: string, title?: string) {
  const match = html.match(
    /<div id=["']ftwp-postcontent["'][^>]*>([\s\S]*)<\/div>\s*<div class=["']news_share/
  )
  const body = (match?.[1] || html).trim()

  if (!title) {
    return body
  }

  // Many articles open with a heading that repeats the page title; the
  // article header already renders it as the H1.
  const leadingHeading = body.match(/^<h([1-2])[^>]*>([\s\S]*?)<\/h\1>/i)

  if (
    leadingHeading &&
    normalizeHeadingText(leadingHeading[2]) === normalizeHeadingText(title)
  ) {
    return body.slice(leadingHeading[0].length).trim()
  }

  return body
}

export function extractHeadings(html: string): TocItem[] {
  const headings = Array.from(
    html.matchAll(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi)
  )
  const usedIds = new Map<string, number>()

  return headings
    .map((heading) => {
      const level = Number(heading[1])
      const attrs = heading[2] || ''
      const text = stripHtml(heading[3])
      const existingId = attrs.match(/\sid=["']([^"']+)["']/i)?.[1]
      const baseId = existingId || slugify(text)
      const count = usedIds.get(baseId) ?? 0
      usedIds.set(baseId, count + 1)

      return {
        id: count > 0 ? `${baseId}-${count + 1}` : baseId,
        level,
        text,
      }
    })
    .filter((item) => item.id && item.text)
}

export function applyHeadingIds(html: string, toc: TocItem[]) {
  let index = 0

  return html.replace(/<h([2-3])([^>]*)>/gi, (match, level, attrs) => {
    const item = toc[index]
    index += 1

    if (!item || /\sid=["'][^"']+["']/i.test(attrs)) {
      return match
    }

    return `<h${level}${attrs} id="${item.id}">`
  })
}
