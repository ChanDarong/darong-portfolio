<script setup>
import { ref, onMounted } from 'vue';

const isAnimated = ref(false);

onMounted(() => {
    // Trigger animation after component is mounted
    setTimeout(() => {
        isAnimated.value = true;
    }, 50);
});

</script>

<template>
    <div class="absolute w-full z-0 transition-all duration-700 delay-500 ease-in-out"
        :class="{
            'h-[50vh] top-0 bg-green-400 dark:bg-green-900 shadow-[3px_3px_0px_rgba(0,0,0)] dark:shadow-[3px_3px_0px_rgba(255,255,255)]': isAnimated,
            'top-[50vh] -translate-y-1/2 bg-gray-200 dark:bg-gray-600': !isAnimated,
        }"
    >
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-center relative transition-all duration-500 delay-700 ease-in-out"
            :class="{
                'top-1/2 -translate-y-1/2': isAnimated,
                'top-20 opacity-0': !isAnimated,
            }"
        >
            About Me
        </h1>
    </div>
</template>
