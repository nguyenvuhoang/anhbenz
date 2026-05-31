import type { News } from '@/types'

export type TocItem = {
  id: string
  level: number
  text: string
}

const WORDS_PER_MINUTE = 220

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export function formatArticleDate(value?: string) {
  if (!value) {
    return 'Mới cập nhật'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function getReadingTime(post: News) {
  const text = stripHtml(
    [post.summary, post.content, post.title, post.name].filter(Boolean).join(' ')
  )
  const words = text.split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
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

export function getArticleTopic(post: News) {
  return post.type || 'Engineering'
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 72)
}

export function extractArticleBody(html: string) {
  const match = html.match(
    /<div id=["']ftwp-postcontent["'][^>]*>([\s\S]*)<\/div>\s*<div class=["']news_share/
  )

  return match?.[1] || html
}

export function extractHeadings(html: string): TocItem[] {
  const headings = [...html.matchAll(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi)]
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

export function getArticleTags(post: News) {
  const tags = [getArticleTopic(post), 'Next.js', 'Fintech', 'Performance']
  return [...new Set(tags.filter(Boolean))].slice(0, 5)
}
