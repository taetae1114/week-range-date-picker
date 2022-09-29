import { createApp } from 'vue'
// import './style.css'

import ElementPlus from 'element-plus'  //引入插件
import 'element-plus/theme-chalk/index.css' //默认css样式
import zhCn from 'element-plus/es/locale/lang/zh-cn'   //引入中文包
import App from './App.vue'
// import App from './components/Week.vue'

createApp(App).use(ElementPlus,{locale:zhCn}).mount('#app')
