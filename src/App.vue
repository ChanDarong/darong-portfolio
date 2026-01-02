<template>
  <div class="min-h-screen bg-amber-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-all duration-500">
    <!-- Navigation Header -->
    <Header/>

    <main class="flex-1 relative z-1">
      <router-view />
    </main>
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
