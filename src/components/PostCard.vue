<script setup lang="ts">
import { defineProps } from 'vue'
import { Card } from 'primevue'
import { Button } from 'primevue'

defineProps({
  postTitle: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  coverImageAlt: {
    type: String,
    default: 'A Japanese shiba inu dog',
  },
})
</script>

<template>
  <Card class="w-[30rem] overflow-hidden flex-shrink-0 flex flex-col justify-between">
    <template #header>
      <img class="w-full max-h-[18rem] object-cover" :alt="coverImageAlt" :src="coverImage" />
    </template>
    <template #title>{{ postTitle }}</template>
    <template #content>
      <p class="m-0 text-wrap">
        <slot></slot>
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          as="a"
          label="Find out more"
          class="w-full"
          :href="buttonLink"
          target="_blank"
          rel="noopener"
        />
      </div>
    </template>
  </Card>
</template>
