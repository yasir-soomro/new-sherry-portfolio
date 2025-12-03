"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "Time-Zone E-Commerce Platform",
    description:
      "A modern e-commerce store with dynamic filtering, secure checkout, and seamless user experience.",
    category: "Website Design",
    image: ["/projects/pic1.png", "/projects/pic2.png", "/projects/pic3.png"],
    link: "https://time-zone-website-pi.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "ProperSix Business Platform",
    description:
      "Professional multi-page business website featuring services, animations, blogs, and modern UI components.",
    category: "Website Design",
    image: ["/projects/image-1.png", "/projects/image-2.png", "/projects/image-4.png"],
    link: "https://local-bussiness-website.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    id: 3,
    title: "Gemini CLI Local Website",
    description:
      "Interactive website showcasing Gemini CLI tools with real-time demos and smooth animations.",
    category: "Website Design",
    image: ["/projects/gemini.png", "/projects/gemini-2.png", "/projects/gemini-1.png"],
    link: "https://gemini-cli-simple-website.vercel.app/",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 4,
    title: "Old Portfolio Website",
    description:
      "Previous portfolio website featuring animated sections, project listings, and immersive transitions.",
    category: "Portfolio Website",
    image: ["/projects/portfolio1.png", "/projects/portfolio2.png", "/projects/portfolio3.png"],
    link: "https://my-new-portfolio-vrk2.vercel.app/project",
    tags: ["React", "GSAP", "Tailwind"],
  },
  {
    id: 5,
    title: "Currency Converter App",
    description:
      "Real-time currency converter web app with live exchange rates, smooth UI, and intuitive experience.",
    category: "Web Application",
    image: ["/projects/currency1.png", "/projects/currency2.png", "/projects/currency3.png"],
    link: "https://currency-exchange-rate-beta.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    id: 6,
    title: "Timer & Stopwatch App",
    description:
      "A fully functional timer and stopwatch app with sleek UI and responsive design.",
    category: "Web Application",
    image: ["/projects/Timer.jpeg", "/projects/watch.jpeg", "/projects/Timer.jpeg"],
    link: "https://timer-stopwatch-projects.vercel.app/",
    tags: ["React", "Tailwind", "JavaScript"],
  },
];


// ANIMATION VARIANTS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const headingVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// COMPONENT
const ProjectsSection = () => {
  const [slideIndexes, setSlideIndexes] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes(prev =>
        prev.map((index, projectIndex) => (index + 1) % projects[projectIndex].image.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white  overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-gray-600 text-sm md:text-base font-medium mb-3 uppercase tracking-wider">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            HERE’S A GLIMPSE OF SOME EXCITING{" "}
            <span className="relative text-[#c4f82a]">
              PROJECTS
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#c4f82a]/30 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </span>
            <br />
            I’VE BUILT
          </h2>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {projects.map((project, projectIndex) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <a
                href={project.link}
                target="_blank"
                className="block bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-2xl"
              >
                {/* Image Slider */}
                <div className="relative w-full h-0 pb-[75%] bg-gray-200 overflow-hidden">
                  <motion.div
                    key={slideIndexes[projectIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image[slideIndexes[projectIndex]]}
                      alt={project.title}
                      fill
                      className="object-contain duration-700"
                    />
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/90 text-gray-900 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <span className="px-6 py-3 bg-[#c4f82a] text-gray-900 font-bold text-sm rounded-full shadow-lg flex items-center gap-2">
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 md:p-7">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#c4f82a] rounded-full" />
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 mb-5">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm group-hover:text-[#c4f82a] transition-colors">
                    View Project →
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-3 bg-[#c4f82a] text-gray-900 px-10 py-5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
