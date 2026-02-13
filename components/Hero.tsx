import ImageWithSkeleton from '@/components/ImageWithSkeleton'

const heroStats = [
  { value: '200+', label: 'Businesses' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Coverage' }
]

const particles = Array.from({ length: 14 }, (_, i) => i)

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32" aria-label="Hero">
      <div className="absolute inset-0 -z-20 bg-[length:200%_200%] bg-gradient-to-br from-brand-indigo/18 via-white/30 to-brand-sky/18 animate-gradient-shift" />
      <div className="absolute inset-0 -z-10 grid-backdrop opacity-35" />
      <div className="absolute -left-16 top-20 h-56 w-56 rounded-full bg-brand-purple/25 blur-3xl" />
      <div className="absolute right-0 top-36 h-64 w-64 rounded-full bg-brand-sky/30 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-indigo/20 blur-3xl" />
      <div className="absolute -right-24 top-24 h-72 w-72 orbital-ring" />
      <div className="absolute -right-14 top-32 h-52 w-52 orbital-ring" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((item) => (
          <span
            key={item}
            className="hero-particle absolute h-1.5 w-1.5 rounded-full bg-brand-sky/40"
            style={{
              left: `${(item * 13) % 100}%`,
              top: `${(item * 19) % 90}%`,
              animationDelay: `${(item % 6) * 0.35}s`
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="hero-kicker mb-4 inline-flex items-center rounded-full border border-brand-sky/25 bg-brand-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-indigo">
            Trusted by 200+ growing businesses
          </p>
          <h1 className="hero-title heading-glow text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transforming Ideas into Powerful Digital Solutions
          </h1>
          <p className="hero-description mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            WebLink Services Pvt Ltd (WLSPL) blends engineering, design, and growth marketing to turn ambitious ideas into
            high-converting digital experiences.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="glass-surface rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/25 hover:shadow-soft">
                <p className="text-lg font-bold text-slate-900">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="focus-ring btn-gradient-motion rounded-xl bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-sky px-6 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5"
              aria-label="Get started with WebLink Services"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky hover:text-brand-indigo"
              aria-label="Contact WebLink Services"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-gradient-to-r from-brand-indigo to-brand-purple opacity-30 blur-2xl" />
          <div className="absolute right-3 top-8 h-3 w-3 animate-pulse rounded-full bg-brand-cyan" />
          <div className="parallax-card animate-float rounded-3xl border border-white/70 bg-white/75 p-4 shadow-soft backdrop-blur-md">
            <ImageWithSkeleton
              src="/hero-visual.svg"
              alt="Modern digital solutions dashboard illustration"
              width={600}
              height={450}
              priority
              containerClassName="rounded-2xl"
              className="h-auto w-full rounded-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-indigo/10 via-transparent to-brand-sky/10" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-5 -left-5 glass-surface rounded-2xl px-4 py-3 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-slate-500">Growth Focused</p>
            <p className="text-sm font-semibold text-slate-900">Strategy + Execution + Results</p>
          </div>
          <div className="absolute -right-2 bottom-20 glass-surface rounded-2xl px-4 py-2 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-slate-500">Avg Delivery</p>
            <p className="text-sm font-semibold text-slate-900">2.4x Faster</p>
          </div>
        </div>
      </div>
    </section>
  )
}
