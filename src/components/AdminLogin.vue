<template>
  <div id="box7">
    <h3>管理员登录</h3>
    <div class="datiweizhi1">
      <input
        type="text"
        v-model="userName"
        placeholder="请输入姓名。。。"
        class="yuhuzhuce1"
      />
      <br />
      <input
        type="password"
        v-model="passWord"
        placeholder="请输入密码。。。"
        class="yuhuzhuce1"
      />
      <br />
      <button @click="chaxun2" class="anjian3">登录</button> <br>
      <button @click="tianzhuazhuce" class="xiugaimima">新账号注册</button>
      <button @click="xiugaixinxi" class="xiugaimima">忘记密码</button>
    </div>
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "AdminLogin",
  data() {
    return {
      userName: "",
      passWord: "",
      userPhone: "",
      msg: "",
    };
  },
  methods: {
    xiugaixinxi() {
      this.$router.push("/adminupdate");
    },
    tianzhuazhuce(){
        this.$router.push("/adminRegister");
    },
    chaxun2() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/admin/login",
        method: "post",
        transformRequest: [
          function (data) {
            //对data进行任意转换处理
            return qs.stringify(data);
          },
        ],
        headers: {
          deviceCode: "A95ZEF1-47B5-AC90BF3",
        },
        data: {
          adminName: this.userName,
          passWord: this.passWord,
        },
      })
        .then((response) => {
          //console.log(response);
          that.msg = response.data.msg;
          if (response.data.msg == "登陆成功！") {
            this.$router.push("/admincontroller");
          } 
          // else {
          //   this.$router.push("/admin");
          // }
          // alert(response.data.msg)
        })
        .catch((error) => {
          // console.log(error);
        });
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

<style scoped>
#box7 {
  /* background: url("../assets/water.png");
    position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0; */
  text-align: center;
}
h3 {
  color: white;
  font-size: 130px;
  width: 100%;
  /* height: 170px; */
  margin: 50px auto 20px;
  /* background-color: red; */
}
/* 用户注册框框 */
.datiweizhi1 {
  width: 100%;
}
.yuhuzhuce1 {
  height: 60px;
  width: 350px;
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
  margin: 10px auto;
}
input::-webkit-input-placeholder {
  font-size: 20px;
}
.anjian3 {
  margin-top: 10px;
  height: 60px;
  width: 350px;
  background: #2f6fa7;
  color: white;
  border: none;
  border-radius: 8px;
  /* outline: none; */
  cursor: pointer;
  /* font-weight: 1; */
  /* padding: 8px auto; */
  /* margin: 15px auto; */
  font-size: 25px;
}
.anjian3:hover {
  background: #0d4a80;
}
/* 弹出框 */
.msg {
  font-size: 25px;
  margin-top: 10px;
  color: white;
}
.xiugaimima{
    margin-top: 10px;
    height: 25px;
    width: 80px;
    position: inherit;
    cursor: pointer;
    border: none;
    background: gray;
}
</style>