import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2d4a35] via-[#4a7c59] to-[#2d4a35] text-white py-12 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl"></div>
          <div className="relative z-10">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Willow Daycare Logo"
                width={100}
                height={100}
                className="drop-shadow-2xl"
              />
            </div>
            <h3 className="text-3xl mb-4 bg-gradient-to-r from-[#f4d03f] to-[#e6c035] bg-clip-text text-transparent drop-shadow-md">
              Willow Daycare
            </h3>
            <p className="leading-relaxed">We are a family run business that puts children at the heart of our care.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl"></div>
          <div className="relative z-10">
            <h4 className="text-xl mb-4 bg-gradient-to-r from-[#a8d5ba] to-[#6b9b7a] bg-clip-text text-transparent drop-shadow-md">
              Contact Us
            </h4>
            <p className="mb-2 leading-relaxed">Glangwili Day Nursery</p>
            <p className="mb-2 leading-relaxed">Dolgwili Road, Carmarthen</p>
            <p className="mb-2 leading-relaxed">SA31 2AF</p>
            <p className="mb-2 leading-relaxed">
              <a href="tel:+447375023731" className="text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">+44 7375 023731</a>
            </p>
            <p className="mb-2 leading-relaxed">
              <a href="mailto:willowdaycare12@gmail.com" className="text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">willowdaycare12@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl"></div>
          <div className="relative z-10">
            <h4 className="text-xl mb-4 bg-gradient-to-r from-[#a8d5ba] to-[#6b9b7a] bg-clip-text text-transparent drop-shadow-md">
              Follow Us
            </h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=100063876890214"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/willowdaycare"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl"></div>
          <div className="relative z-10">
            <h4 className="text-xl mb-4 bg-gradient-to-r from-[#a8d5ba] to-[#6b9b7a] bg-clip-text text-transparent drop-shadow-md">
              Quick Links
            </h4>
            <Link href="/about" className="block mb-2 text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">About Us</Link>
            <Link href="/services" className="block mb-2 text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">Services</Link>
            <Link href="/jobs" className="block mb-2 text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">Careers</Link>
            <Link href="/contact" className="block mb-2 text-white transition-colors duration-300 hover:text-[#f4d03f] drop-shadow-md">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-5 text-center max-w-7xl mx-auto px-5 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <p className="opacity-80 text-sm drop-shadow-md relative z-10">&copy; {new Date().getFullYear()} Willow Daycare Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
