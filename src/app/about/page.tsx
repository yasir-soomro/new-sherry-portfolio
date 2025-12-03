"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Download,
  Facebook,
  Github,
  Twitter,
  Linkedin,
  Code,
  Palette,
  Zap,
  Award,
  Heart,
  Sparkles,
  Rocket,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // --------------------
  // VALUES
  // --------------------
  const values = [
    { icon: Heart, title: "Passion", description: "I pour my heart into every project.", color: "text-lime-400", bgColor: "bg-lime-400/10" },
    { icon: Zap, title: "Innovation", description: "Exploring new technologies and creative solutions.", color: "text-purple-500", bgColor: "bg-purple-500/10" },
    { icon: Award, title: "Excellence", description: "Delivering exceptional quality in every detail.", color: "text-lime-400", bgColor: "bg-lime-400/10" },
    { icon: Sparkles, title: "Creativity", description: "Bringing unique, memorable experiences to life.", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  ];

  // --------------------
  // SERVICES
  // --------------------
  const services = [
    { icon: Monitor, title: "Web Development", description: "Building modern, scalable websites using React, Next.js, and TypeScript." },
    { icon: Palette, title: "UI/UX Design", description: "Crafting beautiful and intuitive user experiences." },
    { icon: Smartphone, title: "Responsive Design", description: "Perfect UI on all devices and screen sizes." },
    { icon: Globe, title: "Web Solutions", description: "Custom solutions for businesses around the world." },
    { icon: Code, title: "Backend Development", description: "Building APIs and robust backend systems using Node.js & Express." },
    { icon: Zap, title: "AI Automation", description: "Implementing AI tools, GPT workflows, and automation systems." },
    { icon: Award, title: "Database Management", description: "Managing scalable databases using MongoDB." },
    { icon: Rocket, title: "Cloud Deployment", description: "Deploying apps with high performance & scalability." },
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/923253086449" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/" },
    { name: "Github", icon: Github, url: "https://github.com/" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/" },
  ];

  return (
    <div className="min-h-auto bg-[#0a0a0f] overflow-x-hidden">

      {/* HERO */}
      <div className="relative overflow-hidden">
        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Hello, I&apos;m <span className="text-lime-400">Muhammad Afzal</span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mt-6 leading-relaxed">
              A dedicated Full Stack & AI Automation Developer creating impactful digital experiences with modern technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923253086449"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Let&apos;s Talk
              </a>

              {/* CV Download */}
              <a
                href="/CV (11).pdf"
                download
                className="border-2 border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <Icon className="w-5 h-5 text-white hover:text-lime-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative w-full max-w-md mx-auto aspect-[4/8] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/afzal.png"
                alt="Muhammad Afzal"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* WHAT I DO */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
            What I <span className="text-lime-500">Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group bg-gray-50 rounded-2xl p-6 hover:bg-lime-50 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="bg-lime-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
            What Drives <span className="text-lime-500">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="group bg-gray-50 rounded-2xl p-6 hover:bg-lime-500 transition-all hover:scale-105 hover:shadow-xl">
                  <div className={`${value.bgColor} ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0a0a0f] py-20 text-center px-6">
        <Rocket className="w-16 h-16 text-lime-400 mx-auto mb-6 animate-bounce" />
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
          Let&apos;s Create Something <span className="text-lime-400">Amazing</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Ready to bring your vision to life? Let&apos;s collaborate and build powerful solutions.
        </p>

        <a
          href="https://wa.me/923253086449"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition-all hover:scale-105 shadow-lg"
        >
          Get In Touch
        </a>
      </div>

    </div>
  );
}
