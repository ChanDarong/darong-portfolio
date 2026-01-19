<script setup>
import { ref, onMounted } from 'vue';
import AboutHeading from '../ui/AboutHeading.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isAnimated = ref(false);

onMounted(() => {
    // Trigger animation after component is mounted
    setTimeout(() => {
        isAnimated.value = true;
    }, 50);
});
</script>

<template>
    <div class="mt-[55vh] sm:mt-[56vh] lg:mt-[60vh] px-6 sm:px-10 lg:px-16 pb-16 transition-all duration-700 delay-900 ease-in-out"
        :class="{
            'opacity-100': isAnimated,
            'opacity-0': !isAnimated,
        }"
    >
        <AboutHeading class="uppercase">{{ $t('aboutPage.whoIAm.title') }}</AboutHeading>
        <div class="relative z-10 flex flex-col md:flex-row w-full">
            <div class="w-full md:w-1/2">
                <div class="my-3 md:my-10 max-md:mb-5">
                    <p class="mb-3">
                        {{ $t('aboutPage.whoIAm.intro') }}
                    </p>
                    <p class="mb-3">
                        {{ $t('aboutPage.whoIAm.current') }}
                    </p>
                </div>
            </div>
            <div class="w-full md:w-1/2 text-lg leading-relaxed">
                <div class="w-2/3 mx-auto">
                    <div class="outline-1 dark:outline-2 dark:outline-black shadow-[5px_5px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_#00D492] bg-emerald-200">
                        <div class="grayscale-90 contrast-90 mix-blend-multiply hover:grayscale-0 hover:contrast-100 hover:mix-blend-normal transition-all duration-500">
                            <img src="../../assets/myimage.png" alt="My Photo" class="w-full h-auto">
                        </div>
                    </div>
                    <p class="text-gray-500 mt-3 text-sm">
                        <i>{{ $t('aboutPage.whoIAm.imageCaption') }}</i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>