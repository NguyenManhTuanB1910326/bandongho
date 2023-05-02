<template>
  <component :is="layout">
    <router-view />
    <!-- thằng này là thằng thay đổi chính là thằng slot-->
  </component>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
// thay vì import trực tiếp components layout thì ko hay nên utils/import.js sẽ import hay hơn
// import utils/import ben main.js
export default {
  setup() {
    const route = useRoute();
    return {
      //Vì layout trong app chỉ chạy 1 lần nên thay đổi router-view
      // thì giá trị của layout vẫn ko thay đổi => sử dụng watch or computed
      layout: computed(() => (route.meta.layout || "default") + "-layout"),
    };
  },
};
</script>
