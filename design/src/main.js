import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import echarts from 'echarts'
import BduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ViewUI);
Vue.use(BduMap, {
  ak: "08hcgDrcTze2neXzn2GHlZOXc2IgVc09"
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
