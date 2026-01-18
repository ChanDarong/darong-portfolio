<script setup>
    defineProps({
        class: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl capitalize mb-6 md:mb-12"
        :class="class"
    >
        <slot></slot>
    </h2>
</template>
