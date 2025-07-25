<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'

const currentSection = ref(0)
const sections = ref([])
const isScrolling = ref(false)
const isPageLoaded = ref(false) // New state for page loading
const isInitialLoad = ref(true) // Track if this is the first time loading

// Animation states for each section
const sectionAnimations = ref([
  { active: false, delay: 0 }, // Changed to false initially
  { active: false, delay: 0 }
])

const activateSection = (index) => {
  if (index === currentSection.value || isScrolling.value) return

  isScrolling.value = true
  currentSection.value = index
  isInitialLoad.value = false // No longer initial load after first navigation

  // Reset all sections
  sectionAnimations.value.forEach(section => section.active = false)

  // Activate current section with delay
  setTimeout(() => {
    sectionAnimations.value[index].active = true
    isScrolling.value = false
  }, 50)
}

const handleWheel = (e) => {
  if (isScrolling.value || !isPageLoaded.value) { // Prevent scroll during loading
    e.preventDefault()
    return
  }

  e.preventDefault()

  if (e.deltaY > 0 && currentSection.value < sectionAnimations.value.length - 1) {
    // Scroll down
    activateSection(currentSection.value + 1)
  } else if (e.deltaY < 0 && currentSection.value > 0) {
    // Scroll up
    activateSection(currentSection.value - 1)
  }
}

const handleKeydown = (e) => {
  if (!isPageLoaded.value) return // Prevent key navigation during loading

  if (e.key === 'ArrowDown' && currentSection.value < sectionAnimations.value.length - 1) {
    activateSection(currentSection.value + 1)
  } else if (e.key === 'ArrowUp' && currentSection.value > 0) {
    activateSection(currentSection.value - 1)
  }
}

// New function to trigger initial page load animation
const animatePageLoad = () => {
  // Small delay to ensure page is rendered
  setTimeout(() => {
    isPageLoaded.value = true
    sectionAnimations.value[0].active = true
  }, 200) // 300ms delay for initial load
}

onMounted(() => {
  // Disable default scroll
  document.body.style.overflow = 'hidden'

  // Add event listeners
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)

  // Trigger page load animation
  animatePageLoad()
})

onUnmounted(() => {
  // Re-enable scroll
  document.body.style.overflow = 'auto'

  // Remove event listeners
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="slideshow-container h-screen overflow-hidden relative">
    <!-- Loading Overlay -->
    <div
      class="fixed inset-0 bg-green-400 z-[100] dark:bg-green-900 flex items-center justify-center transition-all ease-in-out duration-500"
      :class="{
        'translate-y-[-100%] pointer-events-none': isPageLoaded,
      }"
    ></div>

    <!-- Section Indicators - Center Left, only on first section -->
    <div
      class="fixed top-1/2 -translate-y-1/2 left-4 sm:left-8 z-50 flex flex-col space-y-4 transition-opacity duration-700 delay-1500"
      :class="{
        'opacity-100': isPageLoaded,
        'opacity-0': !isPageLoaded
      }"
    >
      <button
        v-for="(section, index) in sectionAnimations"
        :key="index"
        @click="activateSection(index)"
        class="w-2 h-2 flex items-center justify-center transition-all duration-300 focus:outline-none"
        :disabled="!isPageLoaded"
        role="button"
        :aria-label="`Go to section ${index + 1}`"
      >
        <div
          class="w-2 h-2 transition-all duration-300 rotate-45"
          :class="{
            'bg-black dark:bg-white': currentSection === index,
            'bg-none hover:bg-gray-600 dark:hover:bg-gray-400 border border-black dark:border-gray-200': currentSection !== index
          }"
        ></div>
      </button>
    </div>

    <!-- Sections Container -->
    <div
      class="sections-wrapper h-full transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateY(-${currentSection * 100}vh)` }"
    >
      <!-- Section 1: Hero -->
      <HeroSection
        :isPageLoaded="isPageLoaded"
        :sectionAnimations="sectionAnimations"
        :isInitialLoad="isInitialLoad"
      />

      <!-- Section 2: About/Skills -->
      <AboutSection
        :isPageLoaded="isPageLoaded"
        :sectionAnimations="sectionAnimations"
        :isInitialLoad="isInitialLoad"
      />
    </div>

    <!-- Scroll Hint -->
    <div
      class="fixed bottom-0 left-4 sm:left-8 flex flex-col items-center text-gray-500 transition-all duration-700"
      :class="{
        'translate-y-0': isPageLoaded && !isScrolling,
        'translate-y-100 delay-0': isScrolling || sectionAnimations[1]?.active
      }"
    >
      <div class="text-xs font-light tracking-widest mb-4 transform writing-mode-vertical dark:text-gray-200" style="writing-mode: vertical-rl; text-orientation: mixed;">
        SCROLL DOWN
      </div>
      <div class="w-px h-16 bg-gray-400 dark:bg-gray-200"></div>
    </div>
  </div>
</template>


<style scoped>
.slideshow-container {
  position: relative;
}

.sections-wrapper {
  width: 100%;
}

.section {
  width: 100%;
  position: relative;
}
</style>
