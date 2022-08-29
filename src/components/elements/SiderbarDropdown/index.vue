<template>
	<!-- Sidebar Dropdown component, customized dropdown for use in sidebar -->
	<li class="nav-item">
		<a
			class="nav-link"
			@click="show"
			data-toggle="collapse"
			:class="{ 'justify-center': closeMenu, activeRoute: mainRoute === checkRoute }"
		>
			<div class="item">
				<div @click="openMenu">
					<span class="iconify icon" :data-icon="iconUrl"></span>
				</div>
				<p class="title mb-0" v-if="!closeMenu">
					{{ title }}
				</p>
			</div>
			<img
				:src="this.$PATH.GET_IMAGE_PATH('iconPack/arrow-inactive.svg')"
				alt=""
				:class="{ rotate: isActive }"
				v-if="!closeMenu"
			/>
		</a>
		<div class="collapse animation" v-bind:class="{ show: isActive }">
			<ul class="nav">
				<slot name="navItems"></slot>
			</ul>
		</div>
	</li>
</template>

<script>
export default {
	// get title for dropdown with title prop and icon name with iconName prop
	props: ['title', 'iconUrl', 'iconActive', 'mainRoute'],
	data: function () {
		return {
			isActive: false,
			closeMenu: null,
		};
	},
	methods: {
		// toggle isActive variable between true or false
		show() {
			this.isActive = !this.isActive;
		},
		openMenu() {
			this.$STORE.commit('appConfig/changeMenuStatus', false);
		},
	},
	created() {
		this.closeMenu = this.$STORE.state.appConfig.closeMenu;
	},
	watch: {
		'$STORE.state.appConfig': {
			handler() {
				this.closeMenu = this.$STORE.state.appConfig.closeMenu;
			},
			deep: true,
		},
	},
	computed: {
		checkRoute() {
			return this.$route.path.split('/')[1];
		},
	},
};
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.nav-item {
	text-align: right;
	color: #c4c4c4;
}
.title {
	font-size: 18px;
}
.animation {
	animation: fadeIn 2s;
}
.collapse {
	margin-right: 24px;
	margin-top: 30px;
}
.sidebar .nav .icon {
	position: absolute;
	right: unset;
	left: -30px;
	font-size: 14px;
}

.rotate {
	transform: rotate(180deg);
}
.nav-link {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	margin-bottom: 10px;
	.item {
		display: flex;
		align-items: center;
	}
	img {
		transition: all 0.2s;
	}
}
a {
	&:hover {
		cursor: pointer;
	}
}

.icon-chevron-down {
	font-size: 14px !important;
}
.icon {
	font-size: 24px;
	// margin-top: 7px;
	margin-left: 5px;
}
.justify-center {
	justify-content: center;
}
.activeRoute {
	.iconify,
	p {
		color: #f6df4b;
	}
	color: #f6df4b;
}
</style>
