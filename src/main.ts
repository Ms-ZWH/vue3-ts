import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 自定义样式
import "@/assets/styles/main.scss";

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

