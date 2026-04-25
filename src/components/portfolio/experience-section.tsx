import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="left" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Experience"
          title="Delivery history shaped by real financial operations."
          description="The timeline is intentionally concise and easy to replace with deeper achievements, metrics, and client context later."
        />
        <div className="relative">
          <div className="absolute bottom-10 left-4 top-8 w-px bg-gradient-to-b from-cyan-300 via-white/15 to-transparent" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <article className="relative pl-12" key={`${item.company}-${item.period}`}>
                <span className="absolute left-0 top-3 h-8 w-8 rounded-full border border-cyan-200/40 bg-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.28)]" />
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
                  <p className="text-sm font-medium text-cyan-200">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {item.company}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                    {item.achievements.map((achievement) => (
                      <li className="flex gap-3" key={achievement}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
