"use client";

import React, { useState, useEffect } from "react";
import { Award, TrendingUp, Edit3, Users, BookOpen, Coffee } from "lucide-react";

const journeyMilestones = [
  {
    icon: Award,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    text: 'Recognized with the "Innovative Dev Award" for an interactive website at Dev Conference Karachi 2025.',
  },
  {
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    text: "Improved client website performance, reducing page load time by 30% and enhancing UX.",
  },
  {
    icon: Edit3,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    text: "Published a guest article on Medium discussing the importance of responsive design in modern web development.",
  },
  {
    icon: Users,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    text: "Collaborated with cross-functional teams to build scalable web applications and deliver client-focused solutions.",
  },
  {
    icon: BookOpen,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    text: "Continuously learning new technologies, frameworks, and best practices to stay at the forefront of web development.",
  },
  {
    icon: Coffee,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    text: "Mentored junior developers and interns, fostering growth and knowledge sharing within the team.",
  },
];

export default function JourneySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-auto my-10 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">

        {/* Header */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center leading-tight">
            MY PROFESSIONAL <span className="inline-block animate-bounce">🏆</span><br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              JOURNEY & ACCOMPLISHMENTS
            </span>
          </h2>
        </div>

        {/* Milestones */}
        <div className="space-y-8 sm:space-y-10">
          {journeyMilestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out transform ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-5 sm:gap-6 items-start p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`${item.color} ${item.bgColor} p-4 sm:p-5 rounded-xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                      <Icon size={24} strokeWidth={2.5} className="sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-16 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
}
