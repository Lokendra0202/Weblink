import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rohit Sharma',
    role: 'Founder, Nexus Retail',
    quote:
      'WLSPL transformed our online presence with a high-performance website and measurable SEO gains within months.'
  },
  {
    name: 'Aisha Verma',
    role: 'Marketing Lead, Fintrix',
    quote:
      'Their team handled design, content, and campaign execution with exceptional clarity, speed, and professionalism.'
  },
  {
    name: 'Neeraj Patel',
    role: 'Director, BrightEdge Learning',
    quote:
      'From planning to launch, the process was smooth and strategic. We now convert more leads across digital channels.'
  }
]

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-subheading text-sm font-semibold uppercase tracking-wide text-brand-cyan">Testimonials</p>
        <h2 id="testimonials-heading" className="section-heading mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <article
            key={item.name}
            className={`testimonial-card group relative overflow-hidden rounded-2xl border border-white/80 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/20 hover:shadow-soft ${
              index === 1 ? 'lg:-translate-y-4' : ''
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,93,117,0.1),transparent_35%)]" />
            <div className="absolute right-4 top-4 text-slate-300 transition-colors duration-300 group-hover:text-brand-indigo/40">
              <Quote className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-1" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">"{item.quote}"</p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-base font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
