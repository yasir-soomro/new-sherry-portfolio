"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PersonalJourneySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stories = [
    {
      text: `I have poured endless hours into learning and building projects, often facing challenges that seemed impossible at first. Each obstacle taught me patience, persistence, and the joy of solving real problems.`,
      author: "Muhammad Afzal",
      role: "AI Automation Developer",
      image: "/afzal.png",
      color: "from-green-400 to-emerald-500",
    },
    {
      text: `Every project I take on is a reflection of my passion. I embrace the challenges, work late nights, experiment endlessly, and learn from every mistake. This is how I grow and push my boundaries.`,
      author: "Muhammad Afzal",
      role: "Frontend & Full Stack Developer",
      image: "/afzals.jpeg",
      color: "from-purple-400 to-pink-500",
    },
    {
      text: `Coding is not just a skill, it is my craft. Each line of code represents dedication, learning, and the drive to create something meaningful. My journey is about growth, resilience, and constant improvement.`,
      author: "Muhammad Afzal",
      role: "Passionate Programmer",
      image: "/afzala.jpg",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        {/* Header */}
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
            MY JOURNEY <br />
            <span className="text-[#c4f82a]">PASSION & HARD WORK</span>
          </h2>
        </div>

        {/* Story Card */}
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "300ms" }}>
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-justify font-sans relative">
            {/* Quote */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8">
              {stories[currentIndex].text}
            </p>

            {/* Author & Thumbnails */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-center">
                <p className="text-gray-900 font-semibold text-lg">{stories[currentIndex].author}</p>
                <p className="text-gray-500 text-sm">{stories[currentIndex].role}</p>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 justify-center">
                {stories.map((story, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative transition-all duration-300 transform ${
                      index === currentIndex
                        ? "scale-110 ring-offset-2"
                        : "scale-90 opacity-50 hover:opacity-100 hover:scale-100"
                    }`}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gradient-to-br ${story.color} p-1 relative`}>
                      <Image
                        src={story.image}
                        alt={story.author}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gray-900 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prevStory} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-50">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={nextStory} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
