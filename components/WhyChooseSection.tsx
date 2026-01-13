import Image from 'next/image'

export default function WhyChooseSection() {
  return (
    <section className="section bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-[#4a7c59] via-[#6b9b7a] to-[#4a7c59] bg-clip-text text-transparent drop-shadow-md">
            Why Choose Willow Daycare?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Image
              src="/470159827_18023703206561995_425792941470827035_n.jpg"
              alt="Children at Willow Daycare"
              width={400}
              height={400}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-[#4a7c59]"
            />
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Image
              src="/489144643_1101319175340635_5549614429387159798_n.jpg"
              alt="Activities at Willow Daycare"
              width={400}
              height={400}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-[#4a7c59]"
            />
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Image
              src="/Screenshot1.png"
              alt="Willow Daycare Screenshot"
              width={400}
              height={400}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-[#4a7c59]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div className="text-center p-8 bg-gradient-to-br from-white via-[#f8f9fa] to-white rounded-2xl shadow-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#4a7c59] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 animate-bounce drop-shadow-lg">🌳</div>
              <h3 className="text-[#4a7c59] text-2xl mb-4 font-bold bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Family-Run Care</h3>
              <p className="text-[#2c3e50] leading-relaxed">
                We are a family run business that puts children at the heart of our care.
                Every child receives personalized attention and nurturing support.
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white via-[#f8f9fa] to-white rounded-2xl shadow-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#4a7c59] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 animate-bounce drop-shadow-lg">🏥</div>
              <h3 className="text-[#4a7c59] text-2xl mb-4 font-bold bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Convenient Location</h3>
              <p className="text-[#2c3e50] leading-relaxed">
                Our nursery is conveniently located on Glangwili Hospital grounds in Carmarthen,
                making it easily accessible for families.
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white via-[#f8f9fa] to-white rounded-2xl shadow-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#4a7c59] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 animate-bounce drop-shadow-lg">🌱</div>
              <h3 className="text-[#4a7c59] text-2xl mb-4 font-bold bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Beautiful Garden</h3>
              <p className="text-[#2c3e50] leading-relaxed">
                Our newly refurbished garden provides an amazing outdoor learning environment
                where children can explore, play, and grow.
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white via-[#f8f9fa] to-white rounded-2xl shadow-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#4a7c59] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 animate-bounce drop-shadow-lg">📱</div>
              <h3 className="text-[#4a7c59] text-2xl mb-4 font-bold bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">Family App</h3>
              <p className="text-[#2c3e50] leading-relaxed">
                Stay connected with your child&apos;s day through our amazing family app,
                keeping you updated on their activities and progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
