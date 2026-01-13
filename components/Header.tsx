'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-br from-[#4a7c59] to-[#2d4a35] shadow-lg">
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0 z-[3]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Willow Daycare Logo"
              width={80}
              height={80}
              priority
              className="drop-shadow-md transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        
        {/* Navigation links centered - Desktop only */}
        <nav className="hidden md:flex gap-4 items-center absolute left-1/2 -translate-x-1/2 z-[3]">
          <Link href="/" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            Home
          </Link>
          <Link href="/about" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            About Us
          </Link>
          <Link href="/services" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            Services
          </Link>
          <Link href="/gallery" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            Gallery
          </Link>
          <Link href="/jobs" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            Careers
          </Link>
          <Link href="/fundraising" className="text-white font-semibold text-sm shadow-sm transition-all duration-300 px-3 py-1.5 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 hover:shadow-md">
            Fundraising
          </Link>
        </nav>

        {/* Contact Us button on the right - Desktop only */}
        <div className="hidden md:block flex-shrink-0 z-[3]">
          <Link 
            href="/contact" 
            className="px-5 py-2 bg-[#f4d03f] text-[#2c3e50] font-bold text-sm rounded-lg transition-all duration-300 hover:bg-[#e6c035] hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 z-50 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-white'
          }`}></span>
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'bg-white'
          }`}></span>
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-white'
          }`}></span>
        </button>
      </div>

      {/* Mobile dropdown menu with animation */}
      <div className={`md:hidden absolute top-full left-0 right-0 w-full bg-gradient-to-br from-[#4a7c59] to-[#2d4a35] shadow-xl z-[49] transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 max-h-screen' 
          : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
      }`}>
        <nav className={`flex flex-col px-6 py-4 space-y-2 transition-all duration-300 ${
          isMenuOpen ? 'delay-100' : ''
        }`}>
          <Link 
            href="/" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/gallery" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            href="/jobs" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            href="/fundraising" 
            className={`text-white font-semibold text-base px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Fundraising
          </Link>
          <Link 
            href="/contact" 
            className={`mt-4 px-5 py-3 bg-[#f4d03f] text-[#2c3e50] font-bold text-base rounded-lg text-center transition-all duration-300 hover:bg-[#e6c035] ${
              isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isMenuOpen ? '450ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
