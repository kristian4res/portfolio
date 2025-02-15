<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center mx-auto px-4 h-screen w-screen">
    <header class="flex flex-col justify-center items-center max-w-screen-sm md:flex-row">
      <!-- TODO: Add my LinkedIn profile picture -->
      <img
        alt="Vue logo"
        class="block mx-auto mb-8 lg:mb-0 lg:mr-4"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <div class="flex flex-col items-center lg:flex-row lg:items-start lg:flex-wrap">
        <ProfileCard title="Kristian Torres" />
        <nav class="w-full text-center mt-8 lg:text-left lg:ml-[-1rem] lg:mt-4">
          <RouterLink to="/" class="inline-block px-4 py-2 border-l border-gray-300 first:border-0"
            >Home</RouterLink
          >
          <RouterLink to="/projects" class="inline-block px-4 py-2 border-l border-gray-300"
            >Projects</RouterLink
          >
        </nav>
      </div>
    </header>
    <main
      class="flex flex-col gap-8 px-4 my-2 mb-6 h-screen max-w-screen-sm overflow-y-auto sm:px-2"
    >
      <RouterView />
    </main>
  </div>
</template>
