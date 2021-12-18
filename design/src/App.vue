<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
  
}
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
  background-color: #100C2A;
}
header {
  width: 100%;
  height: 60px;
}
.view {
  width: 100%;
  height: 900px;
  flex: 1;
}
</style>
