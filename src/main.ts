/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// AppInsights
import { trackPageView } from '@/lib/track'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { awaitInitialization } from './lib'

awaitInitialization(20000).then(async () => {
  trackPageView();
  console.log("Initialization ready with config", (window as any).AppConfig);
  const {registerPlugins} = await import('@/plugins')
  
  const app = createApp(App)
  registerPlugins(app)

  app.mount('#app')
})
