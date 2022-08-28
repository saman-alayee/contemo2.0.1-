<template>
	<div class="sidebar-component-container">
		<div class="side-bar-web">
			<SideWeb class="web" />
		</div>
		<div class="side-bar-mobile" :class="{ 'show-menu': showMenu }">
			<SideMob />
		</div>
	</div>
</template>

<script>
import SideWeb from './components/sidebarWeb.vue';
import SideMob from './components/sidebarMobile.vue';
export default {
	components: {
		SideWeb,
		SideMob,
	},

	computed: {
		showMenu() {
			return this.$STORE.state.appConfig.mobileMobile;
		},
	},
};
</script>
<style lang="scss" scoped>
.sidebar-component-container {
	position: relative;
	width: 100%;
	height: 100vh;
	.web {
		@media screen and (max-width: 767px) {
			display: none;
		}
	}
	.side-bar-mobile {
		position: fixed;
		top: 0;
		right: -100%;
		width: 100%;
		height: 100vh;
		background-color: #404141;
		overflow-y: scroll;
		z-index: 22222222;
		transition: all 0.3s;
	}
	.show-menu {
		right: 0 !important;
	}
}
</style>
