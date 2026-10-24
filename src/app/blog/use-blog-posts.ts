'use client'

import { useMemo, useState } from 'react'
import { ARTICLE_TYPES, normalizeArticleType } from '@/lib/articles'
import type { News } from '@/types'

const WORDS_PER_MINUTE = 220
export const ALL_TOPICS = 'All'
const DEFAULT_TOPIC = 'ENGINEERING'
const POSTS_PER_PAGE = 6

// Lowercases and strips Vietnamese diacritics so "mo rong" matches "mở rộng".
function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .trim()
    .toLowerCase()
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ')
}

function getPostText(post: News) {
  return [
    post.id,
    post.name,
    post.title,
    post.summary,
    post.type,
    post.username,
    stripHtml(post.content),
  ]
    .filter(Boolean)
    .join(' ')
}

export function getPostTopic(post: News) {
  return normalizeArticleType(post.type) || DEFAULT_TOPIC
}

const TOPIC_LABELS: Record<string, string> = {
  [ALL_TOPICS]: 'All Topics',
  AI: 'AI',
  DEVELOPMENT: 'Development',
  DATABASE: 'Database',
  DEVOPS: 'DevOps',
  SECURITY: 'Security',
}

export function getTopicLabel(topic: string) {
  return (
    TOPIC_LABELS[topic] ??
    topic.charAt(0).toUpperCase() + topic.slice(1).toLowerCase()
  )
}

export function formatBlogDate(value?: string) {
  if (!value) {
    return 'Mới cập nhật'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  // A fixed time zone keeps server and client output identical (no
  // hydration mismatch for timestamps near midnight).
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(date)
}

export function getReadingTime(post: News) {
  const content = [post.summary, post.content, post.title, post.name]
    .filter(Boolean)
    .join(' ')
  const words = stripHtml(content).trim().split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

export function useBlogPosts(initialPosts: News[]) {
  const [query, setQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(ALL_TOPICS)
  const [currentPage, setCurrentPage] = useState(1)
  const posts = initialPosts ?? []

  const topics = useMemo(() => {
    const counts = posts.reduce<Record<string, number>>((acc, post) => {
      const topic = getPostTopic(post)
      acc[topic] = (acc[topic] ?? 0) + 1
      return acc
    }, {})
    // Known article types are always listed, in API order; any other
    // types returned by the backend follow alphabetically.
    const knownTopics: string[] = [...ARTICLE_TYPES]
    const extraTopics = Object.keys(counts)
      .filter((topic) => !knownTopics.includes(topic))
      .sort((topicA, topicB) => topicA.localeCompare(topicB))

    return [
      { name: ALL_TOPICS, count: posts.length },
      ...[...knownTopics, ...extraTopics].map((name) => ({
        name,
        count: counts[name] ?? 0,
      })),
    ]
  }, [posts])

  const averageReadingTime = useMemo(() => {
    if (!posts.length) {
      return 0
    }

    const totalReadingTime = posts.reduce(
      (total, post) => total + getReadingTime(post),
      0
    )

    return Math.max(1, Math.round(totalReadingTime / posts.length))
  }, [posts])

  const filteredPosts = useMemo(() => {
    const normalizedQuery = normalizeText(query)

    return posts.filter((post) => {
      const matchesTopic =
        selectedTopic === ALL_TOPICS ||
        getPostTopic(post) === normalizeArticleType(selectedTopic)
      const matchesQuery =
        !normalizedQuery ||
        normalizeText(getPostText(post)).includes(normalizedQuery)

      return matchesTopic && matchesQuery
    })
  }, [posts, query, selectedTopic])

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)
  const totalPages = Math.max(1, Math.ceil(regularPosts.length / POSTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const pageStart = (safePage - 1) * POSTS_PER_PAGE
  const paginatedPosts = regularPosts.slice(pageStart, pageStart + POSTS_PER_PAGE)
  const hasActiveFilters = query.trim().length > 0 || selectedTopic !== ALL_TOPICS

  return {
    clearFilters: () => {
      setQuery('')
      setSelectedTopic(ALL_TOPICS)
      setCurrentPage(1)
    },
    averageReadingTime,
    currentPage: safePage,
    featuredPost,
    filteredPosts,
    hasActiveFilters,
    hasPosts: posts.length > 0,
    paginatedPosts,
    query,
    regularPosts,
    resultCount: filteredPosts.length,
    selectedTopic,
    setCurrentPage,
    setQuery: (value: string) => {
      setQuery(value)
      setCurrentPage(1)
    },
    setSelectedTopic: (value: string) => {
      setSelectedTopic(value)
      setCurrentPage(1)
    },
    topicCount: topics.filter(
      (topic) => topic.name !== ALL_TOPICS && topic.count > 0
    ).length,
    topics,
    totalPages,
    totalCount: posts.length,
  }
}
