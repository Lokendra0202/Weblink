import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Career', href: '#career' },
  { label: 'Blog', href: '#blog' },
  { label: 'Life at WLSPL', href: '#life-at-wlspl' },
  { label: 'Contact Us', href: '#contact' }
]

const services = [
  'Web Development',
  'Graphic Design',
  'Video Editing',
  'SEO Optimization',
  'Software Development',
  'Social Media Marketing'
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-700 bg-brand-slate text-slate-300" aria-label="Footer">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(232,93,117,0.22),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(19,168,168,0.22),transparent_35%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">WebLink Services Pvt Ltd</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Building Digital Success for Your Business through modern technology, creative execution, and measurable growth.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" className="focus-ring rounded-md border border-slate-700/70 p-2 text-slate-300 hover:bg-slate-800 hover:text-white" aria-label="WLSPL on LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="focus-ring rounded-md border border-slate-700/70 p-2 text-slate-300 hover:bg-slate-800 hover:text-white" aria-label="WLSPL on Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="focus-ring rounded-md border border-slate-700/70 p-2 text-slate-300 hover:bg-slate-800 hover:text-white" aria-label="WLSPL on Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="focus-ring rounded-md border border-slate-700/70 p-2 text-slate-300 hover:bg-slate-800 hover:text-white" aria-label="WLSPL on X">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="focus-ring rounded text-slate-400 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 id="contact-heading" className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <p className="mt-4 text-sm text-slate-400">Email: contact@weblinkservices.in</p>
          <p className="mt-2 text-sm text-slate-400">Phone: +91 90000 00000</p>
          <p className="mt-2 text-sm text-slate-400">Address: India</p>
          <span id="career" className="sr-only">Career</span>
          <span id="blog" className="sr-only">Blog</span>
          <span id="life-at-wlspl" className="sr-only">Life at WLSPL</span>
        </div>
      </div>

      <div className="relative border-t border-slate-800 py-5">
        <p className="text-center text-xs text-slate-500">&copy; 2026 WebLink Services Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
