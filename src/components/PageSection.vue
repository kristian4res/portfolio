<script setup lang="ts">
import { defineProps } from 'vue'
import { Divider } from 'primevue'

defineProps({
  heading: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="flex-col flex flex-wrap">
    <h1 class="font-bold text-2xl mb-4">{{ heading }}</h1>
    <div class="text-lg sm:text-wrap">
      <slot></slot>
    </div>
    <Divider />
  </section>
</template>
