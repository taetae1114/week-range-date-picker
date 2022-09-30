<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="daterange"
      format="YYYY年-ww周(MM月)"
      :range-separator=separator
      :start-placeholder=startPlaceholder
      :end-placeholder=endPlaceholder
      @change="handleChange"
      @calendar-change="calendarChange"
      @input="$forceupdate()"
    >
      <template #default="cell">
        <div
          class="cell"
          :class="{
            inrange: isInRange(cell) && !isEnded(cell) && !isStarted(cell),
            ended: isEnded(cell),
            started: isStarted(cell),
          }"
          @click="cellClick(cell, cell.column, cell.row)"
        >
          <span class="text" :class="{ today: isToday(cell) }">{{
            cell.text
          }}</span>
        </div>
      </template>
    </el-date-picker>

    
  </div>
</template>
 
<script>
import { ref, watch } from "vue";
import dayjs from "dayjs";
// Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

export default {
  props:{
    separator:{
      type:String
    },
    startPlaceholder:{
      type:String
    },
    endPlaceholder:{
      type:String
    },
  },
  setup(props) {
    let value1 = ref("");

    // 获取一下今天的日期：
    const Today = dayjs(new Date()).format("YYYY/MM/DD");
    // console.log(Today)

    //存放选择的日期的dayjs对象 Cell对象
    let startDayjs, endDayjs;
    let startCell, endCell;

    //用来辨识点击的是起始日期还是结束日期
    let clicked = false;
    const separator=props.separator||"To"
    const startPlaceholder=props.startPlaceholder||"start week"
    const endPlaceholder=props.endPlaceholder||"end week"
    console.log("start place:",startPlaceholder)
    // console.log("my separator:",separator)

    watch(
      value1.value,
      (newValue, oldValue) => {
        // console.log("WATCH:newValue1:",newValue,"oldValue1:",oldValue);
      },
      {
        deep: true,
        // immediate:true
      }
    );

    //用插槽重写后原本显示当天的那个样式没了，这里手动补一下：
    const isToday = (cell) => {
      let format = "YYYY/MM/DD";
      return cell.dayjs.format(format) === Today;
    };

    //修改一下起始和结束周的月份，用周日所在的月份作为起始、结束月份展示
    const handleChange = () => {
      // console.log("change!!!!")
      let startCol = startCell.column;
      let startDay = startDayjs.$D;

      let endCol = endCell.column;
      let endDay = endDayjs.$D;

      let newStartDayjs = value1.value[0];
      let newEndDayjs = value1.value[1];

      if (startCol !== 0 && startCol >= startDay) {
        // console.log("需要更改月份")
        newStartDayjs = dayjs(value1.value[0] - startCol * 24 * 3600 * 1000);
      }
      if (endCol !== 0 && endCol >= endDay) {
        newEndDayjs = dayjs(value1.value[1] - endCol * 24 * 3600 * 1000);
      }

      value1.value = [new Date(newStartDayjs), new Date(newEndDayjs)];
    };

    //获取周数，用来判断是否是同一周
    const getWeek = (date) => {
      date = new Date(date);
      var date2 = new Date(date.getFullYear(), 0, 1);
      //从周日开始算：
      var day1 = date.getDay() + 1;
      // if (day1 == 0) day1 = 7;
      var day2 = date2.getDay() + 1;
      // if (day2 == 0) day2 = 7;
      let d = Math.round(
        (date.getTime() -
          date2.getTime() +
          (day2 - day1) * (24 * 60 * 60 * 1000)) /
          86400000
      );
      //当周数大于52则为下一年的第一周
      if (Math.ceil(d / 7) + 1 > 52) {
        return date.getFullYear() + 1 + "第1周";
      }
      return date.getFullYear() + " 第" + (Math.ceil(d / 7) + 1) + "周";
    };

    //判断两个日期是否属于同一周
    const isSameWeek = (date1, date2) => {
      if (getWeek(date1) === getWeek(date2)) {
        return true;
      } else {
        return false;
      }
    };

    //判断是否是起始日期？
    const isStarted = (cell) => {
      if (
        isSameWeek(cell.dayjs, startDayjs) &&
        cell.column === 0 &&
        startDayjs < endDayjs
      ) {
        return true;
      } else if (
        isSameWeek(cell.dayjs, endDayjs) &&
        cell.column === 0 &&
        startDayjs >= endDayjs
      ) {
        return true;
      } else {
        return false;
      }
    };

    //判断是否是终点日期？
    const isEnded = (cell) => {
      if (
        isSameWeek(cell.dayjs, endDayjs) &&
        cell.column === 6 &&
        startDayjs < endDayjs &&
        endDayjs !== null
      ) {
        return true;
      } else if (
        isSameWeek(cell.dayjs, startDayjs) &&
        cell.column === 6 &&
        endDayjs !== null &&
        startDayjs >= endDayjs
      ) {
        return true;
      } else {
        return false;
      }
    };
    //是否处于所选时间点区间内
    const isInRange = (cell) => {
      if (
        isSameWeek(cell.dayjs, endDayjs) ||
        isSameWeek(cell.dayjs, startDayjs) ||
        cell.inRange === true
      ) {
        return true;
      } else {
        return false;
      }
    };

    const cellClick = (el, column, row) => {
      if (clicked === false) {
        startDayjs = el.dayjs;
        startCell = el;
        endDayjs = null;
      }
      if (clicked) {
        endDayjs = el.dayjs;
        endCell = el;
      }
      clicked = !clicked;
    };

    return {
      value1,
      separator,
      startPlaceholder,
      endPlaceholder,
      handleChange,
      isToday,
      cellClick,
      isEnded,
      isStarted,
      isInRange,
    };
  },
};
</script>
 
<style scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.started {
  background: #f2f6fc;
  border-radius: 50px 0 0 50px;
  margin-left: 5px;
  color: #fff;
}
.cell.ended {
  background: #f2f6fc;
  border-radius: 0 50px 50px 0;
  margin-right: 5px;
  color: #fff;
}
.cell.inrange {
  background: #f2f6fc;

  color: #606266;
}
.cell.ended .text {
  background: #409eff;

  color: #fff;
}
.cell.started .text {
  background: #409eff;

  color: #fff;
}
.today {
  color: #409eff;
}
</style>
