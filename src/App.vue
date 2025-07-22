<template>
  <div class="min-h-screen bg-amber-50">
    <!-- Navigation Header -->
    <Header/>

    <!-- Hero Section -->
    <main class="flex-1 px-6 lg:px-12">
      <router-view />
    </main>

    <!-- Background Decorative Elements -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <img src="../public/images/cube.svg"  alt="cube background" class="absolute -top-20 -left-45 w-130 object-cover opacity-8" />
      <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-30 transform rotate-12"></div>
      <div class="absolute bottom-1/4 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-40"></div>
      <div class="absolute top-1/2 right-1/6 w-48 h-48 bg-gray-50 rounded-full opacity-50"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Scroll to projects section
const scrollToProjects = () => {
  // Add smooth scroll behavior to projects section
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>

</style>
