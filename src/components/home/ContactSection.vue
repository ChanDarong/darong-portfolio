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
    <div class="flex w-full">
      <!-- Contact info -->
      <div class="w-full">
        <div
          class="tracking-[0.15em] sm:tracking-[0.3em] lg:tracking-[0.5em] transition-all duration-700 delay-300"
          :class="{
            'opacity-100 translate-x-0': sectionAnimations[2].active,
            'opacity-0 -translate-x-32': !sectionAnimations[2].active
          }"
        >
          <!-- <h1 class="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">Who am I?</h1> -->
          <h2 class="text-7xl uppercase tracking-widest dark:text-white">Get in Touch</h2>
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

        <div class="mb-5">
          <p class="mb-5">Feel free to reach out for collaborations or just a chat!</p>
          <h5 class="text-2xl">chandarong333@gmail.com</h5>
        </div>
        <!-- Social link -->
        <div class="hidden sm:flex items-center">
          <a href="https://t.me/DarongCHAN" target="_blank" class="p-2 transition-colors mr-5" aria-label="Telegram">
            <Icon icon="mdi:telegram" width="35" height="35" />
          </a>
          <a href="https://github.com/ChanDarong" target="_blank" class="p-2 transition-colors" aria-label="GitHub">
            <Icon icon="mdi:github" width="35" height="35" />
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="w-full">
        <form class="mt-10 max-w-lg ml-20 max-md:ml-0" action="https://formspree.io/f/mayvlrze" method="POST">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="text" id="name" name="name" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" name="_replyto" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows="4" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"></textarea>
          </div>
          <button type="submit" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>
