<script setup>
const props = defineProps({
    exp: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div  class="group mb-6 flex flex-col md:flex-row gap-1 md:gap-4 hover:!opacity-100 group-hover:[&:not(:hover)]:opacity-50 px-6 py-4 hover:outline-2 hover:bg-green-50 dark:hover:outline-1 dark:hover:bg-green-900/20 transition-all duration-300">
        <!-- Date (Left Column) -->
        <div class="text-xs md:w-[200px] font-semibold capitalize tracking-wide text-gray-500 dark:text-gray-400 pt-1">
            {{ exp.date }}
        </div>
        
        <!-- Content (Right Column) -->
        <div class="md:flex-1">
            <!-- Title & Company -->
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {{ exp.title }} {{ exp.company ? '·' : '' }} {{ exp.company }}
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
</template>