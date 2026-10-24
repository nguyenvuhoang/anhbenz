'use client'

import { blogFocusRing } from './blog-ui'
import { getTopicLabel } from './use-blog-posts'

type Topic = {
  name: string
  count: number
}

type BlogTopicsProps = {
  id: string
  topics: Topic[]
  selectedTopic: string
  onSelect: (topic: string) => void
}

export default function BlogTopics({
  id,
  topics,
  selectedTopic,
  onSelect,
}: BlogTopicsProps) {
  return (
    <div
      id={id}
      role="group"
      aria-label="Filter by topic"
      className="-mx-4 flex scroll-mt-24 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {topics.map((topic) => {
        const isActive = topic.name === selectedTopic

        return (
          <button
            key={topic.name}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(topic.name)}
            className={`inline-flex h-9 shrink-0 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors duration-200 ${blogFocusRing} ${
              isActive
                ? 'border-blog-text bg-blog-text text-blog-bg'
                : 'border-blog-border bg-blog-surface text-blog-muted hover:border-blog-border-strong hover:text-blog-text'
            }`}
          >
            {getTopicLabel(topic.name)}
            <span
              className={`text-xs tabular-nums ${
                isActive ? 'text-blog-bg/60' : 'text-blog-muted/80'
              }`}
            >
              {topic.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
