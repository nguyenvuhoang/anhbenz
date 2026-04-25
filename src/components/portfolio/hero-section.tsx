import Image from 'next/image'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { heroMetrics, profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden px-6 pt-8 sm:px-8 lg:px-10"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_42%,#030712_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              {profile.availability}
            </div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              {profile.displayName}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Premium software for financial products and AI-ready teams.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.intro}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-[length:180%_100%] px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-right focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                View Projects
                <FiArrowRight
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/35 bg-gradient-to-r from-sky-500/30 via-blue-600/24 to-cyan-500/30 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-950/25 backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200/70 hover:from-sky-400/40 hover:to-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <FiMail aria-hidden="true" />
                Contact Me
              </a>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  key={metric.label}
                >
                  <dt className="text-2xl font-semibold text-white">
                    {metric.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-slate-400">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-violet-400/10 to-emerald-300/10 blur-3xl" />
            <div className="portfolio-orbit portfolio-orbit--outer" aria-hidden="true">
              <span className="portfolio-satellite portfolio-satellite--cyan" />
            </div>
            <div className="portfolio-orbit portfolio-orbit--inner" aria-hidden="true">
              <span className="portfolio-satellite portfolio-satellite--violet" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.55rem] bg-slate-950">
                <Image
                  src={profile.image}
                  alt={profile.displayName}
                  width={760}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 38vw, 88vw"
                  className="aspect-[4/5] w-full object-cover object-top opacity-95 saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                    <p className="text-sm font-medium text-white">
                      {profile.role}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
