<template>
  <div id="box6">
    <div id="a">
      <h2>添加高校</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name"
          placeholder="请输入学校名称。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="description"
          placeholder="请输入学校描述信息。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="schoolWeb"
          placeholder="请输入学校网址信息。。。"
          class="shuruhang2"
        />
        <br />
        <button class="anjian1" @click="chaxun">添加高校</button>
      </div>
    </div>
    <div id="a">
      <h2>删除高校</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name1"
          placeholder="请输入高校名称。。。"
          class="shuruhang"
        />
        <br />
        <button class="anjian1" @click="chaxun4">删除高校</button>
      </div>
    </div>
    <div id="a">
      <h2>修改高校信息</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="name2"
          placeholder="请输入学校名称。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="description1"
          placeholder="请输入学校描述信息。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="schoolWeb1"
          placeholder="请输入学校网址信息。。。"
          class="shuruhang2"
        />
        <br />
        <button class="anjian1" @click="chaxun5">确认</button>
      </div>
    </div>
    <div id="e">
      <h2>添加专业</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="proname"
          placeholder="请输入专业名称。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="code"
          placeholder="请输入学校代码信息。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="description2"
          placeholder="请输入学校描述信息。。。"
          class="shuruhang2"
        />
        <br />
        <button class="anjian1" @click="chaxun6">添加专业</button>
      </div>
    </div>
    <div id="e">
      <h2>修改专业信息</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="proname1"
          placeholder="请输入专业名称。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="code1"
          placeholder="请输入学校代码信息。。。"
          class="shuruhang2"
        />
        <br />
        <input
          type="text"
          v-model="description3"
          placeholder="请输入学校描述信息。。。"
          class="shuruhang2"
        />
        <br />
        <button class="anjian1" @click="chaxun7">确认</button>
      </div>
    </div>
    <div id="e">
      <h2>删除专业</h2>
      <div class="shuru">
        <input
          type="text"
          v-model="proname2"
          placeholder="请输入专业名称。。。"
          class="shuruhang1"
        />
        <br />
        <button class="anjian1" @click="chaxun8">删除专业</button>
      </div>
    </div>
    <div id="c">
      <div>
        {{ msg10 }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "AdminController",
  data() {
    return {
      name: "",
      description: "",
      schoolWeb: "",
      description1: "",
      description2: "",
      description3: "",
      schoolWeb1: "",
      name1: "",
      name2: "",
      name3: "",
      proname: "",
      proname1: "",
      proname2: "",
      code: "",
      code1: "",

      msg10: "",
    };
  },
  methods: {
    chaxun() {
      if (
        this.name.length == 0 ||
        this.description.length == 0 ||
        this.schoolWeb.length == 0
      ) {
        this.msg10 = "信息输入不完整，请输入完整信息。";
      } else {
        var that = this;
        axios({
          url: "http://localhost:9000/rest/admin/add_school",
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
            description: this.description,
            schoolWeb: this.schoolWeb,
          },
        })
          .then((response) => {
            //  console.log(response.data.msg);
            that.msg10 = response.data.msg;
          })
          .catch((error) => {
            //   console.log(error);
          });
      }
    },
    chaxun4() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/admin/delete_school",
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
          that.msg10 = response.data.msg;
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    chaxun5() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/admin/update_school",
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
          description: this.description1,
          schoolWeb: this.schoolWeb1,
        },
      })
        .then((response) => {
          // console.log(response.data);
          that.msg10 = response.data.msg;
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    chaxun6() {
      if (
        this.proname.length == 0 ||
        this.code.length == 0 ||
        this.description2.length == 0
      ) {
        this.msg10 = "信息输入不完整，请输入完整信息。";
      } else {
        var that = this;
        axios({
          url: "http://localhost:9000/rest/admin/add_profession",
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
            code: this.code,
            description: this.description2,
          },
        })
          .then((response) => {
            //console.log(response.data);
            that.msg10 = response.data.msg;
          })
          .catch((error) => {
            // console.log(error);
          });
      }
    },
    chaxun7() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/admin/update_profession",
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
          code: this.code1,
          description: this.description3,
        },
      })
        .then((response) => {
          //console.log(response.data);
          that.msg10 = response.data.msg;
        })
        .catch((error) => {
          //console.log(error);
        });
    },
    chaxun8() {
      var that = this;
      axios({
        url: "http://localhost:9000/rest/admin/delete_profession",
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
          proname: this.proname2,
        },
      })
        .then((response) => {
          //  console.log(response.data);
          that.msg10 = response.data.msg;
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
/* #box6 {
  background-image: url("../assets/water.png");

  position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0;
} */
#a {
  width: 33.3%;
  height: 380px;
  /* background-color: red; */
  float: left;
}
/* #b {
  width: 50%;
  height: 350px;
  float: left;
} */
#c {
  font-size: 20px;
  color: white;
  height: auto;
  margin-top: 15px;
  margin: 60px 15px;
  text-align: center;
  /* background-color: red; */
}
#d {
  width: 50%;
  height: 350px;
  float: left;
  /* background-color: rgb(22, 6, 6); */
}
#e {
  width: 33.3%;
  height: 420px;
  float: left;
  /* background-color: red; */
}

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
.shuruhang2 {
  height: 40px;
  width: 220px;
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
  margin-top: 5px;
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