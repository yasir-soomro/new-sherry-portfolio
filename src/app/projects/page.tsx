"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// ------------------------------------
// PROJECTS DATA
// ------------------------------------
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

// ------------------------------------
// ANIMATION
// ------------------------------------
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsPage = () => {
  const [slideIndexes, setSlideIndexes] = useState(projects.map(() => 0));
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [darkMode, setDarkMode] = useState(false);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes(prev =>
        prev.map((index, pIndex) => (index + 1) % projects[pIndex].image.length)
      );
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Categories
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  // Filtered Projects
  const filteredProjects = projects.filter(project => {
    const term = search.toLowerCase();
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.tags.some(tag => tag.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });

  // Projects to show (pagination)
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} min-h-screen py-20 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 border rounded-full font-semibold transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className={`text-4xl md:text-6xl font-extrabold ${darkMode ? "text-white" : "text-gray-900"}`}>
            My <span className="text-[#c4f82a]">Projects</span>
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mt-3 md:text-lg`}>
            A collection of websites, applications, and modern UI experiences I’ve crafted.
          </p>
        </motion.div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Search */}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={`w-full md:w-80 px-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 ${
              darkMode ? "bg-gray-800 border-gray-600 text-white focus:ring-[#c4f82a]" : "bg-white border-gray-300 focus:ring-[#c4f82a]"
            }`}
          />

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border transition ${
                  activeCategory === cat
                    ? "bg-[#c4f82a] text-gray-900 border-[#c4f82a]"
                    : darkMode
                    ? "text-gray-300 border-gray-600 hover:bg-gray-700"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`group rounded-3xl shadow-md hover:shadow-2xl border overflow-hidden transition-all ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
              }`}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <motion.div
                  key={slideIndexes[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image[slideIndexes[index]]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all"></div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <a
                    href={project.link}
                    target="_blank"
                    className="px-6 py-3 bg-[#c4f82a] text-gray-900 font-bold rounded-full shadow-lg"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide mb-2 flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 bg-[#c4f82a] rounded-full"></span>
                  {project.category}
                </p>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4`}>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className={`font-semibold text-sm hover:text-[#c4f82a] transition-colors ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 bg-[#c4f82a] text-gray-900 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* No results */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
