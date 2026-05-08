<script setup>
import { ref } from 'vue';
import { projects } from '@/data/project';
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCreative } from 'swiper/modules'

const modules = [Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCreative]


const paginationOptions = {
    el: '.custom-pagination',
    clickable: true,
};

const featuredProject = projects.filter(project => project.is_featured);
</script>

<template>
    <!-- :autoplay="{ delay: 3000 }" -->
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="paginationOptions"
        :autoplay="{ delay: 3000 }"
        :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
        }"
        
        effect="coverflow"

        class="flex gap-3 w-full overflow-x-hidden mt-10"
    >
        <SwiperSlide v-for="project in featuredProject" :key="project.id" class="shrink-0 w-full mb-10">
            <div class="relative">
                <!-- Project image -->
                <div class="w-4/6 outline-1 dark:outline-2 dark:outline-black shadow-[5px_5px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_#00D492] bg-emerald-200">
                    <div class="grayscale-90 contrast-90 mix-blend-multiply hover:grayscale-0 hover:contrast-100 hover:mix-blend-normal transition-all duration-500">
                        <img :src="project.image" :alt="project.title" class="border-2" />
                    </div>
                </div>
                <!-- Project details -->
                <div class="max-w-5/6 w-5/6 lg:w-4/6 pl-6 text-right flex flex-col justify-center absolute right-0 bottom-1/6">
                    <div class="px-6 py-4 bg-white dark:bg-gray-900 shadow-lg border">
                        <h3 class="text-2xl font-bold mb-2 text-emerald-600">{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div>
                            <ul class="mt-4 flex justify-end flex-wrap">
                                <li v-for="technology in project.technologies" :key="technology"
                                    class="ml-2">
                                    <span
                                        class="px-3 py-1 text-xs font-medium bg-gray-400/10 dark:bg-emerald-400/10 text-gray-600 dark:text-emerald-400 border border-gray-emerald-300">{{
                                        technology }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
    <!-- Custom Buttons -->
    <div class="w-4/6 flex gap-2">
        <button class="custom-prev px-4 py-2 border-2 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">←</button>
        <button class="custom-next px-4 py-2 border-2 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">→</button>
        <div class="flex-1 flex justify-end align-center">
            <div class="custom-pagination">

            </div>
        </div>
    </div>

</template>

<style scoped>

.custom-pagination {
    display: flex;
    justify-content: end;
    align-items: center;
}
.custom-pagination :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    border: 1px solid #000;
    background: transparent;
    border-radius: unset;
    opacity: 1;
}
.custom-pagination :deep(.swiper-pagination-bullet-active) {
    border: 1px solid #000;
    background: #000;
}

.dark .custom-pagination :deep(.swiper-pagination-bullet) {
    border: 1px solid #fff;
}
.dark .custom-pagination :deep(.swiper-pagination-bullet-active) {
    border: 1px solid #fff;
    background: #fff;
}


</style>