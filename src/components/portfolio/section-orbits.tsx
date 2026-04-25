type SectionOrbitsProps = {
  align?: 'left' | 'right'
}

export function SectionOrbits({ align = 'right' }: SectionOrbitsProps) {
  return (
    <div
      className={`portfolio-section-orbits ${
        align === 'left' ? 'portfolio-section-orbits--left' : ''
      }`}
      aria-hidden="true"
    >
      <span className="portfolio-section-orbit portfolio-section-orbit--one">
        <span />
      </span>
      <span className="portfolio-section-orbit portfolio-section-orbit--two">
        <span />
      </span>
    </div>
  )
}
