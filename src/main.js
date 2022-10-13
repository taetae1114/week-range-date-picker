import { createApp } from 'vue'

import ElementPlus from 'element-plus'  //引入插件
import 'element-plus/theme-chalk/index.css' //默认css样式
import zhCn from 'element-plus/es/locale/lang/zh-cn'   //引入中文�?
import App from './App.vue'
import WeekRange from './components/weekrange'

createApp(App).use(ElementPlus).use(WeekRange).mount('#app')
