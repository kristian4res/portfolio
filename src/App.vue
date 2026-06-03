<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileNavHeader from '@/components/ProfileNavHeader.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <ProfileNavHeader />
    <main
      class="flex flex-col gap-8 px-4 my-2 mb-6 h-screen max-w-screen-sm w-full overflow-y-auto"
    >
      <RouterView />
    </main>
  </div>
</template>
