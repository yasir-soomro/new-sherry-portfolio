"use client";

import React from 'react';
import Image from 'next/image';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const HeroSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: 'Whatsapp', icon: 'Wp', url: 'https://wa.me/923253086449' },
    { name: 'LinkedIn', icon: 'Li', url: 'https://linkedin.com' },
    { name: 'Facebook', icon: 'Fb', url: 'https://www.facebook.com/share/1DTqu1Saa3/' },
    { name: 'Github', icon: 'Gth', url: 'https://github.com/yasir-soomro' },
  ];

  return (
    <section className="relative h-auto bg-[#0f0f1a] overflow-hidden pt-20 pb-10">
      {/* Background Gradient Blur */}
      <div className="absolute top-1/4 md:top-1/3 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-1 lg:gap-1 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10 order-2 lg:order-1">
            {/* Headings */}
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
                CODING WITH
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight flex items-center gap-2 md:gap-3 flex-wrap" style={{ animation: 'fadeInUp 0.6s ease-out 0.15s both' }}>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl">🔥</span>
                <span className='text-3xl md:text-5xl text-[#c4f82a]'>PASSION,</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
                CREATING
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight" style={{ animation: 'fadeInUp 0.6s ease-out 0.45s both' }}>
                WITH PURPOSE
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed" style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}>
              Hello and welcome to my web developer portfolio! I&apos;m thrilled to showcase my passion for creating captivating and functional websites.
            </p>

           {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-3 md:gap-4" style={{ animation: 'fadeInUp 0.6s ease-out 0.75s both' }}>
  {/* Let's Talk - WhatsApp Link */}
  <a
    href="https://wa.me/923253086449"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-[#c4f82a] text-black px-6 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base hover:bg-[#b8e827] hover:shadow-xl hover:shadow-[#c4f82a]/40 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
    aria-label="Let's Talk"
  >
    <span className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center text-sm md:text-base">
      💬
    </span>
    Let&apos;s Talk
  </a>

  {/* Download CV */}
  <a
    href="/CV (11).pdf" // replace with your CV file path
    download
    className="group border-2 border-gray-700 bg-[#1a1a2e] text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base hover:border-[#c4f82a] hover:bg-[#c4f82a]/5 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
    aria-label="Download CV"
  >
    <span className="w-5 h-5 md:w-6 md:h-6 bg-white/5 rounded-full flex items-center justify-center text-sm md:text-base group-hover:bg-[#c4f82a]/20">
      ⬇️
    </span>
    Download CV
  </a>
</div>


            {/* Social Links */}
            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4" style={{ animation: 'fadeInUp 0.6s ease-out 0.9s both' }}>
              <p className="text-white font-medium text-xs md:text-sm">Follow Me:</p>
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-11 md:h-11 border-2 border-gray-700 rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-semibold hover:border-[#c4f82a] hover:text-[#c4f82a] hover:bg-[#c4f82a]/5 hover:scale-110 transition-all duration-300"
                    style={{ animation: `scaleIn 0.4s ease-out ${1.05 + index * 0.1}s both` }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent max-w-[150px] lg:max-w-[200px]"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-0" style={{ animation: 'fadeInScale 0.8s ease-out 0.3s both' }}>
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
              <div className="absolute inset-0 top-6 right-6 md:top-8 md:right-8 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-[30px] md:rounded-[40px] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-90 rotate-3"></div>
              <div className="relative aspect-[4/8] w-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 p-0.5">
                <div className="relative w-full h-full bg-[#0f0f1a] rounded-[29px] md:rounded-[39px] overflow-hidden">
                  <Image
                    src="/afzal.png"
                    alt="Portfolio Developer - Professional Web Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                    quality={100}
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#c4f82a] rounded-full opacity-10 blur-xl md:blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 bg-purple-500 rounded-full opacity-10 blur-xl md:blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
