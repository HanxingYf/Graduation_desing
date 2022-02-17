<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <template v-if="this.userInfo.name === undefined ">
      <div class="no-login">您未登录，请先登录 | 注册</div>
    </template>

    <template v-else >
      <div class="view">
        <router-view />
      </div>
    </template>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Header,
  },
  computed: {
    ...mapState([ "userInfo", 'isLoginHidden', 'isRegisterHidden' ]),
  },
  methods: {
    ...mapMutations(['UPDATE_LOGIN_HIDDEN', 'UPDATE_REGISTER_HIDDEN']),
  },
  mounted() {
    console.log(this.userInfo.name, 'name');
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
.no-login {
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: calc(100vh - 60px);
}
</style>
