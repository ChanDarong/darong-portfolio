<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

const currentSection = ref(0)
const sections = ref([])
const isScrolling = ref(false)
const isPageLoaded = ref(false)
const isInitialLoad = ref(true)

// Touch handling variables
const touchStartY = ref(0)
const touchEndY = ref(0)
const minSwipeDistance = 50
const isTouching = ref(false)

// Wheel scroll accumulation
let wheelDelta = 0
const wheelThreshold = 50 // Minimum accumulated scroll to trigger navigation

// Animation states for each section
const sectionAnimations = ref([
  { active: false, delay: 0 },
  { active: false, delay: 0 },
  { active: false, delay: 0 }
])

const activateSection = (index) => {
  if (index === currentSection.value || isScrolling.value) return

  isScrolling.value = true
  currentSection.value = index
  isInitialLoad.value = false

  // Reset wheel delta
  wheelDelta = 0

  // Reset all sections
  sectionAnimations.value.forEach(section => section.active = false)

  // Activate current section with delay
  setTimeout(() => {
    sectionAnimations.value[index].active = true
    setTimeout(() => {
      isScrolling.value = false
    }, 800)
  }, 50)
}

const handleWheel = (e) => {
  if (isScrolling.value || !isPageLoaded.value) {
    e.preventDefault()
    return
  }

  e.preventDefault()

  // Accumulate wheel delta
  wheelDelta += e.deltaY

  // Check if threshold is met
  if (Math.abs(wheelDelta) < wheelThreshold) return

  // Determine direction and navigate
  if (wheelDelta > 0 && currentSection.value < sectionAnimations.value.length - 1) {
    activateSection(currentSection.value + 1)
  } else if (wheelDelta < 0 && currentSection.value > 0) {
    activateSection(currentSection.value - 1)
  } else {
    // Reset if at boundary
    wheelDelta = 0
  }
}

const handleKeydown = (e) => {
  if (!isPageLoaded.value || isScrolling.value) return

  if (e.key === 'ArrowDown' && currentSection.value < sectionAnimations.value.length - 1) {
    activateSection(currentSection.value + 1)
  } else if (e.key === 'ArrowUp' && currentSection.value > 0) {
    activateSection(currentSection.value - 1)
  }
}

// Touch event handlers
const handleTouchStart = (e) => {
  if (isScrolling.value) return
  isTouching.value = true
  touchStartY.value = e.touches[0].clientY
  touchEndY.value = touchStartY.value
}

const handleTouchMove = (e) => {
  if (!isTouching.value || isScrolling.value || !isPageLoaded.value) {
    e.preventDefault()
    return
  }

  touchEndY.value = e.touches[0].clientY
  e.preventDefault()
}

const handleTouchEnd = (e) => {
  if (!isTouching.value || isScrolling.value || !isPageLoaded.value) {
    isTouching.value = false
    return
  }

  isTouching.value = false
  const swipeDistance = touchStartY.value - touchEndY.value

  // Check if swipe distance meets minimum threshold
  if (Math.abs(swipeDistance) < minSwipeDistance) return

  if (swipeDistance > 0 && currentSection.value < sectionAnimations.value.length - 1) {
    // Swipe up - go to next section
    activateSection(currentSection.value + 1)
  } else if (swipeDistance < 0 && currentSection.value > 0) {
    // Swipe down - go to previous section
    activateSection(currentSection.value - 1)
  }

  // Reset touch positions
  touchStartY.value = 0
  touchEndY.value = 0
}

const animatePageLoad = () => {
  setTimeout(() => {
    isPageLoaded.value = true
    sectionAnimations.value[0].active = true
  }, 200)
}

onMounted(() => {
  // Disable default scroll
  document.body.style.overflow = 'hidden'

  // Add event listeners
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)

  // Touch event listeners
  window.addEventListener('touchstart', handleTouchStart, { passive: false })
  window.addEventListener('touchmove', handleTouchMove, { passive: false })
  window.addEventListener('touchend', handleTouchEnd, { passive: false })

  // Trigger page load animation
  animatePageLoad()
})

onUnmounted(() => {
  // Re-enable scroll
  document.body.style.overflow = 'auto'

  // Remove event listeners
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)
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
      class="fixed top-1/2 -translate-y-1/2 right-4 hidden sm:left-8 sm:right-auto z-50 sm:flex flex-col space-y-4 transition-opacity duration-700 delay-1500"
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

      <!-- Section 3: Contact -->
       <ContactSection
        :isPageLoaded="isPageLoaded"
        :sectionAnimations="sectionAnimations"
        :isInitialLoad="isInitialLoad"
      />

      <!-- Background Decorative Elements -->
      <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img src="../public/images/cube.svg"  alt="cube background" class="absolute -top-20 -left-45 w-130 object-cover opacity-8" />
        <!-- <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 dark:bg-gray-500/20 rounded-full opacity-30 transform rotate-12"></div>
        <div class="absolute bottom-1/4 right-1/3 w-32 h-32 bg-green-100/25 dark:bg-green-600 rounded-full opacity-40"></div>
        <div class="absolute top-1/2 right-1/6 w-48 h-48 bg-gray-50 dark:bg-green-400/20 rounded-full opacity-50"></div> -->
      </div>
    </div>

    <!-- Scroll Hint -->
    <div
      class="fixed bottom-0 right-4 left-auto sm:left-8 sm:right-auto flex flex-col items-center text-gray-500 transition-all duration-700"
      :class="{
        'translate-y-0': isPageLoaded && !isScrolling,
        'translate-y-100 delay-0': isScrolling || sectionAnimations[1]?.active || sectionAnimations[2]?.active
      }"
    >
      <div class="text-xs font-light tracking-widest mb-4 transform writing-mode-vertical dark:text-gray-200" style="writing-mode: vertical-rl; text-orientation: mixed;">
        {{ $t('scrollDown') }}
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
