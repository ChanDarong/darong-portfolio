<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import Input from '../ui/form/Input.vue';
import TextArea from '../ui/form/TextArea.vue';

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

const dobString = '26 October 2002';

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
    <div class="flex w-full flex-col md:flex-row max-md:mt-15">
      <!-- Contact info -->
      <div class="w-full flex items-center">
        <div class="h-fit">
          <div
            class="tracking-[0.15em] sm:tracking-[0.3em] lg:tracking-[0.5em] transition-all duration-700 delay-300"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[2].active,
              'opacity-0 -translate-x-32': !sectionAnimations[2].active
            }"
          >
            <!-- <h1 class="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">Who am I?</h1> -->
            <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest dark:text-white">Get in Touch</h2>
          </div>
  
          <!-- Separator Lines -->
          <div
            class="separate-line my-3 transition-all duration-700 delay-500"
            :class="{
              'opacity-100 translate-x-0': sectionAnimations[2].active,
              'opacity-0 -translate-x-16': !sectionAnimations[2].active
            }"
          >
            <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white"></div>
            <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white relative left-8 sm:left-15"></div>
          </div>
  
          <div class="mb-3 lg:mb-8 transition-all duration-700"
            :class="{
              'opacity-100 translate-y-0 delay-500': sectionAnimations[2].active,
              'opacity-0 translate-y-16': !sectionAnimations[2].active
            }"
          >
            <p class="mb-3 lg:mb-5">Feel free to reach out for collaborations or just a chat!</p>
            <h5 class="text-xl lg:text-2xl">chandarong333@gmail.com</h5>
          </div>
  
          <!-- Social link -->
          <div class="flex items-center transition-all duration-700"
            :class="{
              'opacity-100 translate-y-0 delay-700': sectionAnimations[2].active,
              'opacity-0 translate-y-16': !sectionAnimations[2].active
            }"
          >
            <a href="https://t.me/DarongCHAN" target="_blank" class="p-2 transition-colors scale-70 lg:scale-100 mr-2 lg:mr-5" aria-label="Telegram">
              <Icon icon="mdi:telegram" width="35" height="35" />
            </a>
            <a href="https://github.com/ChanDarong" target="_blank" class="p-2 transition-colors scale-70 lg:scale-100" aria-label="GitHub">
              <Icon icon="mdi:github" width="35" height="35" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="w-full">
        <form class="mt-5 max-w-lg ml-20 max-md:ml-0 transition-all duration-700"
          :class="{
            'opacity-100 translate-y-0 delay-500': sectionAnimations[2].active && isPageLoaded,
            'opacity-0 translate-y-16': !sectionAnimations[2].active || !isPageLoaded
          }"
          action="https://formspree.io/f/mayvlrze" method="POST">
          <div class="mb-3 lg:mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div class="mb-3 lg:mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div class="mb-3 lg:mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
            <TextArea id="message" name="message" rows="4" required />
          </div>
          <!-- Button -->
          <div
            class="mt-5 lg:mt-10 transition-all duration-700"
            :class="{
              'opacity-100 translate-y-0 delay-1000': sectionAnimations[2].active && isPageLoaded,
              'opacity-0 translate-y-16': !sectionAnimations[2].active || !isPageLoaded
            }"
          >
            <button type="submit" class="inline-block">
              <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer">
                <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-green-400 dark:bg-green-600">
                </span>
                <span class="relative inline-block px-6 py-3 text-sm tracking-widest uppercase border-2 border-black text-black dark:text-gray-200 dark:border-gray-200">
                  Send Message
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
