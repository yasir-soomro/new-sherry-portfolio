"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks: NavLink[] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About me' },
    { link: '/projects', label: 'Projects' },
    { link: '/skill', label: 'Skills' },
  ];

  const isActive = (link: string) => {
    if (link === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-lg shadow-lg shadow-[#c4f82a]/5'
          : 'bg-[#0a0a0f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-5 h-5 bg-[#c4f82a] transform rotate-45 transition-all duration-300 group-hover:rotate-[225deg] group-hover:scale-110"></div>
            <span className="text-white text-sm md:text-2xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#c4f82a]">
              SHERRYSTACKFOLIO.
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <Link
                key={item.link}
                href={item.link}
                className={`relative transition-all duration-300 text-sm font-medium group ${
                  isActive(item.link)
                    ? 'text-[#c4f82a]'
                    : 'text-gray-400 hover:text-[#c4f82a]'
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#c4f82a] transition-all duration-300 ${
                    isActive(item.link)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-[#c4f82a] text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-[#b8e827] hover:shadow-lg hover:shadow-[#c4f82a]/50 hover:scale-105 transition-all duration-300 active:scale-95"
            style={{ animation: 'fadeInDown 0.5s ease-out 0.4s both' }}
          >
            Contact Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-2 space-y-3">
            {navLinks.map((item, index) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`block transition-all duration-300 text-sm font-medium px-4 py-3 rounded-lg ${
                  isActive(item.link)
                    ? 'text-[#c4f82a] bg-white/5'
                    : 'text-gray-400 hover:text-[#c4f82a] hover:bg-white/5 hover:translate-x-2'
                }`}
                style={{
                  animation: isOpen
                    ? `slideInRight 0.3s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full bg-[#c4f82a] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#b8e827] hover:shadow-lg hover:shadow-[#c4f82a]/50 transition-all duration-300 active:scale-95 text-center"
              style={{
                animation: isOpen
                  ? 'slideInRight 0.3s ease-out 0.4s both'
                  : 'none',
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;