export default function StatsSection() {
  return (
    <section className="section bg-gradient-to-br from-[#4a7c59] via-[#6b9b7a] to-[#4a7c59] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#a8d5ba] bg-clip-text text-transparent">
              20+
            </div>
            <p className="text-lg opacity-90">Years Experience</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#a8d5ba] bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-lg opacity-90">Happy Children</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#a8d5ba] bg-clip-text text-transparent">
              Top 20
            </div>
            <p className="text-lg opacity-90">Nurseries Award</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#a8d5ba] bg-clip-text text-transparent">
              100%
            </div>
            <p className="text-lg opacity-90">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

