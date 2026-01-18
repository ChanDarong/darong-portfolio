<script setup>
import { ref } from 'vue'
import AboutHeading from '../ui/AboutHeading.vue';
import { Icon } from '@iconify/vue';

const skills = ref([
    {
        name: 'Laravel',
        icon: 'logos:laravel',
    },
    {
        name: 'jQuery',
        icon: 'logos:jquery',
    },
    {
        name: 'Vue.js',
        icon: 'logos:vue',
    },
    {
        name: 'Bootstrap',
        icon: 'logos:bootstrap',
    },
    {
        name: 'Tailwind CSS',
        icon: 'logos:tailwindcss-icon',
    },
    {
        name: 'MySQL',
        icon: 'logos:mysql',
    },
    {
        name: 'Git',
        icon: 'logos:git-icon',
    },
    {
        name: 'DigitalOcean',
        icon: 'logos:digital-ocean-icon',
    }
])
</script>

<template>
    <div class="px-6 sm:px-10 lg:px-16 pb-16">
        <AboutHeading>Skills</AboutHeading>
        <p class="mb-5">Here are a few technologies I've been working with recently</p>
        
        <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div 
                v-for="(skill, index) in skills" 
                :key="index"
                class="flex flex-col items-center justify-center p-4 dark:bg-gray-700/70 rounded-lg transition-shadow duration-300"
            >
                <Icon :icon="skill.icon" class="text-4xl mb-2 text-emerald-600 dark:text-emerald-400" />
                <span class="text-sm font-medium text-center">{{ skill.name }}</span>
            </div>
        </div>

        
    </div>
</template>

<style scoped>
/* Add any additional custom styles here if needed */
</style>