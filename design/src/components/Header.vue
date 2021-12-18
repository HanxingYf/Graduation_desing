<template>
  <header class="header">
    <Menu mode="horizontal" :active-name="this.$route.name" theme="dark" class="header-menu" :on-select='OnSelectMenu' >
      <MenuItem name="traffic" style="flex: 1" to='/traffic'> 实时交通 </MenuItem>
      <MenuItem name="energy" style="flex: 1" to='/energy'> 能源热电 </MenuItem>
      <MenuItem name="air" style="flex: 1" to='/air'> 空气质量 </MenuItem>
      <MenuItem name="park" style="flex: 1" to='/park' > 园区能耗 </MenuItem>
      <MenuItem name="department" style="flex: 1" to='/department'> 项目分部 </MenuItem>
    </Menu>
  </header>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		OnSelectMenu(name) {
			console.log(name)
		}
	},
  mounted() {
  }
};
</script>

<style scoped>
.header {
  width: 100%;
}
.header-menu {
  display: flex;
}
.ivu-menu-item-active {
	background-color: #40B883;
}
</style>
