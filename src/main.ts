import { createApp } from 'vue'
import './assets/css/index.scss'
import App from './App.vue'
import router from './router/index'
import piniaStore from './piniaStore'
import { Button, Icon } from 'vant'

createApp(App).use(router).use(piniaStore)
.use(Button)
.use(Icon)
.mount('#app')
