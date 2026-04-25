import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { profile, socialLinks } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="left" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Have a product, platform, or integration challenge?"
              description="Send a short note with the problem, timeline, and current stack. I will reply with the clearest next step."
            />
            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-[length:180%_100%] px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-right focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <FiMail aria-hidden="true" />
              Contact Me
            </a>
          </div>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 transition hover:border-cyan-200/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-300"
                href={link.href}
                key={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-slate-400">
                    {link.value}
                  </span>
                </span>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-slate-500 transition group-hover:text-cyan-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
