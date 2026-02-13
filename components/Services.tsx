import { ArrowRight } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const BrowserIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 8h18" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="7" cy="6" r="1" fill="currentColor" />
    <path d="M9 14l2.2 2.2L15 12.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PenToolIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 3l3 6-3 3-3-3 3-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 20l4-8h4l4 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="9" r="1" fill="currentColor" />
  </svg>
)

const FilmIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const SeoIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.5 11h5M11 8.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const BlocksIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const MegaphoneIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 12h4l9-4v8l-9-4H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 14l1.2 4h2.4L10.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 10c1.2.5 2 1.7 2 3s-.8 2.5-2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

type Service = {
  title: string
  description: string
  Icon: ComponentType<IconProps>
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Fast, secure, and responsive websites tailored to your business goals and growth roadmap.',
    Icon: BrowserIcon
  },
  {
    title: 'Graphic Design',
    description: 'Brand-first visuals and design systems that elevate recognition, trust, and consistency.',
    Icon: PenToolIcon
  },
  {
    title: 'Video Editing',
    description: 'High-quality video production and editing for ads, brand stories, and social engagement.',
    Icon: FilmIcon
  },
  {
    title: 'SEO Optimization',
    description: 'Search-focused technical and content optimization to improve rankings and qualified traffic.',
    Icon: SeoIcon
  },
  {
    title: 'Software Development',
    description: 'Scalable software solutions built with modern architectures for reliability and performance.',
    Icon: BlocksIcon
  },
  {
    title: 'Social Media Marketing',
    description: 'Audience-centric campaigns and content strategies that drive awareness and conversions.',
    Icon: MegaphoneIcon
  }
]

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="services-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-subheading text-sm font-semibold uppercase tracking-wide text-brand-cyan">Our Services</p>
        <h2 id="services-heading" className="section-heading mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          End-to-End Digital Services Under One Roof
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, Icon }, index) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-sky/20 hover:shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-sky" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-indigo/12 blur-2xl transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-purple/20" />
            <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-brand-sky/12 blur-2xl transition-all duration-300 group-hover:translate-y-1" />

            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-sky text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-[-1px]" />
              </div>
              <span className="text-3xl font-black text-slate-200/80">0{index + 1}</span>
            </div>

            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

            <a
              href="#contact"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand-indigo transition-colors hover:text-brand-purple"
              aria-label={`Learn more about ${title}`}
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-brand-indigo/10 via-brand-purple/10 to-brand-sky/10 p-6">
        <p className="text-center text-sm font-medium text-slate-700">
          Need a custom bundled package? We design cross-service growth plans for startups, SMBs, and enterprise teams.
        </p>
      </div>
    </section>
  )
}
