import type { News, NewsQueryObject } from '@/types'

export const ARTICLE_SEARCH_WORKFLOW = 'WF_BO_SIMPLE_SEARCH_ARTICLE'
export const ARTICLE_RETRIEVE_WORKFLOW = 'WF_BO_RETRIEVE_ARTICLE'
export const GATEWAY_PATH = '/api/v1/gateway'
export const ARTICLE_PAGE_SIZE = 100

export type ArticleSearchFields = {
  search_text: string
  page_index: number
  page_size: number
}

export type ArticleSearchRequest = {
  workflowid: typeof ARTICLE_SEARCH_WORKFLOW
  fields: ArticleSearchFields
}

export type ArticleRetrieveRequest = {
  workflowid: typeof ARTICLE_RETRIEVE_WORKFLOW
  fields: {
    article_id: string
  }
}

export const ARTICLE_TYPES = [
  'AI',
  'DEVELOPMENT',
  'DATABASE',
  'DEVOPS',
  'SECURITY',
] as const

export type ArticleType = (typeof ARTICLE_TYPES)[number]

export type RawArticle = {
  article_id: string
  name: string
  title: string
  article_type: ArticleType | string | null
  url: string | null
  publish_date: string | null
  image: string | null
  summary: string | null
  content: string | null
  username: string | null
  created_date?: string | null
  next_article?: RawArticle | null
  previous_article?: RawArticle | null
  image_url?: string | null
}

export type ArticleSearchPayload = {
  total_count: number
  total_pages: number
  has_previous_page?: boolean
  has_next_page?: boolean
  items: RawArticle[]
  total_success?: number
  total_failed?: number
  page_index: number
  page_size: number
}

export type ArticleSearchEnvelope = {
  code: string
  success: boolean
  message: string | null
  execution_id: string
  timestamp: string
  data: ArticleSearchPayload | null
  errors: unknown[]
  metadata: unknown
}

// The gateway wraps the payload in `data`, but the bare payload
// (`{ total_count, items }`) is accepted as well.
export type ArticleSearchResponse = ArticleSearchEnvelope | ArticleSearchPayload

export type ArticleRetrieveResponse = {
  code: string
  success: boolean
  message: string | null
  execution_id: string
  timestamp: string
  data: RawArticle | null
  errors: unknown[]
  metadata: unknown
}

export function createArticleSearchRequest(
  fields: Partial<ArticleSearchFields> = {}
): ArticleSearchRequest {
  return {
    workflowid: ARTICLE_SEARCH_WORKFLOW,
    fields: {
      search_text: fields.search_text ?? '',
      page_index: fields.page_index ?? 0,
      page_size: fields.page_size ?? ARTICLE_PAGE_SIZE,
    },
  }
}

export function createArticleRetrieveRequest(
  articleId: string
): ArticleRetrieveRequest {
  return {
    workflowid: ARTICLE_RETRIEVE_WORKFLOW,
    fields: {
      article_id: articleId,
    },
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isRawArticle(value: unknown): value is RawArticle {
  return isRecord(value) && typeof value.article_id === 'string'
}

export function normalizeArticleType(value: string | null | undefined) {
  return (value ?? '').trim().toUpperCase()
}

// Accepts absolute http(s) URLs and root-relative paths; anything else
// (null, "", whitespace) falls back to the card's placeholder image.
function normalizeImageUrl(...candidates: (string | null | undefined)[]) {
  for (const candidate of candidates) {
    const value = candidate?.trim()

    if (value && (/^https?:\/\//i.test(value) || value.startsWith('/'))) {
      return value
    }
  }

  return ''
}

function mapRawArticle(
  article: RawArticle,
  nextnews: News | null,
  prevnews: News | null
): News {
  return {
    id: article.article_id,
    name: article.name ?? '',
    title: article.title ?? '',
    type: normalizeArticleType(article.article_type),
    url: article.url ?? '',
    pubdt: article.publish_date ?? '',
    image: normalizeImageUrl(article.image_url, article.image),
    summary: article.summary ?? '',
    content: article.content ?? '',
    username: article.username ?? '',
    createdt: article.created_date ?? '',
    nextnews,
    prevnews,
  }
}

function mapRelatedArticle(article: RawArticle | null | undefined): News | null {
  return article ? mapRawArticle(article, null, null) : null
}

export function mapArticleToNews(article: RawArticle): News {
  return mapRawArticle(
    article,
    mapRelatedArticle(article.next_article),
    mapRelatedArticle(article.previous_article)
  )
}

export function extractArticleItems(response: unknown): RawArticle[] {
  if (!isRecord(response)) {
    throw new Error('Invalid article feed response')
  }

  if (response.success === false) {
    throw new Error(
      typeof response.message === 'string' && response.message
        ? response.message
        : 'Failed to load articles'
    )
  }

  const payload = isRecord(response.data) ? response.data : response
  const items = Array.isArray(payload.items)
    ? payload.items
    : isRecord(payload.data) && Array.isArray(payload.data.items)
      ? payload.data.items
      : null

  if (!items) {
    throw new Error('Article feed response does not contain items')
  }

  return items.filter(isRawArticle)
}

export function mapArticlesToNews(response: unknown): News[] {
  return extractArticleItems(response).map(mapArticleToNews)
}

// Builds a detail record from the search feed, deriving previous/next
// articles from the feed order.
export function findArticleInFeed(
  response: unknown,
  articleId: string
): News | null {
  const items = extractArticleItems(response)
  const index = items.findIndex((item) => item.article_id === articleId)

  if (index === -1) {
    return null
  }

  return mapRawArticle(
    items[index],
    mapRelatedArticle(items[index + 1]),
    mapRelatedArticle(items[index - 1])
  )
}

export function mapArticleDetailToNews(response: ArticleRetrieveResponse): News {
  if (!response.success || !response.data) {
    throw new Error(response.message || 'Failed to load article detail')
  }

  return mapArticleToNews(response.data)
}

export function toNewsQueryObject(post: News): NewsQueryObject {
  return {
    result: {
      data: post,
    },
  }
}
