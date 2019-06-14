<template>
  <div>
      <MyHeader></MyHeader>
    <h3 style="margin-top: 100px; height: 600px;">我是热点組件</h3>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyHeader from "./pubComponent/myHeader";
import MyFooter from "./pubComponent/footer";
export default {
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style>
</style>