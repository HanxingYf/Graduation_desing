import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import echarts from "echarts";
import "vue-bmap-gl/dist/style.css";
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(ViewUI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
