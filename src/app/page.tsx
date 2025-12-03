

import AccomplishmentsSection from '@/components/Accomp'
import HeroSection from '@/components/Hero-Section'
import ProjectsSection from '@/components/Project-Section'
import SkillsSection from '@/components/Skills'
import TestimonialsSection from '@/components/Team'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <AccomplishmentsSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default Home