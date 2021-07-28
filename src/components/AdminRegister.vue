<template>
  <div id="box8">
    <h1>管理员账户注册</h1>
    <div class="datiweizhi">
      <input
        type="text"
        v-model="userName"
        placeholder="请输入姓名。。。"
        class="yuhuzhuce"
      />
      <br />
      <input
        type="password"
        v-model="passWord"
        placeholder="请输入密码。。。"
        class="yuhuzhuce"
      />
      <br />
      <input
        type="text"
        v-model="userPhone"
        placeholder="请输入手机号。。。"
        class="yuhuzhuce"
      />
      <br />
      <button @click="chaxun1" class="anjian2">注册</button>
    </div>
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "AdminRegister",
  data() {
    return {
      userName: "",
      passWord: "",
      userPhone: "",
      msg: "",
    };
  },
  methods: {
    chaxun1() {
      if (
        this.userName.length == 0 ||
        this.passWord.length == 0 ||
        this.userPhone.length == 0
      ) {
        this.msg = "信息输入不完整，请输入完整信息。";
      } else {
        var that = this;
        axios({
          url: "http://localhost:9000/rest/admin/add_admin",
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
            adminPhone: this.userPhone,
          },
        })
          .then((response) => {
            //console.log(response);
            that.msg = response.data.msg;
            if (response.data.msg == "注册成功！") {
              this.$router.push("/admin");
            } 
            // else {
            //   this.$router.push("/adminRegister");
            // }
          })
          .catch((error) => {
            // console.log(error);
          });
      }
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
#box8 {
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
h1 {
  color: white;
  font-size: 130px;
  width: 100%;
  /* height: 170px; */
  margin: 50px auto 20px;
  /* background-color: red; */
}
/* 用户注册框框 */
.datiweizhi {
  width: 100%;
}
.yuhuzhuce {
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
.anjian2 {
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
.anjian2:hover {
  background: #0d4a80;
}
/* 弹出框 */
.msg {
  font-size: 25px;
  margin-top: 10px;
  color: white;
}
</style>