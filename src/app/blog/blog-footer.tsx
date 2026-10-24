import Image from 'next/image'
import Link from 'next/link'
import BlogLogo from './blog-logo'
import { blogContainer, blogFocusRing } from './blog-ui'

const quickLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog#topics', label: 'Topics' },
  { href: '/', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/nguyenvuhoang', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anhben/', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/zAnhBenz/', label: 'Facebook' },
]

const linkClass = `rounded-sm text-sm text-blog-muted transition-colors hover:text-blog-text ${blogFocusRing}`

export default function BlogFooter() {
  return (
    <footer className="border-t border-blog-border">
      <div
        className={`${blogContainer} grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto]`}
      >
        <div className="max-w-xs">
          <div className="inline-flex">
            <BlogLogo />
          </div>
          <p className="mt-4 text-sm leading-6 text-blog-muted">
            Engineering notes on AI, modern web, fintech and digital banking
            systems.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[13px] font-medium text-blog-text">Explore</h2>
          <ul className="mt-4 grid gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[13px] font-medium text-blog-text">Connect</h2>
          <ul className="mt-4 grid gap-2.5">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] font-medium text-blog-text">Compliance</h2>
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313"
            title="DMCA.com Protection Status"
            target="_blank"
            rel="noreferrer"
            className={`mt-4 inline-block rounded-md opacity-80 transition-opacity hover:opacity-100 ${blogFocusRing}`}
          >
            <Image
              src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-09.png?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313"
              alt="DMCA.com Protection Status"
              width={120}
              height={24}
            />
          </a>
        </div>
      </div>

      <div className="border-t border-blog-border">
        <div
          className={`${blogContainer} flex flex-col gap-2 py-6 text-[13px] text-blog-muted sm:flex-row sm:items-center sm:justify-between`}
        >
          <p>&copy; {new Date().getFullYear()} Anh Ben. All rights reserved.</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}
