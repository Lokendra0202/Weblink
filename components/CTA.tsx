export default function CTA() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-sky px-6 py-14 text-center text-white shadow-soft sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(45deg,transparent_0_12px,rgba(255,255,255,0.35)_12px_13px)]" />
        <div className="relative">
          <h2 id="cta-heading" className="section-heading text-3xl font-extrabold sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="section-subheading mx-auto mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
            Partner with WebLink Services Pvt Ltd (WLSPL) to build scalable digital products, stronger branding, and impactful
            marketing results.
          </p>
          <a
            href="mailto:contact@weblinkservices.in"
            className="focus-ring btn-gradient-motion mt-8 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="Start your project with WLSPL"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
