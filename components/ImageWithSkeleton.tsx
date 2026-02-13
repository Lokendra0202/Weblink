'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

type ImageWithSkeletonProps = ImageProps & {
  containerClassName?: string
}

export default function ImageWithSkeleton({ containerClassName = '', className = '', alt, ...props }: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${containerClassName}`}>
      {!loaded && <div className="skeleton absolute inset-0 rounded-[inherit]" aria-hidden="true" />}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
