export default function StatsSection() {
  return (
    <section className="section bg-gradient-to-br from-[#4a7c59] via-[#6b9b7a] to-[#2d4a35] text-white relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a7c59]/20 via-transparent to-[#2d4a35]/20"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4d03f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-[#a8d5ba] to-white bg-clip-text text-transparent">
                20+
              </div>
              <p className="text-sm md:text-base lg:text-lg opacity-90 font-medium">Years Experience</p>
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4d03f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-[#a8d5ba] to-white bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-sm md:text-base lg:text-lg opacity-90 font-medium">Happy Children</p>
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4d03f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-[#a8d5ba] to-white bg-clip-text text-transparent">
                Top 20
              </div>
              <p className="text-sm md:text-base lg:text-lg opacity-90 font-medium">Nurseries Award</p>
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4d03f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-[#a8d5ba] to-white bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-sm md:text-base lg:text-lg opacity-90 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
