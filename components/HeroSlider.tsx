'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  '/470159827_18023703206561995_425792941470827035_n.jpg',
  '/489144643_1101319175340635_5549614429387159798_n.jpg',
  '/482484939_18032855549561995_3084417846801310453_n.jpg',
  '/489365509_1102001451939074_6066663197909986239_n.jpg',
  '/489378988_1102970941842125_6862162550389353002_n.jpg',
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
              index === currentIndex 
                ? 'opacity-100 scale-100 z-[2]' 
                : 'opacity-0 scale-110 z-0'
            }`}
          >
            <Image
              src={image}
              alt={`Willow Daycare Hero Image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#4a7c59]/30 to-[#4a7c59]/20 z-[1]"></div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/30 backdrop-blur-md border-2 border-white/50 text-white text-4xl font-bold w-12 h-12 rounded-full cursor-pointer z-10 flex items-center justify-center transition-all duration-300 hover:bg-white/50 hover:scale-110 hover:shadow-lg active:scale-95"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/30 backdrop-blur-md border-2 border-white/50 text-white text-4xl font-bold w-12 h-12 rounded-full cursor-pointer z-10 flex items-center justify-center transition-all duration-300 hover:bg-white/50 hover:scale-110 hover:shadow-lg active:scale-95"
        onClick={goToNext}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer transition-all duration-300 hover:bg-white/50 hover:scale-125 ${
              index === currentIndex 
                ? 'bg-white w-8 rounded-md shadow-lg' 
                : 'bg-transparent'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
