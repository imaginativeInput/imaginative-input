<template>
  <div id="app-root">
    <NavBar :sections="sections" @navigate="scrollToSection" />
    <main>
      <HeroSection @navigate="scrollToSection" />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Terminal @navigate="scrollToSection" :sections="sections" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Terminal from './components/Terminal.vue'

const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Scroll reveal observer
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
onUnmounted(() => observer?.disconnect())
</script>

<style>
#app-root {
  min-height: 100vh;
}
</style>
