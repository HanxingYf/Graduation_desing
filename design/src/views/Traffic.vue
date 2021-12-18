<template>
  <div class="traffic">
    <baidu-map style="height: 730px" @ready="init"></baidu-map>
  </div>
</template>

<script>
import { styleJson } from "../config/map/mapFeature";
export default {
  data() {
    return {
      zoom: 18,
    };
  },

  methods: {
    init({ BMap, map }) {
      this.map = map;
      window.map = map;
      var point = new BMap.Point(115.8168, 28.72747); //设置城市经纬度坐标
      this.map.centerAndZoom(point, 15); //
      this.map.enableScrollWheelZoom(true); //鼠标滚动缩放
      this.map.setMapStyle({ styleJson: styleJson });
      var scaleCtrl = new BMap.ScaleControl(); // 添加比例尺控件
      this.map.addControl(scaleCtrl);
    },
  },
  mounted() {
    // this.init();
  },
};
</script>

<style scoped>
.map {
  height: 730px;
}
</style>
