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
    <div class="mt-[65vh] px-6 sm:px-10 lg:px-16 pb-16 transition-all duration-700 delay-900 ease-in-out"
        :class="{
            'opacity-100': isAnimated,
            'opacity-0': !isAnimated,
        }"
    >
        <h2 class="text-5xl uppercase">Who I Am</h2>
        <div class="relative z-10 flex flex-row w-full">
            <div class="w-1/2">
                <div class="my-10">
                    <p class="mb-3">
                        Hello! My name is CHAN Darong, I was born on 26 September 2002.
                    </p>
                    <p class="mb-3">
                        I'm a web developer specializing in Laravel. I build websites, systems, and APIs with a focus on functionality, structure, and maintainability. I comfortable working with backend systems and database structures, with a strong focus on delivering reliable and efficient code. I enjoy solving complex problems and continuously improving existing systems.
                    </p>
                    <p class="mb-3">
                        Currently, I'm working full-time as a Laravel developer in Siem Reap, Cambodia. I contribute to the creation and maintenance of web applications, ensuring they meet high standards of performance and reliability.
                    </p>
                </div>
            </div>
            <div class="w-1/2 text-lg leading-relaxed">
                <div class="w-2/3 mx-auto">
                    <div class="outline-1 outline-offset-6 outline-dashed outline-gray-400">
                        <img src="../../../public/images/myimage.png" alt="My Photo" class="w-full h-auto">
                    </div>
                    <p class="text-gray-500 mt-3 text-sm max-md:hidden">
                        <i>This photo is taken at BBU graduation ceremony, 09 Feb 2025</i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>