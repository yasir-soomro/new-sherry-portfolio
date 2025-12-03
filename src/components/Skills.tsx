"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
  link?: string;
  tags?: string[];
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      id: 1,
      title: 'Front-end Development',
      description: 'Expert in HTML5, CSS3, JavaScript, TypeScript, ES6+, React.js, Next.js, Tailwind CSS, and Figma for creating stunning user interfaces.',
      icon: '💻',
      link: '/skills',
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      id: 2,
      title: 'Back-end Development',
      description: 'Specialized in Python, FastAPI, REST APIs, Node.js, Express.js, and MongoDB for building robust server-side applications.',
      icon: '⚙️',
      highlighted: true,
      link: '/skills',
      tags: ['Python', 'FastAPI', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Proficient in MongoDB, Sanity CMS, PostgreSQL, and Redis for efficient data storage and management solutions.',
      icon: '🗄️',
      link: '/skills',
      tags: ['MongoDB', 'Sanity', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Version Control & Deployment',
      description: 'Expert in Git, GitHub, GitLab, Vercel, and Netlify, ensuring seamless collaboration and continuous deployment.',
      icon: '🔀',
      link: '/skills',
      tags: ['Git', 'GitHub', 'Vercel'],
    },
    {
      id: 5,
      title: 'Responsive Design',
      description: 'Creating visually appealing, mobile-first, and functional websites that work flawlessly across all devices and screen sizes.',
      icon: '📱',
      link: '/skills',
      tags: ['Mobile-First', 'CSS Grid', 'Flexbox'],
    },
    {
      id: 6,
      title: 'AI & Automation',
      description: 'Building intelligent solutions with OpenAI APIs, LangChain, AI Agents SDK, and automation tools for next-gen applications.',
      icon: '🤖',
      link: '/skills',
      tags: ['OpenAI', 'LangChain', 'AI Agents'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-28 lg:py-32 overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-lime-200/40 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        //   variants={headingVariants}
          className="text-center mb-14 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#c4f82a] font-semibold text-sm md:text-base mb-4 tracking-wider uppercase"
          >
            What I Do Best
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            I SPECIALIZE IN A
            <br />
            RANGE OF{' '}
            <span className="inline-flex items-baseline gap-2">
              <motion.span 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                💪
              </motion.span>
              <span className="bg-gradient-to-r from-[#c4f82a] to-lime-500 bg-clip-text text-transparent">
                SKILLS
              </span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            Combining technical expertise with creative problem-solving to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7"
        >
          {skills.map((skill) => (
            <motion.a
              key={skill.id}
              href={skill.link}
            //   variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative block rounded-3xl md:rounded-[2rem] p-7 md:p-9 transition-all duration-500 cursor-pointer overflow-hidden ${
                skill.highlighted
                  ? 'bg-gradient-to-br from-[#c4f82a] to-lime-400 shadow-xl shadow-[#c4f82a]/30'
                  : 'bg-white border-2 border-gray-100 hover:border-[#c4f82a]/30 hover:shadow-2xl'
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                !skill.highlighted && 'bg-gradient-to-br from-[#c4f82a]/5 to-transparent'
              }`}></div>

              {/* Icon */}
              <motion.div
                className="mb-7 md:mb-9 relative z-10"
                whileHover={{ 
                  rotate: [0, -15, 15, -15, 0],
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.6 }
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl text-4xl md:text-5xl transition-all duration-500 shadow-lg ${
                    skill.highlighted
                      ? 'bg-white/90 group-hover:bg-white group-hover:shadow-xl'
                      : 'bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-white group-hover:to-gray-50 group-hover:shadow-xl'
                  }`}
                >
                  {skill.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-4 md:space-y-5 relative z-10">
                <h3
                  className={`text-xl md:text-2xl lg:text-3xl font-bold leading-tight transition-all duration-300 ${
                    skill.highlighted
                      ? 'text-gray-900'
                      : 'text-gray-900 group-hover:text-gray-800'
                  }`}
                  style={{ fontFamily: 'var(--font-inter, system-ui, -apple-system, sans-serif)' }}
                >
                  {skill.title}
                </h3>
                <p
                  className={`text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 font-medium ${
                    skill.highlighted
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}
                  style={{ fontFamily: 'var(--font-inter, system-ui, -apple-system, sans-serif)' }}
                >
                  {skill.description}
                </p>

                {/* Tags */}
                {skill.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skill.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                          skill.highlighted
                            ? 'bg-white/60 text-gray-800'
                            : 'bg-gray-100 text-gray-700 group-hover:bg-[#c4f82a]/20 group-hover:text-gray-900'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Arrow Indicator */}
              <motion.div
                className={`absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  skill.highlighted ? 'text-gray-900' : 'text-[#c4f82a]'
                }`}
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>

              {/* Highlighted Badge */}
              {skill.highlighted && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, type: 'spring', bounce: 0.5 }}
                  className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xl"
                >
                  ★
                </motion.div>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-10 md:mt-10"
        >
          <motion.a
            href="/skills"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-full font-bold text-sm md:text-base hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 group"
          >
            View All Skills
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;