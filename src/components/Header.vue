<template>
  <header class="w-full px-5 py-4 lg:px-10 lg:py-8 z-50 fixed top-0">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-2xl">
        $_DARONG
      </router-link>

      <!-- Right side icons -->
      <div class="flex items-center space-x-4">
        <!-- Social link -->
        <div class="hidden sm:flex items-center space-x-2">
          <a href="https://t.me/DarongCHAN" target="_blank" class="p-2 transition-colors" aria-label="Telegram">
            <Icon icon="mdi:telegram" width="20" height="20" />
          </a>
          <a href="https://github.com/ChanDarong" target="_blank" class="p-2 transition-colors" aria-label="GitHub">
            <Icon icon="mdi:github" width="20" height="20" />
          </a>
        </div>

        <!-- Theme toggle -->
        <ThemeToggle />

        <!-- Menu toggle button -->
        <button @click="toggleMenu" class="p-2 cursor-pointer" aria-label="Toggle Menu">
          <div class="menu-toggler text-right h-[25px] flex flex-col justify-between group" :class="{ 'menu-opened': isMenuOpen}">
            <div class="w-[50px] h-[3px] bg-gray-900 dark:bg-white transition-all"></div>
            <div class="w-[30px] h-[3px] bg-gray-900 dark:bg-white ml-auto transition-all"></div>
          </div>
        </button>
      </div>
    </nav>
  </header>

  <!-- Offcanvas -->
  <Transition name="offcanvas" @after-enter="animateMenuItems">
    <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-800/50 z-40 h-full transition-all" @click="closeMenu">
      <div class="absolute top-0 right-0 bg-green-500 dark:bg-green-900 px-10 py-8 lg:px-10 h-full w-full transition-all duration-700 ease-out" @click.stop>
        <ul class="relative top-[50%] -translate-y-[50%] text-5xl">
          <li
            v-for="(item, index) in menuItems"
            :key="item.name"
            class="py-5 uppercase text-center menu-item"
            :class="{ 'menu-item-animate': showMenuItems }"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <a :href="item.href" @click="closeMenu">{{ item.name }}</a>
          </li>
          <li class="mt-10 text-center">
            <!-- Social link -->
            <div class="flex sm:hidden justify-center space-x-2">
              <a href="https://t.me/DarongCHAN" target="_blank" class="p-2 transition-colors" aria-label="Telegram">
                <Icon icon="mdi:telegram" width="20" height="20" />
              </a>
              <a href="https://github.com/ChanDarong" target="_blank" class="p-2 transition-colors" aria-label="GitHub">
                <Icon icon="mdi:github" width="20" height="20" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuOpen = ref(false)
const showMenuItems = ref(false)
const isDarkMode = ref(false)

const menuItems = [
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact', href: '#contact' }
]

const toggleMenu = () => {
  if (isMenuOpen.value) {
    closeMenu()
  } else {
    isMenuOpen.value = true
    showMenuItems.value = false // Reset menu items animation
  }
}

const closeMenu = () => {
  showMenuItems.value = false
  isMenuOpen.value = false
}

const animateMenuItems = () => {
  // Trigger menu items animation after off-canvas is fully visible
  setTimeout(() => {
    showMenuItems.value = true
  }, 50)
}

</script>

<style scoped>
/* Offcanvas slide-in animation */
/* .offcanvas-enter-active,
.offcanvas-leave-active {
  transition: all 0.3s ease;
} */

.offcanvas-enter-from,
.offcanvas-leave-to {
  opacity: 0;
}

.offcanvas-enter-from > div,
.offcanvas-leave-to > div {
  transform: translateX(100%);
}

.offcanvas-enter-to > div,
.offcanvas-leave-from > div {
  transform: translateX(0);
}

/* Menu items animation */
.menu-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.menu-item-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Hamburger menu animation */
.menu-toggler div {
  transform-origin: center;
}

</style>
