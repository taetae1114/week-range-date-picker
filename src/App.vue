<template>
  <div>
    <date-picker-week-range :separator="separator" :startPlaceholder="'Choose Start Week'"></date-picker-week-range>
  </div>
</template>
 
<script>
import DatePickerWeekRange from './components/DatePickerWeekRange.vue'

export default {
  components:{
    DatePickerWeekRange
  },
 setup(){
  const separator="To"
  return{
    separator
  }
 }
}
</script>
 
<style scoped>
</style>