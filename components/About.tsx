import ImageWithSkeleton from "@/components/ImageWithSkeleton";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Long-Term Clients" },
  { value: "13+", label: "Years Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-8xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="section-shell grid grid-cols-1 items-center gap-12 p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="section-subheading text-sm font-semibold uppercase tracking-wide text-brand-cyan">
            About Us
          </p>
          <h2
            id="about-heading"
            className="section-heading mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Building Digital Success for Your Business
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            WLSPL is a multidisciplinary digital partner helping brands scale
            through modern web engineering, polished visual storytelling, and
            performance-driven marketing. We focus on execution quality, speed,
            and long-term business impact.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            Web Link Services Pvt. Ltd., we believe that our success is achieved
            by providing quality service to our clients and by hiring only the
            best talent for our team. We have been able to provide innovative
            software solutions all the time to our clients.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-2xl font-extrabold gradient-text">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <ImageWithSkeleton
            src="/about-illustration.svg"
            alt="Team collaborating on web and software projects"
            width={640}
            height={480}
            containerClassName="rounded-2xl"
            className="h-auto w-full rounded-2xl"
          />
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-indigo/5 via-transparent to-brand-sky/10"
            aria-hidden="true"
          />
          <div className="absolute -bottom-5 right-6 rounded-xl border border-cyan-200 bg-cyan-50/95 px-4 py-3 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-cyan-700">
              Delivery Model
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Agile. Transparent. Scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
