import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const quickLinks = [
  { href: '/', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog#news', label: 'Topics' },
  { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/nguyenvuhoang', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anhben/', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/zAnhBenz/', label: 'Facebook' },
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#05070b] px-4 pb-16 pt-10 text-white sm:px-6 lg:px-8">
      <Script
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
        id="show-dmca"
      />

      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.1) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
          <div className="p-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-lg font-black text-cyan-100">
                AB
              </span>
              <span>
                <span className="block text-xl font-bold text-white">
                  Anh Ben
                </span>
                <span className="block text-xs font-bold uppercase text-cyan-200">
                  Fintech Engineering
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Engineering notes for modern web, fintech and digital banking
              systems.
            </p>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
              &copy; {new Date().getFullYear()} by{' '}
              <a
                href="https://github.com/nguyenvuhoang"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-cyan-100"
              >
                Anh Ben
              </a>
              . All rights reserved.
            </p>
          </div>

          <div>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-400 transition hover:text-cyan-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mt-4 grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-cyan-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <h2 className="text-sm font-bold uppercase text-white">
              Compliance
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Protected publication assets and DMCA compliance status.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="//www.dmca.com/Protection/Status.aspx?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313"
                title="DMCA.com Protection Status"
                className="dmca-badge rounded-lg border border-white/10 bg-white p-1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-09.png?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313"
                  alt="DMCA.com Protection Status"
                  width={150}
                  height={30}
                />
              </a>
              <a
                href="https://www.dmca.com/compliance/www.anhben.com"
                title="DMCA Compliance information for www.anhben.com"
                target="_blank"
                className="rounded-lg border border-white/10 bg-white p-1"
                rel="noreferrer"
              >
                <Image
                  src="https://www.dmca.com/img/dmca-compliant-grayscale.png"
                  alt="DMCA compliant"
                  width={155}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
