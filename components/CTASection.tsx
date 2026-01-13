import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-[#4a7c59] via-[#6b9b7a] to-[#2d4a35] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center p-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            We&apos;d love to welcome you and your child to Willow Daycare. Get in touch today to schedule a visit or learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#f4d03f] to-[#e6c035] text-[#2c3e50] font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/30"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

