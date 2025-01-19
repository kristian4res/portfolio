<script setup lang="ts">
import { Card, Button } from 'primevue'

defineProps<{
  postTitle: string
  postContent: string
  buttonLink: string
}>()
</script>

<template>
  <Card class="w-[30rem] overflow-hidden flex-shrink-0">
    <template #header>
      <img
        alt="primefaces usercard"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
      />
    </template>
    <template #title>{{ postTitle }}</template>
    <template #content>
      <p class="m-0">
        {{ postContent }}
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
