<template>
  <div class="container">
    <img
      src="https://cdn.shpy.in/208075/1671463834768_SKU-2800_0.jpg?width=600"
      alt=""
    />
    <p>Welcome to my shop</p>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    if (localStorage.getItem("token") != undefined) {
      router.push("/");
    }
  },
};
</script>
<style scoped>
div p {
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
}
img {
  margin-right: auto;
  width: 30%;
  height: 300px;
}
</style>
