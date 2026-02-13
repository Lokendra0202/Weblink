import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.weblinkservices.in'),
  title: 'WebLink Services Pvt Ltd (WLSPL) | Building Digital Success for Your Business',
  description:
    'WebLink Services Pvt Ltd (WLSPL) helps businesses grow with web development, graphic design, video editing, SEO optimization, software development, and social media marketing.',
  keywords: [
    'WebLink Services Pvt Ltd',
    'WLSPL',
    'Web Development',
    'Graphic Design',
    'Video Editing',
    'SEO Optimization',
    'Software Development',
    'Social Media Marketing'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'WebLink Services Pvt Ltd (WLSPL)',
    description: 'Building Digital Success for Your Business',
    url: 'https://www.weblinkservices.in',
    siteName: 'WebLink Services Pvt Ltd',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'WebLink Services Pvt Ltd logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebLink Services Pvt Ltd (WLSPL)',
    description: 'Building Digital Success for Your Business',
    images: ['/logo.png']
  }
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebLink Services Pvt Ltd (WLSPL)',
  url: 'https://www.weblinkservices.in',
  logo: 'https://www.weblinkservices.in/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/weblink-services',
    'https://www.facebook.com/weblinkservices',
    'https://www.instagram.com/weblinkservices',
    'https://twitter.com/weblinkservices'
  ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} bg-brand-light text-slate-900 antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-slate-900 focus:ring-2 focus:ring-cyan-400">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
