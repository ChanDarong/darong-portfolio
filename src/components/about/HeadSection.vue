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
    <div class="transition-all duration-700 ease-in-out"
        :class="{
            'px-0': isAnimated,
            'px-6 sm:px-10 lg:px-15 xl:px-30': !isAnimated,
        }"
    >
        <div class="h-[50vh] absolute w-full z-0 transition-all duration-700 delay-700 ease-in-out"
            :class="{
                'top-0 bg-green-400 dark:bg-green-900 shadow-[3px_3px_0px_rgba(0,0,0)] dark:shadow-[3px_3px_0px_rgba(255,255,255)]': isAnimated,
                'top-[50vh] -translate-y-1/2 bg-gray-200 dark:bg-gray-600': !isAnimated,
            }"
        >
            <div class="top-1/2 -translate-y-1/2 text-sm sm:text-base lg:text-lg leading-relaxed text-black dark:text-white overflow-y-hidden relative">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-center relative transition-all duration-700 delay-1000 ease-in-out"
                    :class="{
                        'translate-y-0': isAnimated,
                        'translate-y-30': !isAnimated,
                    }"
                >
                    About Me
                </h1>
            </div>
            
        </div>
    </div>
</template>
