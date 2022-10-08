<template>
  <div>
    <week-range :separator="separator" :startPlaceholder="'Choose Start Week'"></week-range>
  </div>
</template>
 
<script>
// import DatePickerWeekRange from './components/weekrange/DatePickerWeekRange.vue'

export default {
  components:{
    // DatePickerWeekRange
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