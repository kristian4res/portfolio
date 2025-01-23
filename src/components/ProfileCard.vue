<script setup lang="ts">
import { ref } from 'vue'
import ToggleButton from 'primevue/togglebutton'

defineProps<{
  title: string
}>()
const checked = ref(false)
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="profile-card flex flex-col items-center gap-4">
      <h1 class="green">{{ title }}</h1>
      <h3 class="break-words">
        A DevSecOps software engineer, who's curious about all things related to tech 👨‍💻, foods 🍕
        and pets 🐶.
      </h3>
    </div>
    <!-- TODO: Toggle theme -->
    <div class="flex justify-end items-center w-full">
      <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
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
