"use client";
import React from 'react';
import "../globals.css";
import Link from 'next/link'; // Use next/link for Next.js routing
import { Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { useGsap } from '../hooks/useGsap'; // Assuming you have a custom hook for GSAP animations

const Footer = () => {
  const scope = useGsap((gsap) => {
    gsap.from(scope.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 95%',
      },
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#2C2C2C] text-[#FDFBF8] py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={scope}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 lg:col-span-1">
            <Link style={{ color: "#EAE0D5", fontFamily: "'Playfair Display', serif" }} href="/" className="font-playfair text-3xl font-bold text-[#FDFBF8]">
              The South London VA
            </Link>
            <p className="mt-4 text-[#EAE0D5] font-inter leading-relaxed">
              Warm, minimal, and professional virtual assistance for female founders and small business owners.
            </p>
          </div>

          <div>
            <p style={{ color: "#EAE0D5", fontFamily: "'Playfair Display', serif" }} className="font-playfair text-xl font-semibold mb-6 block">Explore</p>
            <div className="space-y-3">
              <Link href="/" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">Home</Link>
              <Link href="/about" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">About</Link>
              <Link href="/services" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">Services</Link>
              <Link href="/contact" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">Contact</Link>
            </div>
          </div>

          <div>
            <p style={{ color: "#EAE0D5", fontFamily: "'Playfair Display', serif" }} className="font-playfair text-xl font-semibold mb-6 block">Connect</p>
            <div className="space-y-4">
              <a href="mailto:hello@southlondonva.com" className="flex items-center space-x-3 group">
                <Mail size={20} className="fruity-pink-text" />
                <span className="text-[#EAE0D5] group-hover:text-[#FF5E78] transition-colors duration-300">Email Me</span>
              </a>
              <a href="tel:+447123456789" className="flex items-center space-x-3 group">
                <Phone size={20} className="fruity-pink-text" />
                <span className="text-[#EAE0D5] group-hover:text-[#FF5E78] transition-colors duration-300">Call Me</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <Instagram size={20} className="fruity-pink-text" />
                <span className="text-[#EAE0D5] group-hover:text-[#FF5E78] transition-colors duration-300">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <p style={{ color: "#EAE0D5", fontFamily: "'Playfair Display', serif" }} className="font-playfair text-xl font-semibold mb-6 block">Future Offerings</p>
            <div className="space-y-3">
              <Link href="/blog" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">Blog</Link>
              <Link href="/digital-downloads" className="block text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300">Digital Downloads</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EAE0D5]/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-[#EAE0D5] font-inter text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} The South London VA. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-[#EAE0D5] hover:text-[#FF5E78] transition-colors duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={18} className="transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;