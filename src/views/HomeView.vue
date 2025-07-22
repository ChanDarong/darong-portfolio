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
  }, 100)
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
  }, 300) // 300ms delay for initial load
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
      
      class="fixed inset-0 bg-green-400 z-[100] flex items-center justify-center transition-all ease-in-out duration-500"
      :class="{ 
        'translate-y-[-100%] pointer-events-none': isPageLoaded,
      }"
    >
      <!-- <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
        <p class="text-lg text-gray-600">Loading...</p>
      </div> -->
    </div>

    <!-- Section Indicators - Center Left, only on first section -->
    <div 
      class="fixed top-1/2 -translate-y-1/2 left-8 z-50 flex flex-col space-y-3 transition-opacity duration-700 delay-2000"
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
      <section class="section h-screen flex items-center justify-start pl-30 relative">
        <div class="w-full max-w-4xl">
          <!-- Hello Text -->
          <div 
            class="transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-500': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-20': !sectionAnimations[0].active || !isPageLoaded
            }"
            :style="{ 
              'transition-delay': isInitialLoad && sectionAnimations[0].active ? '500ms' : '100ms' 
            }"
          >
            <code>Hello, I'm</code>
          </div>

          <!-- Main Name -->
          <div 
            class="hero-big-text transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-700': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-32': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <h1 class="uppercase text-8xl font-semibold w-fit relative">
              <span class="relative z-2">Darong</span>
              <span 
                class="absolute bg-green-400 h-[65%] w-[60%] -left-5 bottom-0 transition-all duration-500"
                :class="{
                  'scale-100 opacity-100 delay-1000': sectionAnimations[0].active && isPageLoaded,
                  'scale-0 opacity-0': !sectionAnimations[0].active || !isPageLoaded
                }"
              ></span>
            </h1>
            <h1 class="uppercase text-8xl font-semibold">Chan</h1>
          </div>

          <!-- Separator Line -->
          <div 
            class="separate-line my-3 transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-1200': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-16': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <div class="separate-line mt-5 mb-5 w-30 h-1 bg-green-600"></div>
          </div>

          <!-- Secondary Text -->
          <div 
            class="hero-secondary-text mt-3 tracking-widest transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-1400': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-24': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <p class="text-3xl text-black/50 font-light">
              Web / Laravel Developer
            </p>
          </div>

          <!-- Sub Text -->
          <div 
            class="hero-sub-text mt-5 tracking-widest transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-1600': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-20': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <p>
              I build clean, efficient web applications with Laravel.
            </p>
          </div>

          <!-- Button -->
          <div 
            class="mt-10 transition-all duration-700"
            :class="{
              'opacity-100 translate-x-0 delay-1800': sectionAnimations[0].active && isPageLoaded,
              'opacity-0 -translate-x-16': !sectionAnimations[0].active || !isPageLoaded
            }"
          >
            <a href="https://darong.vercel.app" target="_blank" class="inline-block">
              <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
                <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400">
                </span>
                <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black">
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
            <div class="separate-line mt-5 mb-5 w-30 h-1 bg-black"></div>
            <div class="separate-line mt-5 mb-5 w-30 h-1 bg-black relative left-15"></div>
          </div>

          <!-- Secondary Text -->
          <div 
            class="hero-secondary-text mt-3 tracking-widest transition-all duration-700 delay-700"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-24': !sectionAnimations[1].active
            }"
          >
            <p class="text-4xl text-black/50 font-light">
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

    <!-- Scroll Hint - Bottom Left with Vertical Text -->
    <div 
      class="fixed bottom-0 left-8 flex flex-col items-center text-gray-500 transition-all duration-700"
      :class="{ 
        'translate-y-0 delay-2000': isPageLoaded && !isScrolling,
        'translate-y-100 delay-0': isScrolling || sectionAnimations[1].active
      }"
    >
      <!-- Vertical Text "SCROLL DOWN" -->
      <div class="writing-mode-vertical text-xs font-light tracking-widest mb-4" style="writing-mode: vertical-rl; text-orientation: mixed;">
        SCROLL DOWN
      </div>
      
      <!-- Vertical Line -->
      <div class="w-px h-16 bg-gray-400"></div>
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
