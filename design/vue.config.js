module.exports = {
  // 设置网站title
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "可视化分析系统";
      return args;
    });
  },
  devServer: {
    proxy: {
      "/": {
        target: `http://localhost:7001`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
