<script setup lang="ts">
import ExperienceSection from '@/components/about/ExperienceSection.vue';
import HeadSection from '@/components/about/HeadSection.vue';
import WhoIAmSection from '@/components/about/WhoIAmSection.vue';

</script>

<template>
  <div class="about">
    <div
      class="section bg-white dark:bg-black min-h-screen relative overflow-x-hidden transition-all duration-500 ease-in-out"
      :class="{
          // 'px-0': isAnimated,
          // 'px-6 sm:px-10 lg:px-15 xl:px-30': !isAnimated,
      }"
    >
      <HeadSection />

      <div class="container mx-auto">
        <WhoIAmSection />
  
        <ExperienceSection />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
