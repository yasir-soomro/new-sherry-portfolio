"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiOpenai,
} from "react-icons/si";

// ------------------------------------
// SKILLS DATA
// ------------------------------------
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", level: 90, icon: <SiTypescript className="w-6 h-6" /> },
      { name: "Next.js", level: 90, icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React.js", level: 75, icon: <SiReact className="w-6 h-6" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="w-6 h-6" /> },
      { name: "HTML /  CSS / Recharts / Sanity", level: 95, icon: null },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 15, icon: <SiNodedotjs className="w-6 h-6" /> },
      { name: "Express.js", level: 10, icon: <SiExpress className="w-6 h-6" /> },
      { name: "MongoDB", level: 50, icon: <SiMongodb className="w-6 h-6" /> },
      { name: "API Development", level: 60, icon: null },
      { name: "Git & Github", level: 90, icon: null },
    ],
  },
  {
    category: "Python & AI",
    items: [
      { name: "Python", level: 80, icon: <SiPython className="w-6 h-6" /> },
      { name: "OpenAI / ChatGPT", level: 85, icon: <SiOpenai className="w-6 h-6" /> },
      { name: "Agentic AI", level: 75, icon: null },
      { name: "Prompt & Context Engineering", level: 75, icon: null },
      { name: "Gemini CLI & Spec-Kit Plus", level: 75, icon: null },
    ],
  },
];

// ------------------------------------
// ANIMATION VARIANTS
// ------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ------------------------------------
// COMPONENT
// ------------------------------------
const SkillsPage = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-[#c4f82a]">Skills</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 md:text-lg">
            A showcase of my technical expertise including AI, frontend, backend, and more.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={skillVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h2>
              <div className="flex flex-col gap-5">
                {category.items.map((skill, i) => (
                  <motion.div key={i} variants={skillVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon && <span className="text-[#c4f82a]">{skill.icon}</span>}
                        <span className="text-gray-800 dark:text-gray-200 font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-3 rounded-full bg-gradient-to-r from-[#c4f82a] to-[#7fff00]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
