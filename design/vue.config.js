module.exports = {
  devServer: {
		proxy: {
			"/demo": {
				target: `http://localhost:7002`,
				changeOrigin: true,
				secure: false,
			},
		}
  }
};
