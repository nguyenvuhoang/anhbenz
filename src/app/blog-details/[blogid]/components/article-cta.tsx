import Link from 'next/link'

export default function ArticleCTA() {
  return (
    <section className="mt-16 overflow-hidden rounded-lg border border-cyan-300/20 bg-linear-to-br from-cyan-300/12 via-white/[0.04] to-violet-400/12 p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-cyan-200">
            Continue exploring
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">
            Khám phá thêm góc nhìn kỹ thuật
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Đọc thêm các ghi chú về Next.js, kiến trúc frontend, hiệu năng và
            sản phẩm fintech hiện đại.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02]"
          >
            Quay lại Blog
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/70 hover:text-cyan-100"
          >
            Trang chủ
          </Link>
        </div>
      </div>
    </section>
  )
}
