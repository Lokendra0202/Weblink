'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import Hero from './Hero'

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}   // ⭐ IMPORTANT FIX
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={900}
        className="h-full w-full"
      >

        {/* VIDEO */}
        <SwiperSlide className="!h-full">
          <div className="relative h-full w-full">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl sm:text-6xl font-black">
                Building Digital Experiences That Grow Businesses
              </h1>

              <p className="mt-6 max-w-2xl text-lg opacity-90">
                WebLink Services Pvt Ltd delivers scalable web, mobile and marketing solutions.
              </p>

              <a
                href="#contact"
                className="mt-8 rounded-xl bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition"
              >
                Contact Now
              </a>
            </div>

          </div>
        </SwiperSlide>

        {/* HERO */}
        <SwiperSlide className="!h-full">
          <Hero />
        </SwiperSlide>

      </Swiper>

    </section>
  )
}
