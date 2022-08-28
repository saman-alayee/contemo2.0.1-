<template>
	<div class="sidebar-container" :class="{ closeMenu: closeMenu }">
		<div class="logo-container">
			<img :src="this.$PATH.GET_IMAGE_PATH('logotype.png')" alt="" v-if="!closeMenu" />
			<img :src="this.$PATH.GET_IMAGE_PATH('mini-logo.png')" alt="" v-if="closeMenu" />
		</div>
		<div class="panel-type-container" v-if="!closeMenu">
			<p class="mb-0">پنل مدیریتی کارپیس</p>
		</div>

		<div class="menu-item-container" :class="{ mta: closeMenu }">
			<ul
				class="navigation navigation-main"
				id="main-menu-navigation"
				data-menu="menu-navigation"
			>
				<SiderbarDropdown
					class="side-dropdown"
					title="ثبت سفارش مستقیم"
					iconUrl="bx:bx-user"
					mainRoute="order"
				>
					<template slot="navItems" v-if="!closeMenu">
						<li class="nav-item inside">
							<router-link
								to="/order/addOrder"
								class="nav-link"
								:class="{ 'justify-center': closeMenu }"
							>
								<span class="iconify" data-icon="bi:plus-square"></span>
								<span class="menu-title" v-if="!closeMenu">ثبت سفارش</span>
							</router-link>
						</li>
						<br />
						<li class="nav-item inside">
							<router-link to="/followOrder/1" class="nav-link">
								<span class="iconify" data-icon="akar-icons:file"></span>
								<span class="menu-title" v-if="!closeMenu">پیگیری سفارش</span>
							</router-link>
						</li>
					</template>
				</SiderbarDropdown>
				<li class="nav-item">
					<router-link
						to="/profile"
						class="d-flex"
						:class="{ 'justify-center': closeMenu }"
					>
						<span class="iconify" data-icon="bx:bx-user"></span>
						<span class="menu-title-head" data-i18n="Dashboard" v-if="!closeMenu"
							>اطلاعات شخصی</span
						>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import SiderbarDropdown from '../../components/SiderbarDropdown/index.vue';
export default {
	data() {
		return {
			closeMenu: null,
		};
	},
	components: {
		SiderbarDropdown,
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
};
</script>

<style lang="scss" scoped>
.sidebar-container {
	width: 300px;
	height: calc(100vh + 64px);
	background-color: #404141;
	transition: all 0.3s;

	.logo-container {
		height: 110px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 60px;
			object-fit: contain;
		}
	}
	.line {
		width: 100%;
		height: 1px;
		background-color: #c4c4c4;
	}
}
.closeMenu {
	width: 80px;
	transition: all 0.3s;
}

.active {
	color: #f6df4b;
}
.menu-item-container {
	margin-top: 70px;
}
.navigation {
	text-align: right;
	padding: 0.5rem 1rem;
	li {
		span,
		a {
			color: #c4c4c4;
			margin-right: 5px;
			text-decoration: none;
		}
		a {
			font-size: 24px;
		}
		span {
			font-size: 18px;
		}
	}
}
.mta {
	margin-top: 130px;
}
.panel-type-container {
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(196, 196, 196, 0.25);
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		color: #c4c4c4;
		font-size: 18px;
		font-weight: 700;
		font-weight: bold;
	}
}
.router-link-active {
	color: #f6df4b !important;
	span,
	p {
		color: #f6df4b !important;
	}
}
.nav-item {
	margin-bottom: 20px;
	display: block;
	.nav-link {
		font-size: 16px;
	}
}
.justify-center {
	justify-content: center;
}
.inside {
	margin-bottom: 10px !important;
	display: flex;
	width: 100%;
	.menu-title {
		font-size: 14px !important;
	}
	a {
		justify-content: flex-start;
	}
	.iconify {
		font-size: 18px;
		margin-left: 10px;
	}
}
.panel-type-container {
	height: 64px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(196, 196, 196, 0.25);
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		color: #c4c4c4;
		font-size: 18px;
		font-weight: 700;
		font-weight: bold;
	}
}
.iconify {
	font-size: 24px;
}
.side-dropdown {
	margin-right: 5px;
}
</style>
