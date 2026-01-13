'use client'

import { usePathname } from 'next/navigation'

export default function PageHeader() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Don't show on home page
  if (isHomePage) {
    return null
  }

  // Get page title based on route
  const getPageTitle = () => {
    switch (pathname) {
      case '/about':
        return 'About Us'
      case '/services':
        return 'Our Services'
      case '/gallery':
        return 'Gallery'
      case '/jobs':
        return 'Careers'
      case '/fundraising':
        return 'Fundraising'
      case '/contact':
        return 'Contact Us'
      default:
        return 'Willow Daycare'
    }
  }

  const title = getPageTitle()

  return (
    <div className="relative w-full min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4a7c59] to-[#2d4a35] mt-[100px]">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full min-h-[350px] md:min-h-[400px] z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/daycareheader.png')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full min-h-[350px] md:min-h-[400px] bg-gradient-to-b from-[#4a7c59]/60 via-[#4a7c59]/40 to-[#4a7c59]/30 z-[1]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-[2] text-center px-5 py-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-5 animate-fade-in-down">
          {title}
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#f4d03f] to-transparent mx-auto rounded-full shadow-lg"></div>
        <p className="text-white/90 text-base md:text-lg mt-5 drop-shadow-lg max-w-2xl mx-auto">
          {pathname === '/about' && 'Learn more about our family-run daycare and our commitment to your child\'s care'}
          {pathname === '/services' && 'Discover the comprehensive childcare services we offer'}
          {pathname === '/gallery' && 'Explore our facilities and see the wonderful moments at Willow Daycare'}
          {pathname === '/jobs' && 'Join our team and make a difference in children\'s lives'}
          {pathname === '/fundraising' && 'Support our fundraising efforts and help us grow'}
          {pathname === '/contact' && 'Get in touch with us - we\'d love to hear from you'}
        </p>
      </div>
    </div>
  )
}
