'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const nextProgress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0

      setProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-black/40">
      <div
        className="h-full bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_18px_rgba(56,189,248,0.7)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
