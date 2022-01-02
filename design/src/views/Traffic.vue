<template>
  <div class="traffic">
    <div id="allmap" style="width: 100%; height: 100%"></div>
    <div class="map-ctrl">
      <Button type="success" @click="handleTraffic">{{
        isTrafficMapActive ? "关闭交通流量图层" : "开启交通流量图层"
      }}</Button>
    </div>
  </div>
</template>

<script>
import { BMPGL } from "../assets/bmpgl.js";
import { styleJson } from "../config/map/mapFeature";
export default {
  data() {
    return {
      ak: "Ee2ND9CB06FmbeTkEiHlWerT6GzkiM1x", // 百度的地图密钥
      myMap: null,
      isTrafficMapActive: true,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 传入密钥获取地图回调。
      BMPGL(this.ak)
        .then((BMapGL) => {
          // 创建地图实例
          let map = new BMapGL.Map("allmap");
          // 创建点坐标 axios => res 获取的初始化定位坐标
          var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
          // 初始化地图，设置中心点坐标和地图级别
          map.centerAndZoom(point, 18);
          //开启鼠标滚轮缩放
          map.enableScrollWheelZoom(true);
          // map.setHeading(64.5)
          // map.setTilt(73)
          // 保存数据
          // this.myMap = map
          map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
          map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
          map.setTrafficOn(); // 添加交通流量图层
          map.setMapStyleV2({ styleJson: styleJson });
          var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
          map.addControl(zoomCtrl);
          var cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
          map.addControl(cityCtrl);
          map.setMapType("BMAP_EARTH_MAP");
          window.map = map;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleTraffic() {
      this.isTrafficMapActive = !this.isTrafficMapActive
      this.isTrafficMapActive ? window.map.setTrafficOn() : window.map.setTrafficOff()
    },
  },
};
</script>

<style scoped>
.map {
}
.traffic {
  width: 100%;
  height: 100%;
  position: relative;
}

.map-ctrl {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 9999;
}
</style>
