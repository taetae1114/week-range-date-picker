# week-range-demo
A date picker (week-range)  based on Elements-Plus

基于element-plus的周范围日期选择器 week-range

在线预览：[week-range-demo](https://taetae1114.github.io/week-range-demo/)

## 本项目启动：

```
npm i

npm run dev
```



## NPM安装使用：

### :sparkles:注意:sparkles:

`本插件基于element-plus开发，使用前需要确保已经安装element-plus依赖!`

`element-plus官方提供了日范围选择器和月范围选择器，没有提供周范围的选择器，于是开发了本插件。`

### :sparkles:Element-plus官方文档:sparkles:：

https://element-plus.gitee.io/zh-CN/component/date-picker.html#%E9%80%89%E6%8B%A9%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4

### :sparkles:如何使用:sparkles:：

```
npm i date-picker-week-range
```

#### :point_left:全局注册

###### :point_down:main.js：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'  //引入插件
import 'element-plus/theme-chalk/index.css' //默认css样式
import zhCn from 'element-plus/es/locale/lang/zh-cn'   //引入中文包，如果你需要的话
import App from './App.vue'

import weekRange from 'date-picker-week-range'

createApp(App).use(ElementPlus).use(weekRange).mount('#app')
```

###### :point_down:App.vue：

`通过< week-range >使用，通过v-model绑定周选择器选取的值`

`分隔符，两个日历选择器的默认显示文字以及shortcuts等都可以自定义传入。`

**注意**：必须引入样式：@import 'date-picker-week-range/style.css'

```vue
<template>
  <div>
    <week-range
      v-model="value"
      unlink-panels
      format="YYYY [Week] ww"
      range-separator="-"
      start-placeholder="Choose Start Week"
      end-placeholder="Choose End Week"
      :shortcuts="shortcuts"
    >
    </week-range>
    {{ value.toString() }}
  </div>
</template>
 
<script>
import { ref } from "vue";

export default {

  setup() {
    const value = ref("");

    const shortcuts = [
      {
        text: "Last week",
        value: () => {
          const end = new Date();
          const start = new Date();

          return [start, end];
        },
      },
      {
        text: "Last 3 weeks",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7 * 2);
          return [start, end];
        },
      },
      {
        text: "Last 6 weeks",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7 * 5);
          return [start, end];
        },
      },
    ];

    return {
      value,
      shortcuts,
    };
  },
};
</script>
 
<style>
@import "date-picker-week-range/style.css";
</style>
```



#### :point_left:局部注册

`组件内import{WeekRange}注册为组件使用`

```vue
<template>
  <week-range
    v-model="value"
    unlink-panels
    format="YYYY [Week] ww"
    range-separator="-"
    start-placeholder="Choose Start Week"
    end-placeholder="Choose End Week"
  >
  </week-range>
</template>

<script>
import { WeekRange } from "date-picker-week-range";
import { ref } from "vue";
export default {
  components: {
    WeekRange,
  },
  setup() {
    const value = ref("");

    return {
      value,
    };
  },
};
</script>

<style>
@import "date-picker-week-range/style.css";
</style>
```

