<script setup>

const props = defineProps({
  isPageLoaded: {
    type: Boolean,
    default: false
  },
  sectionAnimations: {
    type: Array,
    default: () => []
  },
  isInitialLoad: {
    type: Boolean,
    default: true
  }
})

</script>

<template>
  <section class="section min-h-screen flex items-center justify-start px-6 sm:px-10 lg:px-30 relative">
    <div class="w-full max-w-4xl">

      <!-- Main Title -->
      <div
        class="hero-big-text tracking-[0.2em] sm:tracking-[0.4em] lg:tracking-[0.8em] transition-all duration-700 delay-300"
        :class="{
          'opacity-100 translate-x-0': sectionAnimations[1].active,
          'opacity-0 -translate-x-32': !sectionAnimations[1].active
        }"
      >
        <h1 class="uppercase text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">About me</h1>
      </div>

      <!-- Separator Lines -->
      <div
        class="separate-line my-3 transition-all duration-700 delay-500"
        :class="{
          'opacity-100 translate-x-0': sectionAnimations[1].active,
          'opacity-0 -translate-x-16': !sectionAnimations[1].active
        }"
      >
        <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-30 h-1 bg-black dark:bg-white"></div>
        <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-30 h-1 bg-black dark:bg-white relative left-8 sm:left-15"></div>
      </div>

      <!-- Secondary Text -->
      <div
        class="hero-secondary-text mt-3 tracking-wider sm:tracking-widest transition-all duration-700 delay-700"
        :class="{
          'opacity-100 translate-x-0': sectionAnimations[1].active,
          'opacity-0 -translate-x-24': !sectionAnimations[1].active
        }"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl text-black/50 dark:text-white/50 font-light leading-relaxed">
          Passionate & Innovative
        </p>
      </div>

      <!-- Sub Text -->
      <div
        class="hero-sub-text mt-3 sm:mt-5 tracking-wide sm:tracking-widest transition-all duration-700 delay-900"
        :class="{
          'opacity-100 translate-x-0': sectionAnimations[1].active,
          'opacity-0 -translate-x-20': !sectionAnimations[1].active
        }"
      >
        <p class="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
          I love creating modern web experiences with cutting-edge technologies.
        </p>
      </div>

      <!-- Button -->
      <div
        class="mt-10 transition-all duration-700"
        :class="{
          'opacity-100 translate-y-0 delay-1000': sectionAnimations[1].active && isPageLoaded,
          'opacity-0 translate-y-16': !sectionAnimations[1].active || !isPageLoaded
        }"
      >
        <a href="https://darong.vercel.app" target="_blank" class="inline-block">
          <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
            <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400 dark:bg-green-600">
            </span>
            <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black dark:text-gray-200 dark:border-gray-200">
              Show more
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
