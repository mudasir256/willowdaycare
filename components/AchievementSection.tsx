import Image from 'next/image'

export default function AchievementSection() {
  return (
    <section className="section bg-gradient-to-b from-white via-[#f8f9fa]/50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div className="p-5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="section-title bg-gradient-to-r from-[#4a7c59] via-[#6b9b7a] to-[#4a7c59] bg-clip-text text-transparent drop-shadow-md">
                Our Achievement
              </h2>
              <p className="text-lg leading-relaxed mb-4 text-[#2c3e50]">
                Once again, we have achieved the <strong className="bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Top 20 Nurseries in Wales Award 2023</strong>{' '}
                which would not have been achievable without all of your support and excellent reviews.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-[#2c3e50]">
                <strong className="bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Diolch/thank you</strong>, it means the absolute world to us here at Willow! 🌳💚
              </p>
            </div>
          </div>
          <div className="text-center relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative">
              <Image
                src="/certifacte.jpg"
                alt="Top 20 Nurseries in Wales Award 2023"
                width={400}
                height={400}
                className="w-full h-[400px] object-contain rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#4a7c59]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
