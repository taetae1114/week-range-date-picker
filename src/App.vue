<template>
  <div>
    <el-date-picker
        v-model="value1"
        type="daterange"
        format="YYYY年-MM月-ww周"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        
        @click="handleClick"
        @change="handleChange"
        @calendar-change="calendarChange"
        @input="$forceupdate()"
    >

    </el-date-picker>
    
    <button @click="changeDate">click</button>
  </div>
</template>
 
<script>
import { ref,watch } from 'vue'
import moment from 'moment'
import * as common from './common'
import dayjs from "dayjs"
// Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

export default {
  



 setup(){
  
  let value1 = ref('')
  // const value2 = ref('')

  value1[0]=new Date()
  //   value1[1]=new Date(value1[0] + 3600 * 1000 * 24 * 7)
  const calendarChange = (date)=>{
    console.log("calender change!!!!")
    console.log(date)
    // if(value1===''){
    //   console.log("value1 is empty")
    // }else {
    //   console.log("value1:",value1)
    // }
    value1[0]="Thu Sep 09 2022 00:00:00 GMT+0800 (中国标准时间)"
    console.log(value1[0])
  }


  const changeDate = ()=>{
    let myV =[]
    myV[0]=new Date("Thu Sep 09 2022 00:00:00 GMT+0800 (中国标准时间)")
    myV[1]=new Date("Thu Sep 26 2022 00:00:00 GMT+0800 (中国标准时间)")
    value1.value = [myV[0],myV[1]]
    console.log(value1)
  }

  const handleChange = ()=>{
    // console.log("handle Change")

    // // let newstart=new Date(value1[0])
    // // let newEnd = new Date(value1[1])
    // value1[0]=new Date()
    // value1[1]=new Date(value1[0] + 3600 * 1000 * 24 * 7)
    // console.log(value1)
    // // handleOpen()
  }

  

  const getWeek=(date)=>{
	// date = formatTimebytype(date, 'yyyy-MM-dd');//将日期转换成yyyy-mm-dd格式
	date = new Date(date);
	var date2 = new Date(date.getFullYear(), 0, 1);
  //从周日开始算：
	var day1 = date.getDay()+1;
	// if (day1 == 0) day1 = 7;
	var day2 = date2.getDay()+1;
	// if (day2 == 0) day2 = 7;
	let d = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000);
	//当周数大于52则为下一年的第一周
	if((Math.ceil(d / 7) + 1)>52){
		return (date.getFullYear()+1)+"第1周"
	}
	return date.getFullYear()+" 第"+(Math.ceil(d / 7) + 1)+"周";
}


  watch(value1.value,(newValue,oldValue)=>{
    console.log("WATCH:newValue1:",newValue,"oldValue1:",oldValue);
    // console.log("newValue1：",newValue[0])
    // let myNewDate = new Date(newValue[0])
    
    // myNewDate.setTime(myNewDate.getTime() - 3600 * 1000 * 24 * 7)
    // console.log("myNewDate:",myNewDate)
    // console.log("myGetWeek:",getWeek(new Date(newValue[0])))
    // console.log("newValueChange：",dayjs(newValue[0]-6*24*3600000))
    
    // console.log("newValue2：",newValue[1])
    if(newValue&&oldValue){
      console.log("快更新啊！")
    }
  },
    {
      deep:true,
      // immediate:true
    }
  )
  // watch(value1[0],(newValue,oldValue)=>{
  //   console.log("value1[0] changed!! new:",newValue,"oldvalue:",oldValue)
  // })
  

  return {
    value1,
    calendarChange,
    handleChange,
    changeDate
  }
 }
}
</script>
 
<style >
/* .el-picker-panel {
    background: #0f0472a9 !important;
    color: #ffffff;
    border: 1px solid #93bee7 !important;
    line-height: 20px;
  }
  .el-picker-panel .el-date-range-picker__time-header {
    border-bottom: 1px solid #93bee7 !important;
  }
  .el-picker-panel__icon-btn {
  width: 8px;
  height: 10px;
  color: #cbd3f0 !important;
}
.el-picker-panel .el-input__inner {
  background-color: #19466f;
  border: #75ebf2;
  color: #e8fdff;
}
.el-date-picker__header-label {
  color: #6ce6cb !important;
}
.el-date-picker__header-label:hover {
  color: #ffffff;
}
.el-date-table td.disabled div {
  background-color: #6891cfa8 !important;
}
.el-picker-panel .el-date-table th {
  color: #b49530;
}
.el-picker-panel .el-date-table td.available {
  font-size: 16px;
  font-weight: bold;
  color: #6ce6cb;
}
.el-picker-panel .el-date-table td.available:hover {
  color: #9b4646;
} */

</style>
