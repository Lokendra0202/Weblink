'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Career', href: '#career' },
  { label: 'Blog', href: '#blog' },
  { label: 'Life at WLSPL', href: '#life-at-wlspl' },
  { label: 'Contact Us', href: '#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/85 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-white/35 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="focus-ring flex items-center rounded-md" aria-label="WebLink Services home">
          <Image
            src="/logo.png"
            alt="WebLink Services Pvt Ltd logo"
            width={160}
            height={64}
            priority
            className="h-16 w-auto saturate-125"
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-lg lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="focus-ring group relative rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100/90 hover:text-slate-900"
              aria-label={item.label}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-sky transition-all duration-300 group-hover:w-4/5" />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-lg border border-slate-200/90 bg-white/75 p-2 text-slate-800 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
                aria-label={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
