import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from './piniaStore'

createApp(App).use(router).use(piniaStore)
.mount('#app')
