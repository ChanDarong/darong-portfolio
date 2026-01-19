<template>
  <div class="language-switcher">
    <button 
      @click="toggleLanguage" 
      class="p-2 hover:bg-gray-900/5 hover:dark:bg-slate-700 transition-colors flex items-center gap-2"
      :aria-label="'Switch to ' + (currentLocale === 'en' ? 'Khmer' : 'English')"
    >
        <span class="text-sm font-medium">
             <Icon :icon="currentLocale === 'en' ? 'flag:gb-4x3' : 'flag:kh-4x3'" />
        </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'km' : 'en'
  // Optional: Save to localStorage
  localStorage.setItem('locale', locale.value)
}

// Optional: Load from localStorage on mount
if (typeof window !== 'undefined') {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'en' || savedLocale === 'km')) {
    locale.value = savedLocale
  }
}
</script>

<style scoped>
.language-switcher button {
  cursor: pointer;
}
</style>
