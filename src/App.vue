<template>
  <div>
    <week-range
      v-model="value"
      unlink-panels
      format="YYYY [Week] ww"
      range-separator="--"
      start-placeholder="Choose Start Week"
      end-placeholder="Choose End Week"
    >
    </week-range>
    <!-- {{value}} -->
    {{ value.toString() }}
  </div>
</template>
 
<script>
import { ref } from "vue";

export default {
  // value-format="yyyy-MM-dd HH:mm:ss"
  // format="yyyy-MM-dd HH:mm:ss"

  setup() {
    const value = ref("");
    const separator = "-";
    const format = "YYYY-ww";

    const click = () => {
      console.log("app value£º", value.value);
      console.log("value stirng format:", value.value);
    };
    return {
      separator,
      value,
      format,
      click,
      
    };
  },
};
</script>
 
<style >

</style>