<template>
  <div>
    <week-range v-model="value" @getValue="getValue"   :separator="separator" :startPlaceHolder="'Choose Start Week'">
      
    </week-range>

    
  </div>
</template>
 
<script>

import { ref } from "vue";

export default {
  
 setup(){
  const value=ref('')
  const separator="To"

  // console.log(value)

  const getValue = (datevalue) => {
    // console.log("value:",datevalue)
    const value=datevalue
    // console.log(value.value[0])
    // console.log(value.value[1])

  }

  return{
    separator,
    value,
    getValue
  }
 }
}
</script>
 
<style >
/* .el-date-table tr:hover {
  background: #0e489f;
} */
/* #f2f6fc */
</style>