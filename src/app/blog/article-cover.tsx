import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineDocumentText,
  HiOutlineServer,
  HiOutlineShieldCheck,
} from 'react-icons/hi'

const TOPIC_ICONS: Record<string, IconType> = {
  AI: HiOutlineChip,
  DEVELOPMENT: HiOutlineCode,
  DATABASE: HiOutlineDatabase,
  DEVOPS: HiOutlineServer,
  SECURITY: HiOutlineShieldCheck,
}

type ArticleCoverProps = {
  image: string
  alt: string
  topic: string
  sizes: string
  priority?: boolean
}

// 16:9 article cover. Without an image it renders a branded, network-free
// placeholder keyed to the article's topic instead of a stock graphic.
export default function ArticleCover({
  image,
  alt,
  topic,
  sizes,
  priority = false,
}: ArticleCoverProps) {
  const Icon = TOPIC_ICONS[topic] ?? HiOutlineDocumentText

  return (
    <div className="relative aspect-video overflow-hidden bg-blog-elevated">
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          preload={priority}
          loading={priority ? 'eager' : 'lazy'}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(rgba(244,244,245,0.09) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(103,232,249,0.10),transparent_55%)]" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-blog-border-strong bg-blog-surface/80 text-blog-accent transition-transform duration-500 ease-out group-hover:scale-105">
              <Icon className="h-7 w-7" />
            </span>
          </div>
          <span className="absolute bottom-3 right-4 text-[11px] font-medium tracking-wide text-blog-muted/70">
            anhben.com
          </span>
        </div>
      )}
    </div>
  )
}
