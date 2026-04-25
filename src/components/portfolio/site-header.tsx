import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo/ben.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="inline-flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
          aria-label="Go to homepage"
        >
          <Image
            src={logo}
            alt="Nguyen Vu Hoang logo"
            width={45}
            height={22}
            priority
            className="h-8 w-auto object-contain"
          />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/6 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-linear-to-r from-sky-500 via-blue-600 to-cyan-500 bg-size-[180%_100%] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-right focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
