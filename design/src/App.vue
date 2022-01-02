<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },

  async mounted() {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: #100c2a;
  width: 100%;
  height: 100vh;
}
.header {
  width: 100%;
  height: 60px;
}
.view {
  width: 100%;
  flex: 1;
}
</style>
