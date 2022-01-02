import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import echarts from "echarts";
// 引入vue-bmap-gl
// import VueBMap from "vue-bmap-gl";
// import VueMapvgl from "vue-mapvgl";
import "vue-bmap-gl/dist/style.css";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(ViewUI);


// Vue.use(VueBMap);
// Vue.prototype.BMapGL = VueBMap;
// Vue.use(VueMapvgl);
// Vue.prototype.VueMapvgl = VueMapvgl;

// 初始化vue-bmap
// VueBMap.initBMapApiLoader({
//   // 百度的key
//   ak: "Ee2ND9CB06FmbeTkEiHlWerT6GzkiM1x", //用自己的百度地图ak
//   // 百度 sdk 版本，默认为 1.0
//   v: "1.0",
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
