<template>
  <div>
    <keep-alive>
      <MyHeader></MyHeader>
    </keep-alive>
    <h3 style="margin-top: 100px; height: 600px;">我是榜單組件</h3>
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
  },
  mounted () {
    console.log(123, 'bd')
  }
};
</script>
<style>
</style>