<template>
  <div id="box4">
    <div class="a">
      <h2>高校简介查询</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name"
          placeholder="请输入学校名称。。。"
          class="shuruhang"
          required="true"
        />
        <br />
        <button class="anjian1" @click="chaxun">查询学校信息</button>
      </div>
    </div>
    <div class="a">
      <h2>专业简介查询</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="proname"
          placeholder="请输入专业名称。。。"
          class="shuruhang"
        />
        <br />
        <button class="anjian1" @click="chaxun4">查询专业信息</button>
      </div>
    </div>
    <div class="a">
      <h2>高校往年最低录取信息</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name3"
          placeholder="请输入学校名称。。。"
          class="shuruhang"
        />
        <br />
        <button class="anjian1" @click="chaxun5">查询</button>
      </div>
    </div>
    <div class="b">
      <h2>查询高校的所有专业信息</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name1"
          placeholder="请输入学校名称。。。"
          class="shuruhang"
        />
        <br />
        <button class="anjian1" @click="chaxun6">查询</button>
      </div>
    </div>
    <div class="b">
      <h2>查询开设某专业的高校信息</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="proname1"
          placeholder="请输入专业名称。。。"
          class="shuruhang"
        />
        <br />
        <button class="anjian1" @click="chaxun7">查询</button>
      </div>
    </div>
    <div class="b">
      <h2>查询高校内专业及录取分</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name2"
          placeholder="请输入学校名称。。。"
          class="shuruhang1"
        />
        <br />
        <input
          type="text"
          v-model="proname2"
          placeholder="请输入专业名称。。。"
          class="shuruhang1"
        />
        <br />

        <button class="anjian1" @click="chaxun8">查询</button>
      </div>
    </div>
    <div class="c">
      <div>
        {{ msg1 }} <br />
        {{ msg2 }} <br />
        {{ msg3 }} <br />
        {{ msg4 }} <br />
        {{ msg5 }} <br />
        {{ msg6 }} <br />
        {{ msg7 }} <br />
        {{ msg8 }} <br />
        <!-- {{msg}} -->
        <!-- {{ msg9 }} -->
      </div>

      <div>
        <ol>
          <li v-for="(item, index) in msg" :key="index">
            学校名称：{{ item.name }} &nbsp; 最低排名：{{
              item.minRank
            }}
            &nbsp;最低录取分：{{ item.minScore }} &nbsp; 录取年份：{{
              item.year
            }}
          </li>
        </ol>
      </div>
      <div>
        <ol>
          <li v-for="(item, index) in msg9" :key="index">
            学校名称：{{ item.name }}&nbsp;学校地址:
            {{ item.areaname }}&nbsp;录取批次：{{
              item.localBatchName
            }}
            &nbsp;专业：{{ item.spname }}&nbsp;专业类型：{{
              item.type
            }}&nbsp;录取分数：{{ item.min }}&nbsp;是否985：{{
              item.is985
            }}&nbsp;是否211：{{ item.is211 }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "SelectProfession",
  data() {
    return {
      name: "",
      name1: "",
      name2: "",
      name3: "",
      proname: "",
      proname1: "",
      proname2: "",
      msg: "",
      msg1: "",
      msg2: "",
      msg3: "",
      msg4: "",
      msg5: "",
      msg6: "",
      msg7: "",
      msg8: "",
      msg9: "",
      msg10: "",
    };
  },
  methods: {
    chaxun() {
      // if (this.name.length == 0) {
      //   alert("输入行不能为空");
      // }
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/get_school",
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
          name: this.name,
        },
      })
        .then((response) => {
          //  console.log(response.data.msg);
          //that.msg = response.data.msg;
          if (response.data.msg == "该高校不存在，请重新输入") {
            that.msg1 = response.data.msg;
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          } else {
            that.msg1 = "学校代码：" + response.data.msg.acronym;
            that.msg2 = "省份：" + response.data.msg.areaname;
            that.msg3 = "学校简介：" + response.data.msg.description;
            that.msg4 = "学校名称：" + response.data.msg.name;
            that.msg5 = "所处地区：" + response.data.msg.region;
            that.msg6 = "官网地址：" + response.data.msg.schoolWeb;
            that.msg7 = "教师数目：" + response.data.msg.teachersNum;
            that.msg8 = "曾用名：" + response.data.msg.usedname;
            that.msg = [];
            that.msg9 = [];
          }
        })
        .catch((error) => {
          //   console.log(error);
        });
    },
    chaxun4() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/get_profession",
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
          proname: this.proname,
        },
      })
        .then((response) => {
          // console.log(response.data);
          //that.msg = response.data.msg;
          if (response.data.msg == "该专业不存在，请重新输入") {
            that.msg1 = response.data.msg;
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          } else {
            that.msg1 = "专业代码：" + response.data.msg.code;
            that.msg2 = "专业介绍：" + response.data.msg.description;
            that.msg3 = "所属大类：" + response.data.msg.major;
            that.msg4 = "专业名称：" + response.data.msg.proname;
            that.msg5 = "类别：" + response.data.msg.subject;
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          }

          // that.msg6 = "官网地址：" + response.data.msg.schoolWeb;
          // that.msg7 = "教师数目：" + response.data.msg.teachersNum;
          // that.msg8 = "曾用名：" + response.data.msg.usedname;
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    chaxun5() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/get_schoolscore",
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
          name: this.name3,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.msg.length == 0) {
            that.msg1 = "该高校不存在，请重新输入！";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          } else {
            that.msg = response.data.msg;
            that.msg1 = "";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg9 = [];
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    chaxun6() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/get_school_profession",
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
          name: this.name1,
        },
      })
        .then((response) => {
          // console.log(response.data);
          if (response.data.msg.length == 0) {
            that.msg1 = "输入信息有误，请重新输入";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg9 = [];
            that.msg = [];
          } else {
            that.msg9 = response.data.msg;
            that.msg1 = "";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    chaxun7() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/get_profession_school",
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
          proname: this.proname1,
        },
      })
        .then((response) => {
          //console.log(response.data);
          //that.msg9 = response.data.msg;
          if (response.data.msg.length == 0) {
            that.msg1 = "输入信息有误，请重新输入";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          } else {
            that.msg9 = response.data.msg;
            that.msg1 = "";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
          }
        })
        .catch((error) => {
          //console.log(error);
        });
    },
    chaxun8() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/user/getschoolprofession",
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
          name: this.name2,
          proname: this.proname2,
        },
      })
        .then((response) => {
          console.log(response.data);
          // that.msg9 = response.data.msg;
          if (response.data.msg.length == 0) {
            that.msg1 = "输入信息有误，请重新输入";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
            that.msg9 = [];
          } else {
            that.msg9 = response.data.msg;
            that.msg1 = "";
            that.msg2 = "";
            that.msg3 = "";
            that.msg4 = "";
            that.msg5 = "";
            that.msg6 = "";
            that.msg7 = "";
            that.msg8 = "";
            that.msg = [];
          }
        })
        .catch((error) => {
          console.log(error);
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

<style  scoped >
/* #box4 {
  background-image: url("../assets/water.png");

  position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0;
} */

.a {
  width: 33.3%;
  height: 250px;
  /* background-color: red; */
  float: left;
}
.b {
  width: 33.3%;
  height: 350px;
  float: left;
  /* background-color: red; */
}
.c {
  font-size: 20px;
  color: white;
  height: auto;
  margin: 20px auto;
  /* text-align: center; */

  /* background-color: red; */
}
/* #d {
  width: 33.3%;
  height: 250px;
  float: left;
} */
/* #e {
  width: 33.3%;
  height: 250px;
  float: left;
} */

h2 {
  margin-top: 50px;
  text-align: center;
  color: white;
  font-size: 30px;
}
.shuru {
  text-align: center;
}
.shuruhang {
  height: 40px;
  width: 220px;
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
}
.shuruhang1 {
  height: 40px;
  width: 220px;
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
  margin-top: 5px;
}
.anjian1 {
  margin-top: 20px;
  width: 200px;
  height: 45px;
  font-size: 20px;
  background: #2f6fa7;
  color: white;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  padding: auto;
}
.anjian1:hover {
  background: #0d4a80;
}
</style>