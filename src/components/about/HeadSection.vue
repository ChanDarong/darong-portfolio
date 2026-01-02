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
            'h-1/2 top-0 bg-green-400 dark:bg-green-900': isAnimated,
            'h-3/6 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-600': !isAnimated,
        }"
    >
        <h1 class="text-7xl font-bold text-center relative transition-all duration-500 delay-700 ease-in-out"
            :class="{
                'top-1/2 -translate-y-1/2': isAnimated,
                'top-20 opacity-0': !isAnimated,
            }"
        >
            About Me
        </h1>

        <div class="absolute w-full flex transition-bottom duration-500 delay-1200 ease-in-out"
            :class="{
                'opacity-100 bottom-0': isAnimated,
                'opacity-0 -bottom-10': !isAnimated,
            }"
        >
            <div
                v-for="i in 15" class="w-1/15 h-10"
                :key="i"
                :class="{
                    'bg-white inset-shadow-[5px_5px_0px]': !(i % 2),
                    'bg-green-400 dark:bg-black shadow-[5px_5px_0px]': i % 2
                }"
            >
            </div>
        </div>
    </div>
</template>
