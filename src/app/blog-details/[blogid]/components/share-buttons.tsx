'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiCheck, HiOutlineLink, HiOutlineShare } from 'react-icons/hi'
import { blogFocusRing } from '@/app/blog/blog-ui'

const SITE_URL = 'https://anhben.com'

type ShareButtonsProps = {
  title: string
}

const subscribeNoop = () => () => {}

// Web Share support never changes at runtime; the server snapshot is
// `false`, so the native share button only appears after hydration.
function useCanNativeShare() {
  return useSyncExternalStore(
    subscribeNoop,
    () => typeof navigator.share === 'function',
    () => false
  )
}

const iconButtonClass = `grid h-8 w-8 place-items-center rounded-lg border border-blog-border text-blog-muted transition-colors hover:border-blog-border-strong hover:text-blog-text ${blogFocusRing}`

export default function ShareButtons({ title }: ShareButtonsProps) {
  const pathname = usePathname()
  const shareUrl = `${SITE_URL}${pathname}`
  const [copied, setCopied] = useState(false)
  const canNativeShare = useCanNativeShare()
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
    }
  }, [])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)

      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
      resetTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url: shareUrl })
    } catch {
      // Dismissed by the user; nothing to do.
    }
  }

  const links = [
    {
      label: 'Share on LinkedIn',
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'Share on X',
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'Share on Facebook',
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={copyLink}
        className={`inline-flex h-8 items-center gap-1.5 rounded-lg border border-blog-border px-2.5 text-[13px] font-medium text-blog-muted transition-colors hover:border-blog-border-strong hover:text-blog-text ${blogFocusRing}`}
      >
        {copied ? (
          <HiCheck aria-hidden className="h-4 w-4 text-blog-accent" />
        ) : (
          <HiOutlineLink aria-hidden className="h-4 w-4" />
        )}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy link'}</span>
      </button>

      {canNativeShare && (
        <button
          type="button"
          aria-label="Share"
          onClick={nativeShare}
          className={iconButtonClass}
        >
          <HiOutlineShare aria-hidden className="h-4 w-4" />
        </button>
      )}

      {links.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={iconButtonClass}
        >
          <Icon aria-hidden className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  )
}
