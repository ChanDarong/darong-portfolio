<script setup>
import { computed } from 'vue';


const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});

const classes = computed(() => {
  return `border border-gray-900 text-gray-900 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 focus-visible:outline-none ${props.class}`;
});

</script>

<template>
    <textarea :id="id" :name="name" rows="4" :required="required" :class="classes"></textarea>
</template>