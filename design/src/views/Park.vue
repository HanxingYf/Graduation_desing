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
        title: [
          {
            text: "大厦能源消耗表",
            textStyle: {
              color: "#B13B5A",
              textShadowOffsetX: 20,
              left: "center",
              top: "center",
            },
          },
        ],
        tooltip: {},
        xAxis: {
          data: ["钻石大厦", "新城海大厦", "湾流大厦", "创新大楼", "湾流大厦", "创新大楼"],
          nameTextStyle: {
            color: '#FFFFFF'
          },
          nameGap: 30,
          color: "#fff"
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [37, 20, 36, 55, 44, 90],
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
