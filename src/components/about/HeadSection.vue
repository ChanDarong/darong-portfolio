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
        <div class="h-[50vh] absolute w-full z-0 transition-all duration-700 delay-700 ease-in-out overflow-hidden"
            :class="{
                'top-0 bg-emerald-400 dark:bg-emerald-600 border-[4px] border-[solid] border-[#000] [box-shadow:8px_8px_0px_rgba(0,_0,_0,_0.3)] dark:[box-shadow:8px_8px_0px_#ffffff42]': isAnimated,
                'top-[50vh] -translate-y-1/2 bg-gray-200 dark:bg-gray-600 border-none shadow-none': !isAnimated,
            }"
        >
            <!-- Retro stripes background -->
            <div class="retro-stripes duration-700 delay-1400 ease-in-out absolute"
                :class="{
                    'opacity-100': isAnimated,
                    'opacity-0': !isAnimated,
                }"
            ></div>
            
            <div class="top-1/2 -translate-y-1/2 text-sm sm:text-base lg:text-lg leading-relaxed overflow-y-hidden relative z-10">
                <h1 class="retro-text text-5xl md:text-6xl lg:text-7xl font-bold text-center relative transition-all duration-700 delay-1000 ease-in-out uppercase tracking-wider"
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

<style scoped>

.retro-stripes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 20px,
        rgba(0, 0, 0, 0.05) 20px,
        rgba(0, 0, 0, 0.05) 40px
    );
    pointer-events: none;
}

.retro-text {
    color: #fff;
    text-shadow: 
        3px 3px 0px #000,
        6px 6px 0px rgba(0, 0, 0, 0.3),
        1px 1px 0px #10b981,
        2px 2px 0px #10b981;
    transform: skew(-2deg);
    filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
}
</style>
