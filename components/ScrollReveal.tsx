'use client'

import { useEffect, useRef } from 'react'

type ScrollRevealProps = {
  children: React.ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="reveal">{children}</div>
}