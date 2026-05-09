<template>
  <div class="min-h-screen bg-amber-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-all duration-500">
    <Toast
      :show="toast.show"
      :type="toast.type"
      :message="toast.message"
      @close="toast.show = false"
    />

    <Header @show-toast="showToast" />

    <main class="flex-1 relative z-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { reactive, provide } from 'vue'
import Header from './components/Header.vue'
import Toast from './components/ui/Toast.vue'

const toast = reactive({
  show: false,
  type: 'success',
  message: ''
})

const showToast = (type, message) => {
  toast.type = type
  toast.message = message
  toast.show = true
}

provide('showToast', showToast)
</script>

<style scoped>

</style>