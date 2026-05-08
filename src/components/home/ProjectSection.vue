<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import Input from '../ui/form/Input.vue';
import TextArea from '../ui/form/TextArea.vue';
import ProjectSlider from '../ui/ProjectSlider.vue';

const props = defineProps({
    isPageLoaded: {
        type: Boolean,
        default: false
    },
    sectionAnimations: {
        type: Array,
        default: () => []
    },
    isInitialLoad: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <section
        class="section bg-white dark:bg-black min-h-screen flex items-center justify-start px-6 sm:px-10 lg:px-15 xl:px-30 relative py-20 lg:py-0">
        <div class="flex w-full flex-col md:flex-row max-md:mt-15">
            <div class="w-1/1 xl:w-1/3 flex items-center z-10">
                <div class="h-fit">
                    <div class="tracking-[0.15em] sm:tracking-[0.3em] lg:tracking-[0.5em] transition-all duration-700 delay-300"
                        :class="{
                            'opacity-100 translate-x-0': sectionAnimations[2].active,
                            'opacity-0 -translate-x-32': !sectionAnimations[2].active
                        }">
                        <!-- <h1 class="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">Who am I?</h1> -->
                        <h2
                            class="text-2xl sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest dark:text-white">
                            Projects</h2>
                    </div>

                    <!-- Separator Lines -->
                    <div class="separate-line my-3 transition-all duration-700 delay-500" :class="{
                        'opacity-100 translate-x-0': sectionAnimations[2].active,
                        'opacity-0 -translate-x-16': !sectionAnimations[2].active
                    }">
                        <div class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white">
                        </div>
                        <div
                            class="separate-line mt-3 mb-3 sm:mt-5 sm:mb-5 w-20 sm:w-20 h-1 bg-black dark:bg-white relative left-8 sm:left-15">
                        </div>
                    </div>

                    <div class="mb-3 lg:mb-8 transition-all duration-700" :class="{
                        'opacity-100 translate-y-0 delay-500': sectionAnimations[2].active,
                        'opacity-0 translate-y-16': !sectionAnimations[2].active
                    }">
                        <p class="mb-3 lg:mb-5">Some of my featured projects</p>
                    </div>
                </div>
            </div>

            <div class="w-1/1 xl:w-2/3">
                <ProjectSlider />
            </div>
        </div>
    </section>
</template>
