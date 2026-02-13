import { BadgeCheck, HandCoins, Headset, TimerReset } from 'lucide-react'

const points = [
  {
    title: 'Experienced Team',
    description: 'Skilled specialists across development, design, and digital growth disciplines.',
    Icon: BadgeCheck
  },
  {
    title: 'Affordable Pricing',
    description: 'Value-driven solutions with transparent pricing for startups and enterprises.',
    Icon: HandCoins
  },
  {
    title: 'Fast Delivery',
    description: 'Streamlined workflows and agile execution keep your projects moving quickly.',
    Icon: TimerReset
  },
  {
    title: '24/7 Support',
    description: 'Reliable, responsive assistance to ensure continuity and peace of mind.',
    Icon: Headset
  }
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-slate py-20 text-slate-100" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,93,117,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(19,168,168,0.2),transparent_35%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-subheading text-sm font-semibold uppercase tracking-wide text-cyan-200">Why Choose Us</p>
          <h2 id="why-heading" className="section-heading mt-3 text-3xl font-bold sm:text-4xl">
            A Reliable Partner for Digital Growth
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-700/80 bg-slate-800/70 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/50"
            >
              <div className="inline-flex rounded-lg bg-slate-700/60 p-2">
                <Icon className="h-7 w-7 text-cyan-200" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
