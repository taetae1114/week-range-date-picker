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
      separator,
      value,
      format,
      shortcuts,
      click,
    };
  },
};
</script>
 
<style >
</style>