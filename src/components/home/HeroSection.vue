<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

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
        <!-- <code class="dark:text-green-600">Hello, I'm</code> -->
        <code class="dark:text-green-600">Hello, I'm</code>
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
          <span class="relative z-2">{{ currentLocale == 'km' ? 'ចាន់ ដារុង' : 'Darong' }}</span>
          <span
            class="absolute bg-green-400 dark:bg-green-600 h-[65%] w-[60%] -left-5 bottom-0 transition-all duration-500"
            :class="{
              'scale-100 opacity-100 delay-1000': sectionAnimations[0].active && isPageLoaded,
              'scale-0 opacity-0': !sectionAnimations[0].active || !isPageLoaded
            }"
          ></span>
        </h1>
        <h1 class="uppercase text-5xl sm:text-7xl md:text-8xl font-semibold" v-if="currentLocale == 'en'">Chan</h1>
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
        <p class="text-xl sm:text-2xl md:text-3xl text-black/50 dark:text-white/60 font-light">
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
          {{ $t('hero.subtitle') }}
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
        <a href="https://darong-blog.vercel.app" target="_blank" class="inline-block">
          <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
            <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400 dark:bg-green-600">
            </span>
            <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black dark:text-gray-200 dark:border-gray-200">
              {{ $t('hero.button') }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
