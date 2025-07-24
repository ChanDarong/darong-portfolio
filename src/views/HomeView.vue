<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
      class="fixed top-1/2 -translate-y-1/2 left-4 sm:left-8 z-50 flex flex-col space-y-3 transition-opacity duration-700 delay-1500"
      :class="{
        'opacity-100': isPageLoaded,
        'opacity-0': !isPageLoaded
      }"
    >
      <button
        v-for="(section, index) in sectionAnimations"
        :key="index"
        @click="activateSection(index)"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="{
          'bg-green-400': currentSection === index,
          'bg-gray-400 hover:bg-gray-600': currentSection !== index
        }"
        :disabled="!isPageLoaded"
      />
    </div>

    <!-- Sections Container -->
    <div
      class="sections-wrapper h-full transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateY(-${currentSection * 100}vh)` }"
    >
      <!-- Section 1: Hero -->
      <section class="section h-screen flex items-center justify-center px-6 md:px-20 relative">
        <div class="w-full max-w-5xl">
          <!-- Hello Text -->
          <div
            class="transition-all duration-500"
            :class="{
              'opacity-100 translate-x-0 delay-300': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-20': !sectionAnimations[0].active || !isPageLoaded
            }"
            :style="{
              'transition-delay': isInitialLoad && sectionAnimations[0].active ? '300ms' : '50ms'
            }"
          >
            <code>Hello, I'm</code>
          </div>

          <!-- Main Name -->
          <div
            class="hero-big-text transition-all duration-700 tracking-widest"
            :class="{
              'opacity-100 translate-x-0 delay-300': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-32': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <h1 class="uppercase text-5xl sm:text-7xl md:text-8xl font-semibold w-fit relative">
              <span class="relative z-2">Darong</span>
              <span
                class="absolute bg-green-400 dark:bg-green-600 h-[65%] w-[60%] -left-5 bottom-0 transition-all duration-500"
                :class="{
                  'scale-100 opacity-100 delay-1000': sectionAnimations[0].active && isPageLoaded,
                  'scale-0 opacity-0': !sectionAnimations[0].active || !isPageLoaded
                }"
              ></span>
            </h1>
            <h1 class="uppercase text-5xl sm:text-7xl md:text-8xl font-semibold">Chan</h1>
          </div>

          <!-- Separator Line -->
          <div
            class="separate-line my-3 transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-1000': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-16': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <div class="separate-line mt-5 mb-5 w-20 md:w-30 h-1 bg-green-600"></div>
          </div>

          <!-- Secondary Text -->
          <div
            class="hero-secondary-text mt-3 tracking-widest transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-700': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-24': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <p class="text-xl sm:text-2xl md:text-3xl text-black/50 dark:text-white/50 font-light">
              Web / Laravel Developer
            </p>
          </div>

          <!-- Sub Text -->
          <div
            class="hero-sub-text mt-5 tracking-wide transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-700': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-20': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <p class="text-sm sm:text-base">
              I build clean, efficient web applications with Laravel.
            </p>
          </div>

          <!-- Button -->
          <div
            class="mt-10 transition-all duration-700"
            :class="{
              'opacity-100 translate-y-0 delay-1000': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 translate-y-16': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <a href="https://darong.vercel.app" target="_blank" class="inline-block">
              <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
                <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400 dark:bg-green-600">
                </span>
                <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black dark:border-gray-200">
                  Explore Articles
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Section 2: About/Skills -->
      <section class="section h-screen flex items-center justify-start pl-30 relative">
        <div class="w-full max-w-4xl">

          <!-- Main Title -->
          <div
            class="hero-big-text tracking-[0.8em] transition-all duration-700 delay-300"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-32': !sectionAnimations[1].active
            }"
          >
            <h1 class="uppercase text-8xl font-bold">About me</h1>
          </div>

          <!-- Separator Lines -->
          <div
            class="separate-line my-3 transition-all duration-700 delay-500"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-16': !sectionAnimations[1].active
            }"
          >
            <div class="separate-line mt-5 mb-5 w-30 h-1 bg-black dark:bg-white"></div>
            <div class="separate-line mt-5 mb-5 w-30 h-1 bg-black dark:bg-white relative left-15"></div>
          </div>

          <!-- Secondary Text -->
          <div
            class="hero-secondary-text mt-3 tracking-widest transition-all duration-700 delay-700"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-24': !sectionAnimations[1].active
            }"
          >
            <p class="text-4xl text-black/50 dark:text-white/50 font-light">
              Passionate & Innovative
            </p>
          </div>

          <!-- Sub Text -->
          <div
            class="hero-sub-text mt-5 tracking-widest transition-all duration-700 delay-900"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-20': !sectionAnimations[1].active
            }"
          >
            <p>
              I love creating modern web experiences with cutting-edge technologies.
            </p>
          </div>

          <!-- Button -->
          <div
            class="mt-10 transition-all duration-700 delay-1100"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-16': !sectionAnimations[1].active
            }"
          >
            <a href="#contact" class="inline-block">
              <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
                <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-blue-400">
                </span>
                <span class="relative inline-block px-6 py-3 text-sm font-bold tracking-widest uppercase border-2 border-black text-black">
                  Get In Touch
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
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
