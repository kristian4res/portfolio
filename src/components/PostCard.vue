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
})
</script>

<template>
  <Card class="w-[30rem] overflow-hidden flex-shrink-0 flex flex-col justify-between">
    <template #header>
      <!-- TODO: Use AI art or just unsplash? -->
      <img
        alt="primefaces usercard"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
      />
    </template>
    <template #title>{{ postTitle }}</template>
    <template #content>
      <p class="m-0">
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
