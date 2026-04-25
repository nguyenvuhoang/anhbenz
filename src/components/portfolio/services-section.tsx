import { FiCpu, FiLayers, FiSmartphone, FiZap } from 'react-icons/fi'
import { services } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

const icons = [FiLayers, FiCpu, FiSmartphone, FiZap]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="right" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you ship."
          description="Focused, senior-level support for teams that need a product-minded engineer across interface, backend, mobile, and integration work."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index]

            return (
              <article
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-violet-200/30"
                key={service.title}
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-200">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
