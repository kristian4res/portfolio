import './assets/main.css'

import PrimeVue from 'primevue/config'
import Material from '@primevue/themes/material'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Material,
  },
})
app.use(createPinia())
app.use(router)
app.mount('#app')
