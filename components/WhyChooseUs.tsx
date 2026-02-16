import { Headset, Award, Briefcase, Heart, Wallet, RefreshCw } from 'lucide-react'

const points = [
  {
    title: 'Web Support',
    description:
      'Top-of-the-line web support backed by strong quality standards to keep your website secure, updated, and running smoothly.',
    Icon: Headset
  },
  {
    title: 'Quality Standards',
    description:
      'We follow modern technologies and best practices to deliver high-quality solutions that help grow your customer base.',
    Icon: Award
  },
  {
    title: 'Experience and Expertise',
    description:
      'Our proven industry experience helps businesses achieve their goals through reliable strategies and a wide range of services.',
    Icon: Briefcase
  },
  {
    title: 'Passion',
    description:
      'We are passionate about our work and committed to delivering thoughtful logic-driven solutions tailored to client needs.',
    Icon: Heart
  },
  {
    title: 'Awesome and Affordable',
    description:
      'Affordable, reliable, and high-quality web design services suitable for startups, small businesses, and large enterprises.',
    Icon: Wallet
  },
  {
    title: 'Full-Cycle Development',
    description:
      'End-to-end development services including UI design, CMS setup, marketing automation, CRM integration, and more.',
    Icon: RefreshCw
  }
]

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-brand-slate py-20 text-slate-100"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,93,117,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(19,168,168,0.2),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-subheading text-sm font-semibold uppercase tracking-wide text-cyan-200">
            Why Choose Us
          </p>
          <h2 id="why-heading" className="section-heading mt-3 text-3xl font-bold sm:text-4xl">
            A Reliable Partner for Digital Growth
          </h2>
        </div>

        {/* Updated grid for 6 cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-700/80 bg-slate-800/70 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/50"
            >
              <div className="inline-flex rounded-lg bg-slate-700/60 p-2">
                <Icon className="h-7 w-7 text-cyan-200" aria-hidden="true" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
