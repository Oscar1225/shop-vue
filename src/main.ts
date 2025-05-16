import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.use(createPinia())

app.mount('#app')
