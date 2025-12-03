"use client";

import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/share/1DTqu1Saa3/" },
    { icon: Github, url: "https://github.com/yasir-soomro" },
    { icon: Linkedin, url: "here is linkden profile link www.linkedin.com/in/muhammad-afzal-soomro" },
    { icon: Phone, url: "https://wa.me/923253086449" }, // WhatsApp link
  ];

  return (
    <footer className="bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and About */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-lime-400 rounded"></div>
            <span className="text-white font-bold text-lg sm:text-xl">SHERRYPORTFOLIO.</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            I am Muhammad Afzal, a passionate Full Stack & AI Automation Developer. I craft modern, responsive, and visually stunning web experiences that leave a lasting impact.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-2">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/" className="hover:text-lime-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-lime-400 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-lime-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-lime-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lime-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-lime-400" />
              <span>afzal@example.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-lime-400" />
              <span>+92 3253086449</span>
            </li>
            <li className="flex items-center gap-2">
              <span>soomroyasir@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/10 mt-12 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Muhammad Afzal. All rights reserved.
      </div>
    </footer>
  );
}
