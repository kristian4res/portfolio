<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="profile-card">
    <h1 class="green">{{ title }}</h1>
    <h3 class="break-words">
      A DevSecOps software engineer, who's curious about all things related to tech 👨‍💻, foods 🍕 and
      pets 🐶.
    </h3>
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
