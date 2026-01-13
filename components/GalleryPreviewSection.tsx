import Link from 'next/link'
import Image from 'next/image'

export default function GalleryPreviewSection() {
  const galleryImages = [
    '/482484939_18032855549561995_3084417846801310453_n.jpg',
    '/489365509_1102001451939074_6066663197909986239_n.jpg',
    '/489378988_1102970941842125_6862162550389353002_n.jpg',
  ]

  return (
    <section className="section bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-[#4a7c59] via-[#6b9b7a] to-[#4a7c59] bg-clip-text text-transparent drop-shadow-md">
            Gallery
          </h2>
          <p className="text-lg text-[#2c3e50] mt-4 max-w-2xl mx-auto">
            Take a glimpse into our daily activities, beautiful facilities, and happy moments at Willow Daycare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <Image
                  src={image}
                  alt={`Willow Daycare Gallery Image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-[300px] object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#4a7c59] to-[#2d4a35] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

