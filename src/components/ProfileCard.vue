<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class=".dark flex flex-col justify-center gap-6">
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="w-full font-bold text-4xl text-center lg:text-left">{{ title }}</h1>
      <h3 class="w-full text-lg break-words text-center lg:text-left">
        A DevSecOps software engineer, who's curious about all things related to tech 👨‍💻.
      </h3>
    </div>
  </div>
</template>
