<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from 'primevue'

defineProps<{
  title: string
}>()
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode-primevue')
  } else {
    document.body.classList.remove('dark-mode-primevue')
  }
}
</script>

<template>
  <div class=".dark flex flex-col justify-center gap-6">
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="w-full font-bold text-4xl text-center lg:text-left">{{ title }}</h1>
      <h3 class="w-full text-lg break-words text-center lg:text-left">
        A DevSecOps software engineer, who's curious about all things related to tech 👨‍💻.
      </h3>
    </div>
    <!-- TODO: Toggle theme -->
    <div class="flex justify-end items-center w-full">
      <div class="card flex justify-center">
        <ToggleSwitch v-model="isDarkMode" @change="toggleDarkMode">
          <template #handle="{ checked: isDarkMode }">
            <i :class="['!text-lg pi', { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }]" />
          </template>
        </ToggleSwitch>
      </div>
    </div>
  </div>
</template>
