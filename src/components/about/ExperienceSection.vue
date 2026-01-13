<script setup>
import { ref } from 'vue'

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
                <div 
                    v-for="(exp, index) in experiences" 
                    :key="index" 
                    class="group mb-12 flex flex-col md:flex-row gap-1 md:gap-4 hover:!opacity-100 group-hover:[&:not(:hover)]:opacity-50 transition-all duration-300"
                >
                    <!-- Date (Left Column) -->
                    <div class="text-xs md:w-[200px] font-semibold capitalize tracking-wide text-gray-500 dark:text-gray-400 pt-1">
                        {{ exp.date }}
                    </div>
                    
                    <!-- Content (Right Column) -->
                    <div class="md:flex-1">
                        <!-- Title & Company -->
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {{ exp.title }} · {{ exp.company }}
                        </h3>
                        
                        <!-- Description -->
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {{ exp.description }}
                        </p>
                        
                        <!-- Skills/Technologies -->
                        <div class="flex flex-wrap gap-2">
                            <span 
                                v-for="(skill, skillIndex) in exp.skills" 
                                :key="skillIndex"
                                class="px-3 py-1 text-xs font-medium bg-emerald-400/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Education Section -->
        <h2 class="text-2xl sm:text-3xl lg:text-5xl capitalize mb-12 mt-20">Education</h2>
        <div class="w-full flex justify-center">
            <div class="max-w-4xl">
                <!-- Education Items -->
                <div 
                    v-for="(edu, index) in education" 
                    :key="index" 
                    class="group mb-12 flex flex-col md:flex-row gap-1 md:gap-4 hover:!opacity-100 group-hover:[&:not(:hover)]:opacity-50 transition-all duration-300"
                >
                    <!-- Date (Left Column) -->
                    <div class="text-xs md:w-[200px] font-semibold capitalize tracking-wide text-gray-500 dark:text-gray-400 pt-1">
                        {{ edu.date }}
                    </div>
                    
                    <!-- Content (Right Column) -->
                    <div class="md:flex-1">
                        <!-- Title & School -->
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {{ edu.title }} · {{ edu.school }}
                        </h3>
                        
                        <!-- Description -->
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {{ edu.description }}
                        </p>
                        
                        <!-- Skills/Subjects -->
                        <div class="flex flex-wrap gap-2">
                            <span 
                                v-for="(skill, skillIndex) in edu.skills" 
                                :key="skillIndex"
                                class="px-3 py-1 text-xs font-medium bg-emerald-400/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 rounded-full"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any additional custom styles here if needed */
</style>