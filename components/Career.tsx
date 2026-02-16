import {
  GraduationCap,
  Rocket,
  Users,
  TrendingUp,
  Briefcase,
  HeartHandshake
} from 'lucide-react'

const benefits = [
  {
    title: 'Real Project Experience',
    description:
      'Work on live client projects from day one and gain practical industry exposure beyond theory.',
    Icon: Briefcase
  },
  {
    title: 'Skill Development',
    description:
      'Continuously improve your technical and professional skills through mentorship and hands-on learning.',
    Icon: GraduationCap
  },
  {
    title: 'Fast Career Growth',
    description:
      'Performance-driven environment that rewards initiative, learning, and leadership potential.',
    Icon: TrendingUp
  },
  {
    title: 'Innovative Work Culture',
    description:
      'Collaborate with a supportive team that encourages creativity and experimentation.',
    Icon: Users
  },
  {
    title: 'Launch Your Career',
    description:
      'Perfect place for freshers and professionals to kick-start their journey in development and digital solutions.',
    Icon: Rocket
  },
  {
    title: 'Supportive Environment',
    description:
      'Friendly workplace focused on teamwork, knowledge sharing, and long-term success.',
    Icon: HeartHandshake
  }
]

export default function Career() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-white overflow-hidden">

      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Build Skills. Gain Experience. Grow Faster.
          </h2>
          <p className="mt-4 text-slate-600">
            We help passionate people transform their potential into real-world expertise
            through mentorship, collaboration, and meaningful projects.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* left accent line */}
              <span className="absolute left-0 top-6 h-10 w-1 rounded-r bg-gradient-to-b from-cyan-500 to-blue-500" />

              {/* icon bubble */}
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 p-3">
                <Icon className="h-6 w-6 text-cyan-700" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom CTA panel */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-semibold">
            Ready to Start Your Career Journey?
          </h3>
          <p className="mt-2 text-cyan-100">
            Join our growing team and turn your skills into real-world impact.
          </p>

          <a
            href="/careers"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-cyan-700 transition hover:bg-slate-100"
          >
            View Open Positions
          </a>
        </div>

      </div>
    </section>
  )
}
