<template>
  <header>
    <div class="header">
      <div class="menu">
        <Menu
          mode="horizontal"
          :active-name="this.$route.name"
          theme="dark"
          class="header-menu"
          :on-select="OnSelectMenu"
        >
          <MenuItem name="traffic" style="flex: 1" to="/traffic">
            实时交通
          </MenuItem>
          <MenuItem name="energy" style="flex: 1" to="/energy">
            能源热电
          </MenuItem>
          <MenuItem name="air" style="flex: 1" to="/air"> 空气质量 </MenuItem>
          <MenuItem name="park" style="flex: 1" to="/park"> 园区能耗 </MenuItem>
          <MenuItem name="department" style="flex: 1" to="/department">
            项目分部
          </MenuItem>
        </Menu>
      </div>
      <div class="login" v-if="this.userInfo.name">
        {{ this.userInfo.name }}
        <a href="">退出</a>
      </div>
      <div class="login" v-else>
        <Button
          class="btn"
          type="primary"
          style="vertical-aline: middle"
          @click="login()"
          >登录</Button
        >
        <Button class="btn" type="info" @click="register(2)">注册</Button>
      </div>

      <div :class="{ panel: true, hidden: isLoginHidden }">
        <Form ref="login-from" :model="loginForm" label-position="right">
          <FormItem label="Name" prop="name">
            <Input
              v-model="loginForm.name"
              placeholder="Enter your name"
              style="width: 200px"
            ></Input>
          </FormItem>
          <FormItem label="E-mail" prop="mail">
            <Input
              v-model="loginForm.password"
              placeholder="Enter your e-mail"
              style="width: 200px"
            ></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleLogin">提交</Button>
          </FormItem>
        </Form>
      </div>
      <div :class="{ panel: true, hidden: isRegisterHidden }">注册</div>
    </div>
  </header>
</template>

<script>
import { request } from "../api/request";
import { mapMutations, mapState } from "vuex";

export default {
  ...mapMutations([
    "SET_USERINFO",
    "UPDATE_LOGIN_HIDDEN",
    "UPDATE_REGISTER_HIDDEN",
  ]),
  data() {
    return {
      // isLoginHidden: this.isLoginHidden,
      // isRegisterHidden: this.isRegisterHidden,
      isLoginHidden: true,
      isRegisterHidden: true,
      loginForm: {
        name: "",
        password: "",
      },
      registerForm: {
        name: "",
        password: "",
      },
      loginRules: {},
    };
  },
  computed: {
    ...mapState(["userInfo", "isLoginHidden", "isRegisterHidden"]),
    // isLoginHidden () {
    //   get(){
    //     return this.$store.state.isLoginHidden
    //   }
    //   set (value) {

    //     this.$store.commit('JISUAN_SET_uploadRate', { v: value });

    //   }
    // },
    // isRegisterHidden() {
    //   return this.isRegisterHidden
    // }
  },
  methods: {
    OnSelectMenu() {},
    login() {
      this.isRegisterHidden = true;
      this.isLoginHidden = !this.isLoginHidden;
      this.$store.commit("UPDATE_LOGIN_HIDDEN", this.isLoginHidden);
      this.$store.commit("UPDATE_REGISTER_HIDDEN", this.isRegisterHidden);
    },
    register() {
      this.isLoginHidden = true;
      this.isRegisterHidden = !this.isRegisterHidden;
      this.$store.commit("UPDATE_LOGIN_HIDDEN", this.isLoginHidden);
      this.$store.commit("UPDATE_REGISTER_HIDDEN", this.isRegisterHidden);
    },
    async handleLogin() {
      const res = await request("/login", this.loginForm, "post");
      if (res.status == 200) {
        // 登录成功
        this.$Message.success("登录成功");
        this.isLoginHidden = true;
        this.$store.commit("SET_USERINFO", this.loginForm);
        this.$store.commit("UPDATE_LOGIN_HIDDEN", this.isLoginHidden);
        window.location.href = `${window.location.origin}/#department`;
        this.loginForm = {
          name: "",
          password: "",
        };
      } else if (res.status === 1) {
        // 用户名不存在
        this.$Message.warning("用户名不存在，请先注册");
      } else {
        // 密码错误
        this.$Message.error("密码错误");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
}
.menu {
  flex: 1;
}
.header-menu {
  display: flex;
}
.login {
  width: 200px;
  background-color: #515b6d;
  display: flex;
  justify-content: space-around;
  line-height: 60px;
  display: table;
  z-index: 2;
}
.btn {
  display: table-cell;
  margin-right: 20px;
  vertical-align: middle;
}
.panel {
  position: absolute;
  right: 0;
  padding: 70px 10px 0;
  width: 300px;
  height: 100%;
  background-color: rgb(234, 239, 240);
  transition: right 0.3s;
  z-index: 1;
}
.hidden {
  right: -100%;
}
.ivu-menu-item-active {
  background-color: #40b883;
}
</style>
