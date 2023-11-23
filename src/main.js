import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
