import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="left" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit with product taste."
          description="From polished interfaces to integration-heavy backend delivery, the stack is selected for maintainability, clarity, and long-term product velocity."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <article
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-5 shadow-xl shadow-slate-950/20"
              key={group.title}
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-slate-300"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
