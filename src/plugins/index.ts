/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import type { App } from 'vue'
import vuetify from './vuetify'
import router from '../router'
import { createPinia } from 'pinia'
import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import VueApexCharts from 'vue3-apexcharts'

export function registerPlugins(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(router).use(pinia)
  app.use(DataLoaderPlugin, { router })
  app.use(vuetify)
  app.use(PrimeVue, { unstyled: true })
  app.use(ToastService)
  app.use(ConfirmationService)
  app.use(VueApexCharts)
}

export { ConfirmationService as default }
