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

export type RawArticle = {
  article_id: string
  name: string
  title: string
  article_type: string
  url: string
  publish_date: string
  image: string
  summary: string
  content: string
  username: string
  created_date: string
  next_article: RawArticle | null
  previous_article: RawArticle | null
  image_url?: string
}

export type ArticleSearchResponse = {
  code: string
  success: boolean
  message: string | null
  execution_id: string
  timestamp: string
  data: {
    total_count: number
    total_pages: number
    has_previous_page: boolean
    has_next_page: boolean
    items: RawArticle[]
    total_success: number
    total_failed: number
    page_index: number
    page_size: number
  }
  errors: unknown[]
  metadata: unknown
}

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

function mapRelatedArticle(article: RawArticle | null): News | null {
  if (!article) {
    return null
  }

  return {
    id: article.article_id,
    name: article.name,
    title: article.title,
    type: article.article_type,
    url: article.url,
    pubdt: article.publish_date,
    image: article.image_url || article.image,
    summary: article.summary,
    content: article.content,
    username: article.username,
    createdt: article.created_date,
    nextnews: null,
    prevnews: null,
  }
}

export function mapArticleToNews(article: RawArticle): News {
  return {
    id: article.article_id,
    name: article.name,
    title: article.title,
    type: article.article_type,
    url: article.url,
    pubdt: article.publish_date,
    image: article.image_url || article.image,
    summary: article.summary,
    content: article.content,
    username: article.username,
    createdt: article.created_date,
    nextnews: mapRelatedArticle(article.next_article),
    prevnews: mapRelatedArticle(article.previous_article),
  }
}

export function mapArticlesToNews(response: ArticleSearchResponse): News[] {
  if (!response.success) {
    throw new Error(response.message || 'Failed to load articles')
  }

  return response.data.items.map(mapArticleToNews)
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
