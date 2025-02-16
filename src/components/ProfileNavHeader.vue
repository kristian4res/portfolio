<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <header class="flex flex-col justify-center items-center max-w-screen-sm mt-12 mb-2 md:flex-row">
    <img
      alt="Profile picture of Kristian Torres"
      class="block rounded-full object-cover mb-8 lg:mb-0 lg:mr-4"
      src="@/assets/profile-pic.jpeg"
      width="200"
      height="200"
    />
    <div class="flex flex-col items-center lg:flex-row lg:items-start lg:flex-wrap">
      <ProfileCard title="Kristian Torres">
        <p>A software engineer, who's curious about all things related to tech 👨‍💻.</p>
      </ProfileCard>
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
</template>
