<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

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

const dob = new Date(2002, 9, 26);

const dobString = '26 September 2002';

const age = computed(() => {
  const currentYear = new Date().getFullYear();
  return currentYear - dob.getFullYear() + ' years old';
});

const aboutMeList = ref([
  {
    icon: 'solar:code-square-linear',
    text: 'A Laravel developer / Web developer',
  },
  {
    icon: 'solar:map-point-linear',
    text: 'Currently live in Siem Reap, Cambodia',
  },
  {
    icon: 'solar:calendar-linear',
    text: dobString + ' (' + age.value + ')',
  },
  {
    icon: 'solar:heart-linear',
    text: 'Single',
  },
]);

</script>

<template>
  <section class="section bg-white dark:bg-black min-h-screen flex items-center justify-start px-6 sm:px-10 lg:px-15 xl:px-30 relative">
    <div 
      class="absolute w-[100vw] h-3/6 bg-gray-200 dark:bg-gray-600 transition-all ease-in-out duration-700 delay-500 z-0 max-md:mt-20"
      :class="{
        'opacity-100 translate-x-0': sectionAnimations[1].active,
        'opacity-0 translate-x-300': !sectionAnimations[1].active
      }"
    ></div>
    <div class="w-full flex flex-col md:flex-row z-1">
      <div class="w-3/5 max-md:w-50 max-md:mb-10 xl:mx-28 lg:mx-0 max-md:ml-auto">
        <div class=" outline-1 outline-offset-6 outline-dashed outline-gray-400">
          <img src="https://picsum.photos/800" alt="Darong Profile">
        </div>
        <p class="text-gray-500 mt-3 max-md:hidden">
          <i>A random picture</i>
        </p>
      </div>
      <div class="w-full lg:w-2/5 ml-10 max-md:ml-0 max-md:px-5 flex items-center">
        <div class="h-fit">
          <!-- Main Title -->
          <div
            class="tracking-[0.15em] sm:tracking-[0.3em] lg:tracking-[0.5em] transition-all duration-700 delay-300"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-32': !sectionAnimations[1].active
            }"
          >
            <h1 class="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">Who am I</h1>
          </div>
  
          <!-- Separator Lines -->
          <div
            class="separate-line my-3 transition-all duration-700 delay-500"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-16': !sectionAnimations[1].active
            }"
          >
            <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white"></div>
            <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white relative left-8 sm:left-15"></div>
          </div>
  
          <!-- Secondary Text -->
          <div
            class="hero-secondary-text mt-3 tracking-wider sm:tracking-widest transition-all duration-700 delay-700"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[1].active,
              'opacity-0 -translate-x-24': !sectionAnimations[1].active
            }"
          >
            <p class="text-xl sm:text-1xl lg:text-3xl text-green-700 dark:text-white/50 font-light leading-relaxed">
              I'm <span class="font-bold">Darong Chan</span>
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
  
          <!-- Summary about me lists -->
          <div>
            <ul class="mt-5 space-y-3">
              <li
                v-for="(item, index) in aboutMeList"
                :key="index"
                class="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300 overflow-y-hidden"
              >
                <span class="flex gap-1.5 items-center transition-all duration-700 delay-900"
                  :class="{
                    'opacity-100 translate-y-0': sectionAnimations[1].active,
                    'opacity-0 translate-y-16': !sectionAnimations[1].active
                  }"
                >
                  <span class="bg-gray-700/10 dark:bg-green-900/25 border border-transparent p-1 rounded">
                    <Icon :icon="item.icon" width="16" height="16" class="text-gray-600 dark:text-green-500" />
                  </span>
                  <span>{{ item.text }}</span>
                </span>
              </li>
            </ul>
          </div>
  
          <!-- Button -->
          <div
            class="mt-10 transition-all duration-700"
            :class="{
              'opacity-100 translate-y-0 delay-1000': sectionAnimations[1].active && isPageLoaded,
              'opacity-0 translate-y-16': !sectionAnimations[1].active || !isPageLoaded
            }"
          >
            <router-link to="/about" class="inline-block">
              <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
                <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400 dark:bg-green-600">
                </span>
                <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black dark:text-gray-200 dark:border-gray-200">
                  My story
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
