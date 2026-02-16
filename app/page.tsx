import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HeroSlider from '@/components/HeroSlider'
import Career from '@/components/Career'

const About = dynamic(() => import('@/components/About'))
const Services = dynamic(() => import('@/components/Services'))
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const CTA = dynamic(() => import('@/components/CTA'))
const Footer = dynamic(() => import('@/components/Footer'))
const ScrollReveal = dynamic(() => import('@/components/ScrollReveal'), { ssr: false })
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false })

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <HeroSlider />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>
        <ScrollReveal>
          <Career />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}