'use client'

type BlogHeroProps = {
  averageReadingTime: number
  query: string
  setQuery: (value: string) => void
  totalCount: number
  topicCount: number
}

const signalCards = [
  {
    className: 'left-4 top-8 blog-hero-float',
    label: 'Latest signal',
    value: 'AI Systems',
  },
  {
    className: 'right-2 top-28 blog-hero-float-slow',
    label: 'Trending topic',
    value: 'Fintech UX',
  },
  {
    className: 'bottom-8 left-10 blog-hero-float-delay',
    label: 'Discovery',
    value: 'Performance',
  },
]

const particles = [
  'left-[18%] top-[18%] blog-particle-one',
  'left-[72%] top-[16%] blog-particle-two',
  'left-[82%] top-[70%] blog-particle-three',
  'left-[32%] top-[78%] blog-particle-two',
  'left-[52%] top-[38%] blog-particle-one',
]

export default function BlogHero({
  averageReadingTime,
  query,
  setQuery,
  totalCount,
  topicCount,
}: BlogHeroProps) {
  return (
    <section className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.018] p-5 shadow-[0_30px_120px_rgba(8,47,73,0.16)] backdrop-blur-[2px] sm:p-7 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_72%_28%,rgba(167,139,250,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="blog-hero-beam pointer-events-none absolute -left-1/3 top-1/2 h-px w-[160%] rotate-[-12deg] bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />

      {particles.map((particle) => (
        <span
          key={particle}
          className={`pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.95)] ${particle}`}
        />
      ))}

      <div className="relative z-10 grid min-h-[600px] gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)] lg:items-center">
        <div className="blog-hero-enter">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Technical Intelligence Hub
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            AI Engineering{' '}
            <span className="bg-linear-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Knowledge Portal
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Du hành qua những tín hiệu kỹ thuật về Next.js, React, kiến trúc
            fintech, hiệu năng web và sản phẩm số hiện đại.
          </p>

          <div className="mt-8 max-w-2xl rounded-3xl border border-cyan-300/20 bg-black/20 p-2 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl transition focus-within:border-cyan-200/70 focus-within:shadow-cyan-900/40">
            <label htmlFor="blog-search" className="sr-only">
              Tìm bài viết
            </label>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-4">
              <span className="blog-command-pulse font-mono text-xl font-black text-cyan-200">
                /
              </span>
              <input
                id="blog-search"
                aria-label="Tìm bài viết"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Next.js, React, fintech architecture..."
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500 sm:text-base"
                type="search"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            <a
              href="#articles"
              className="rounded-full bg-linear-to-r from-cyan-200 via-sky-300 to-violet-300 px-5 py-3 text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02]"
            >
              Explore Articles
            </a>
            <a
              href="#topics"
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
            >
              View Topics
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[500px]">
          <div className="blog-orbit absolute inset-6 rounded-full border border-cyan-300/20" />
          <div className="blog-orbit-reverse absolute inset-16 rounded-full border border-dashed border-violet-300/25" />
          <div className="absolute inset-24 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] shadow-[0_0_80px_rgba(34,211,238,0.16)]" />

          <div className="blog-hero-float relative left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-cyan-200">
                  Knowledge core
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  Live Index
                </p>
              </div>
              <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.95)]" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                <p className="text-2xl font-black text-white">{totalCount}</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  Articles
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                <p className="text-2xl font-black text-cyan-200">
                  {topicCount}
                </p>
                <p className="mt-1 text-xs font-bold text-slate-400">Topics</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                <p className="text-2xl font-black text-emerald-200">
                  {averageReadingTime}
                </p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  Min avg
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">
              Signal ready · AI discovery online
            </div>
          </div>

          {signalCards.map((card) => (
            <div
              key={card.label}
              className={`absolute w-40 rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-xl shadow-black/20 backdrop-blur-xl ${card.className}`}
            >
              <p className="text-[10px] font-black uppercase text-slate-400">
                {card.label}
              </p>
              <p className="mt-1 text-sm font-black text-white">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
