import Link from 'next/link'
import HeroSlider from './HeroSlider'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white text-center px-5 overflow-hidden">
      <HeroSlider />
      <div className="max-w-4xl z-[3] relative">
        <div className="backdrop-blur-sm bg-gradient-to-br from-[#4a7c59]/10 via-[#4a7c59]/5 to-transparent rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
          <h1 className="text-5xl md:text-6xl mb-5 font-bold drop-shadow-2xl text-white">
            Welcome to Willow Daycare
          </h1>
          <p className="text-2xl mb-10 opacity-80">
            A family run business that puts children at the heart of our care
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link 
              href="/about" 
              className="btn shadow-xl hover:shadow-2xl bg-gradient-to-r from-[#4a7c59] to-[#2d4a35] hover:from-[#2d4a35] hover:to-[#4a7c59] transition-all duration-300"
            >
              Learn More
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-secondary shadow-xl hover:shadow-2xl bg-gradient-to-r from-[#f4d03f] to-[#e6c035] hover:from-[#e6c035] hover:to-[#f4d03f] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
