import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPreviewSection() {
  const services = [
    {
      icon: '👶',
      title: 'Infant Care',
      description: 'Nurturing care for babies from 6 weeks to 12 months in a safe and loving environment.',
    },
    {
      icon: '🧒',
      title: 'Toddler Program',
      description: 'Engaging activities and learning experiences designed for toddlers aged 1-2 years.',
    },
    {
      icon: '🎨',
      title: 'Preschool Learning',
      description: 'Comprehensive early education program preparing children aged 3-5 for school.',
    },
    {
      icon: '🌳',
      title: 'Outdoor Activities',
      description: 'Our beautiful garden provides endless opportunities for outdoor play and exploration.',
    },
  ]

  return (
    <section className="section bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-[#4a7c59] via-[#6b9b7a] to-[#4a7c59] bg-clip-text text-transparent drop-shadow-md">
            Our Services
          </h2>
          <p className="text-lg text-[#2c3e50] mt-4 max-w-2xl mx-auto">
            We offer comprehensive childcare services tailored to each child&apos;s unique needs and developmental stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#a8d5ba]/20 via-white to-[#f8f9fa] p-8 rounded-2xl shadow-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#4a7c59] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/10 via-[#6b9b7a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f4d03f]/5 via-transparent to-[#a8d5ba]/10"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 drop-shadow-lg">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#4a7c59] bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-[#2c3e50] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#4a7c59] to-[#2d4a35] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
