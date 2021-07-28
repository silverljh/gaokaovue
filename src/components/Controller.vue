<template>
  <div id="box4">
    <h2>管理维护</h2>
  </div>
</template>

<script>
export default {
  name: "Controller",
  beforeRouteEnter(to, from, next) {
    // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
    document.querySelector("body").setAttribute("style", "margin:0;padding:0");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 去除背景色
    document.querySelector("body").setAttribute("style", "");
    next();
  },
};
</script>

<style scoped>
/* #box4 {
  background: url("../assets/water.png");
    position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0;
} */
</style>