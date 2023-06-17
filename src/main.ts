/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
// import { registerPlugins } from '@/plugins'
import { awaitInitialization } from './lib'

// const qry = new URLSearchParams(window.location.search);
// // if the path is constructed by the 404.html page, redirect to the correct path
// if (qry.has('p') && qry.get('p')?.startsWith('/')) {
//   const url = new URL(`.${qry.get('p')}`, window.location.href);
//   console.log("Redirecting to", url.href);
//   window.location.href = url.href;
// } else {
  // the path is the target path, so we can start the app
  awaitInitialization(20000).then(async () => {
    console.log("Initialization ready with config", (window as any).AppConfig);
    const {registerPlugins} = await import('@/plugins')
    
    const app = createApp(App)
    registerPlugins(app)
  
    app.mount('#app')
  })
// }
