<script setup>
import { ref } from 'vue'
import ExperienceCards from '../ui/ExperienceCards.vue';

const experiences = ref([
    {
        date: '2024 — Present',
        title: 'Laravel Developer',
        company: 'eOcambo Technology',
        description: 'Leading the development of web applications using Laravel framework. Overseeing project architecture, code quality, and mentoring inten and junior developers to ensure the delivery of robust and scalable solutions.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Laravel']
    },
    {
        date: 'February 2023 — 2024',
        title: 'Junior Laravel Developer',
        company: 'eOcambo Technology',
        description: 'Develop and maintain web applications using Laravel framework. Collaborate with cross-functional teams to deliver high-quality software solutions that meet client requirements.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Laravel']
    },
    {
        date: 'September 2022 — February 2023',
        title: 'Web Application Intern',
        company: 'eOcambo Technology',
        description: 'Learned and applied web development skills in a real-world environment. Assisted in developing features for client websites and internal tools.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Laravel']
    }
])

const education = ref([
    {
        date: '2021 — 2024',
        title: 'Bachelor of Computer Science',
        school: 'Build Bright University Siem Reap Campus',
        description: 'Focused on software engineering, web development, and database management. Graduated with honors.',
        // skills: ['Computer Science', 'Software Engineering', 'Web Development', 'Database']
    },
    {
        date: '2015 — 2021',
        title: 'High School Diploma',
        school: 'Puok High School',
        description: 'Completed high school with focus on mathematics and science subjects.',
        // skills: ['Mathematics', 'Physics', 'Chemistry']
    }
])
</script>

<template>
    <div class="px-6 sm:px-10 lg:px-16 pb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-5xl capitalize mb-12">Working Experience</h2>
        <div class="w-full flex justify-center">
            <div class="max-w-4xl">
                <!-- Experience Items -->
                <template v-for="(exp, index) in experiences" 
                    :key="index"
                >
                    <ExperienceCards :exp="exp" />
                </template>
            </div>
        </div>

        <!-- Education Section -->
        <h2 class="text-2xl sm:text-3xl lg:text-5xl capitalize mb-12 mt-20">Education</h2>
        <div class="w-full flex justify-center">
            <div class="max-w-4xl">
                <!-- Education Items -->
                <template v-for="(edu, index) in education" 
                    :key="index"
                >
                    <ExperienceCards :exp="edu" />
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any additional custom styles here if needed */
</style>