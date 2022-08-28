<template>
	<div class="layout-container">
		<div class="sidebar-component">
			<Sidebar />
		</div>
		<div class="left-container">
			<div class="topbar">
				<Topbar />
				<div class="title-container-top">
					<p>{{ title }}</p>
				</div>
			</div>
			<div class="content">
				<div class="contdainer">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
export default {
	name: 'layout',
	components: {
		Sidebar,
		Topbar,
	},
	created() {
		console.log(this.$route);
	},
	computed: {
		title() {
			return this.$route.meta.title;
		},
	},
	data() {
		return {
			closeMenu: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.layout-container {
	display: flex;
	.left-container {
		width: 100%;
	}
	.topbar {
		width: 100%;
		border-right: 1px solid #c4c4c4;
		.title-container-top {
			width: 100%;
			height: 64px;
			background: #c4c4c4f5;
			display: flex;
			align-items: center;
			padding: 10px 20px;
			// position: fixed;
			// top: 110px;
			// left: 0;
			// z-index: 20000;
			p {
				color: #404141;
				text-align: right;
				margin-bottom: 0;
			}
		}
	}
}
.content {
	// padding: 10px;
	overflow-y: scroll;
	height: calc(100vh - 110px);
}
</style>
