<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="profile-card">
    <h1 class="green">{{ title }}</h1>
    <h3>A DevSecOps software engineer, who's curious about all things tech and food.</h3>
    <div class="flex p-4 justify-evenly">
      <a href="https://www.linkedin.com/in/kristian4res/" target="_blank" rel="noopener"
        >LinkedIn</a
      >
      <a href="https://www.github.com/kristian4res/" target="_blank" rel="noopener">GitHub</a>
      <a
        href="https://a-developers-journal.hashnode.dev/?source=top_nav_blog_home"
        target="_blank"
        rel="noopener"
        >Blog</a
      >
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.profile-card > h1,
.profile-card > h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .profile-card > h1,
  .profile-card > h3 {
    text-align: left;
  }
}
</style>
