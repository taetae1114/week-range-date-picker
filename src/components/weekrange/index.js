// import MyBanner from "@/plugins/components/MyBanner";

// export default {
//     install: (app, options) => {
//         console.log("我的第一个插件")
//         app.component('my-banner', MyBanner);
//     }
// };
import WeekRange from './DatePickerWeekRange.vue'

export default {
  install:(app,options) => {
    console.log("这是一个插件")
    app.component('week-range',WeekRange)
  }
}


