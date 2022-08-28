<template>
	<div class="sidebar-mobile-container">
		<div class="close-container" @click="closeMobile">
			<span>X</span>
		</div>
		<div class="logo-container">
			<img :src="this.$PATH.GET_IMAGE_PATH('logotype.png')" alt="" v-if="!closeMenu" />
		</div>

		<div class="menu-item-container">
			<ul
				class="navigation navigation-main"
				id="main-menu-navigation"
				data-menu="menu-navigation"
			>
				<li class="nav-item">
					<router-link
						to="/dashboard"
						class="d-flex"
						:class="{ 'justify-center': closeMenu }"
					>
						<span class="iconify" data-icon="clarity:dashboard-line"></span>
						<span class="menu-title" data-i18n="Dashboard" v-if="!closeMenu"
							>داشبورد</span
						>
					</router-link>
				</li>
				<SiderbarDropdown
					class="side-dropdown"
					title="سفارش‌ها"
					iconUrl="eva:shopping-bag-outline"
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
								<span class="menu-title" data-i18n="Dashboard" v-if="!closeMenu"
									>ثبت سفارش</span
								>
							</router-link>
						</li>

						<li class="nav-item">
							<router-link to="/followOrder/1" class="nav-link">
								<span class="iconify" data-icon="akar-icons:file"></span>
								<span class="menu-title" data-i18n="Dashboard" v-if="!closeMenu"
									>پیگیری سفارش</span
								>
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
						<span class="menu-title" data-i18n="Dashboard" v-if="!closeMenu"
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
	components: {
		SiderbarDropdown,
	},
	methods: {
		closeMobile() {
			this.$STORE.commit(
				'appConfig/openMenuMobile',
				!this.$STORE.state.appConfig.mobileMobile,
			);
		},
	},
	data() {
		return {
			closeMenu: false,
		};
	},
	watch: {
		$route: {
			handler() {
				this.$STORE.commit('appConfig/openMenuMobile', false);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.sidebar-mobile-container {
	.logo-container {
		height: 110px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		img {
			width: 100%;
			height: 100px;
			object-fit: contain;
		}
	}
	.panel-type-container {
		height: 50px;
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
.router-link-active {
	color: #f6df4b !important;
	span,
	p {
		color: #f6df4b !important;
	}
}
.nav-item {
	margin-bottom: 40px;
	display: block;
	width: 100%;
	.nav-link {
		font-size: 16px;
		justify-content: flex-start;
	}
}
.justify-center {
	justify-content: center;
}
.inside {
	margin-bottom: 20px !important;
	.iconify {
		font-size: 24px;
	}
	.menu-title {
		font-size: 16px;
	}
}
</style>
