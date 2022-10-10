
import WeekRange from './DatePickerWeekRange.vue'

export default {
  install:(app,options) => {
    console.log("date-picker-week-range插件已安装 ❤ ")
    app.component('week-range',WeekRange)
  }
}


