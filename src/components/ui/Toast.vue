<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  show: Boolean,
  type: {
    type: String,
    default: 'success'
  },
  message: String,
  duration: {
    type: Number,
    default: 3000
  }
})

const emit = defineEmits(['close'])

watch(() => props.show, (val) => {
  if (val) {
    setTimeout(() => emit('close'), props.duration)
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 translate-y-[-20px] scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-[-20px] scale-95"
  >
    <div
      v-if="show"
      class="fixed top-24 right-6 z-[9999] max-w-sm w-full"
    >
      <div
        class="flex items-center gap-3 p-4 rounded-lg shadow-lg border"
        :class="{
          'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700': type === 'success',
          'bg-red-50 dark:bg-red-900/50 border-red-200 dark:border-red-700': type === 'error'
        }"
      >
        <div
          class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          :class="{
            'bg-green-100 dark:bg-green-800': type === 'success',
            'bg-red-100 dark:bg-red-800': type === 'error'
          }"
        >
          <Icon
            v-if="type === 'success'"
            icon="lucide:check"
            class="w-5 h-5 text-green-600 dark:text-green-400"
          />
          <Icon
            v-else
            icon="lucide:x"
            class="w-5 h-5 text-red-600 dark:text-red-400"
          />
        </div>
        <p
          class="flex-1 text-sm font-medium"
          :class="{
            'text-green-800 dark:text-green-200': type === 'success',
            'text-red-800 dark:text-red-200': type === 'error'
          }"
        >
          {{ message }}
        </p>
        <button
          @click="$emit('close')"
          class="flex-shrink-0 p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <Icon
            icon="lucide:x"
            class="w-4 h-4"
            :class="{
              'text-green-600 dark:text-green-400': type === 'success',
              'text-red-600 dark:text-red-400': type === 'error'
            }"
          />
        </button>
      </div>
    </div>
  </Transition>
</template>