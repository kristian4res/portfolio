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
  <section class="flex-col flex">
    <h1 class="font-bold text-2xl">{{ heading }}</h1>
    <Divider />
    <div class="text-lg">
      <slot></slot>
    </div>
  </section>
</template>
