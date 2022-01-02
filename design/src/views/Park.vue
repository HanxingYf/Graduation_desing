<template>
  <div class="park">
    <div class="park-chart" ref="partChart"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      var partChart = this.$echarts.init(this.$refs.partChart);
      // 绘制图表
      partChart.setOption({
        textStyle: {
          color: "#c3dbff", // 全局字体颜色
          fontSize: 14, //全局字体大小
        },
        title: [
          {
            text: "",
            textStyle: {
              color: "#B13B5A",
              textShadowOffsetX: 20,
            },
          },
        ],
        tooltip: {},
        xAxis: {
          data: [
            "钻石大厦",
            "新城海大厦",
            "湾流大厦",
            "创新大楼",
            "湾流大厦",
            "创新大楼",
            "大厦1",
            "大厦1",
            "大厦1",
            "大厦1",
            "大厦1",
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 14, //更改坐标轴文字大小
            },
          },
          splitLine: {
            show: false,
            color: "#c3dbff",
          },
        },
        yAxis: {
          splitLine: {
            show: false,
            color: "#c3dbff",
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [37, 20, 36, 55, 44, 90, 20, 36, 55, 44],
            barWidth: 60,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#c3dbff",
                    fontSize: 16,
                  },
                },
              },
            },
          },
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
            ],
            type: "scatter",
          },
        ],

        dataZoom: [
          {
            type: "slider",
            show: true,
            start: 0,
            end: 100,
            bottom: 0,
            xAxisIndex: [0],
            zoomLock: false,
          },
        ],
        color: ["#40B983", "#fff"],
      });
    },
  },
};
</script>

<style scoped>
.park {
  width: 100%;
  height: 100%;
}
.park-chart {
  width: 100%;
  height: 700px;
}
</style>
