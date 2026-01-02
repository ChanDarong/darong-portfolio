<script setup lang="ts">
import HeadSection from '@/components/about/HeadSection.vue';

</script>

<template>
  <div class="about">
    <section
      class="section bg-white dark:bg-black min-h-screen relative overflow-x-hidden transition-all duration-500 ease-in-out"
      :class="{
          // 'px-0': isAnimated,
          // 'px-6 sm:px-10 lg:px-15 xl:px-30': !isAnimated,
      }"
    >
      <HeadSection />
      <div class="relative z-10 flex flex-row mt-[65vh] px-6 sm:px-10 lg:px-16 pb-16 w-full">
        <div class="w-1/2">
          <h2 class="text-3xl uppercase">Who I Am</h2>
        </div>
        <div class="w-1/2 text-lg leading-relaxed">
          <p class="mb-3">
            Hello, I'm Darong, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless user experiences that are both functional and visually appealing.
          </p>
          <p>
            I'm 24 years old and currently based in Siem Reap, Cambodia.
          </p>
        </div>
      </div>
    </section>
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
