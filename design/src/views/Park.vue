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
        legend: {
          top: 40,
          right: 200,
          textStyle: {
            color: '#fff'
          }
        },
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
            name: "实际功率",
            type: "bar",
            stack: 'total',
            data: [37, 20, 36, 55, 44, 90, 20, 36, 55, 44],
            barWidth: 60,
          },
          {
            name: '额定功率',
            symbolSize: 20,
            stack: 'total',
            data: [
              [0, 50],
              [1, 40],
              [2, 45],
              [3, 80],
              [4, 60],
              [5, 80],
              [6, 34],
              [7, 40],
              [8, 60],
              [9, 60],
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
        color: ["#40B983", "#dd3c3c"],
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
