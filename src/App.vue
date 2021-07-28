<template>
  <div id="app">
    <!-- <router-view v-if="isRouterAlive" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // provide() {
  //   return {
  //     reload: this.reload,
  //   };
  // },
  // data() {
  //   return {
  //     isRouterAlive: true,
  //   };
  // },
  // methods: {
  //   reload() {
  //     this.isRouterAlive = false;
  //     this.$nextTick(function () {
  //       this.isRouterAlive = true;
  //     });
  //   },
  // },
};
</script>

<style >
#app {
  background: url("./assets/water.png");
  position: absolute;
  width: 100%;
  height: auto;
  background-attachment: scroll;
  bottom: 0;
  overflow-y: auto;
  top: 0;
}
</style>
