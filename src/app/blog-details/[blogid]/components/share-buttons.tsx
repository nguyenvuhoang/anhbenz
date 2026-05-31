'use client'

import { usePathname } from 'next/navigation'

type ShareButtonsProps = {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const pathname = usePathname()
  const shareUrl = `https://anhben.com${pathname}`

  const links = [
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(shareUrl)}`,
    },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-100"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={() =>
          navigator.clipboard?.writeText(window.location.href || shareUrl)
        }
        className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-emerald-300/60 hover:text-emerald-100"
      >
        Copy link
      </button>
    </div>
  )
}
