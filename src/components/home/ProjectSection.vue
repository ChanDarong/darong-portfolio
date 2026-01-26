<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import Input from '../ui/form/Input.vue';
import TextArea from '../ui/form/TextArea.vue';
import { projects } from '@/data/project';

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

const featuredProject = projects.filter(project => project.is_featured);

</script>

<template>
  <section class="section bg-white dark:bg-black min-h-screen flex items-center justify-start px-6 sm:px-10 lg:px-15 xl:px-30 relative">
    <div class="flex w-full flex-col md:flex-row max-md:mt-15">
      <div>
        <div v-for="project in featuredProject" :key="project.id">
          <div class="flex flex-row">
            <!-- Project image -->
            <div class="w-1/2">
              <img :src="project.image" :alt="project.title" class="rounded-lg shadow-lg" />
            </div>
            <!-- Project details -->
            <div class="w-1/2 pl-6 text-right flex flex-col justify-center">
              <div class="">
                <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div>
                  <ul class="mt-4 flex justify-end flex-wrap">
                    <li v-for="technology in project.technologies" :key="technology">
                      <span class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 mr-2 mb-2">{{ technology }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
