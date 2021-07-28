<template>
  <div id="box">
    <div class="box1">
      <h2>高考志愿</h2>
      <div class="anjian">
        <!-- <button class="bt" @click="tiaozhuan1">用户注册</button><br /> -->
        <button class="bt" @click="tiaozhuan2">用户登录</button> <br />
        <button class="bt" @click="tiaozhuan3">管理维护</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    tiaozhuan1() {
      this.$router.push("/register");
    },
    tiaozhuan2() {
      this.$router.push("/login");
    },
    tiaozhuan3() {
      this.$router.push("/admin");
    },
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.box1 {
  text-align: center;
  margin: 10px auto;
  /* background: url("../assets/water.png");
    position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0; */
}
h2 {
  color: white;
  margin: 50px auto 20px;
  font-size: 130px;
}
/* 按键 */
.bt {
  background: #2f6fa7;
  color: white;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  font-weight: 1;
  padding: 8px auto;
  margin: 15px auto;
  font-size: 25px;
  width: 350px;
  height: 60px;
}
.anjian {
  /* background-color: white; */
  height: 270px;
  width: auto;
}
.bt:hover {
  background: #0d4a80;
}
</style>
