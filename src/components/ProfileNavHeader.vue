<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <header class="flex flex-col justify-center items-center max-w-screen-sm mt-12 mb-2 md:flex-row">
    <!-- <img
      alt="Profile picture of Kristian Torres"
      class="block rounded-full object-cover mb-8 lg:mb-0 lg:mr-4"
      src="@/assets/profile-pic.jpg"
      width="200"
      height="200"
    /> -->
    <div class="flex flex-col items-center lg:flex-row lg:items-start lg:flex-wrap">
      <ProfileCard title="Kristian Torres">
        <p>
          <b>Software engineer. Problem solver. Always learning.</b><br />
          I build full-stack applications, work with cloud infrastructure, apply DevSecOps
          principles, and genuinely enjoy the process.
        </p>
      </ProfileCard>
    </div>
  </header>
</template>
