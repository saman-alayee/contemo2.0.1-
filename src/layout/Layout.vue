<template>
	<div class="layout-container">
		<div class="sidebar-component">
			<Sidebar />
		</div>
		<div class="main-layout-component">
			<div class="container">
				<div class="top-bar-continer">
					<Topbar />
				</div>
				<div class="content">
					<router-view />
				</div>
			</div>
		</div>
		<div class="left-side-bar">
			<calender />
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
import calender from '../components/elements/Calendar/index.vue';
export default {
	name: 'layout',
	components: {
		Sidebar,
		Topbar,
		calender,
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
.sidebar-component {
	height: 100vh;
	flex: 1;
}
.main-layout-component {
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
	overflow-x: hidden;
	height: 100vh;
	padding: 45px 0;
	.content {
		height: 100%;
		margin-top: 24px;
	}
}

.left-side-bar {
	width: 440px;
	background: rgba(166, 166, 166, 0.1);
	box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 0px 30px 30px 0px;
	padding: 0 10px;
}
.layout-container {
	display: flex;
	.left-container {
		width: 100%;
	}
	.topbar {
		width: 100%;

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
</style>
