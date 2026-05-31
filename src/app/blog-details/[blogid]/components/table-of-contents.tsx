'use client'

import { useEffect, useState } from 'react'
import type { TocItem } from './article-utils'

type TableOfContentsProps = {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    if (!items.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-18% 0px -68% 0px',
        threshold: 0.01,
      }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  if (!items.length) {
    return (
      <p className="text-sm leading-6 text-slate-400">
        Nội dung bài viết sẽ hiển thị theo luồng đọc chính.
      </p>
    )
  }

  return (
    <nav className="space-y-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block border-l px-3 py-2 text-sm leading-5 transition ${
            activeId === item.id
              ? 'border-cyan-300 bg-cyan-300/10 text-cyan-100'
              : 'border-white/10 text-slate-400 hover:border-cyan-300/60 hover:text-white'
          } ${item.level === 3 ? 'ml-3' : ''}`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}
