import Image from 'next/image'
import Link from 'next/link'
import logo from '@/publish/images/logo/ben.png'
import { blogFocusRing } from './blog-ui'

type BlogLogoProps = {
  // Show the "/ Insights" section label after the brand name.
  showSection?: boolean
  // Eager-load where the logo is above the fold (the sticky header).
  priority?: boolean
}

// Official mark + wordmark shared by the blog header and footer. The mark
// is square, so equal width/height with object-contain never distorts it.
export default function BlogLogo({
  showSection = false,
  priority = false,
}: BlogLogoProps) {
  return (
    <Link
      href="/blog"
      aria-label="Anh Ben Insights — blog home"
      className={`flex min-w-0 items-center gap-2.5 rounded-md ${blogFocusRing}`}
    >
      <Image
        src={logo}
        alt=""
        width={36}
        height={36}
        sizes="36px"
        loading={priority ? 'eager' : 'lazy'}
        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
      />
      <span className="truncate text-[15px] font-semibold tracking-tight text-blog-text">
        Anh Ben
        {showSection && (
          <span className="font-normal text-blog-muted"> / Insights</span>
        )}
      </span>
    </Link>
  )
}
