<template>
	<div class="topbar-container">
		<div class="topbar-item-container">
			<div class="humberger-menu web" @click="changeMenuStatus">
				<img :src="this.$PATH.GET_IMAGE_PATH('iconPack/humberger-menu.svg')" alt="" />
			</div>
			<div class="humberger-menu mobile" @click="openMobileMenu">
				<img :src="this.$PATH.GET_IMAGE_PATH('iconPack/humberger-menu.svg')" alt="" />
			</div>
		</div>
		<div class="topbar-item-container web">
			<div class="price-item">
				<span class="text">دلار</span>
				<span class="color" v-if="priceData && priceData.usd">{{
					priceData.usd.value | toPersianCurrency('', 0)
				}}</span>
				<span class="text">ریال</span>
			</div>
			<div class="line"></div>
			<div class="price-item no-border">
				<span class="text">درهم</span>
				<span class="color" v-if="priceData && priceData.aed">{{
					priceData.aed.value | toPersianCurrency('', 0)
				}}</span>
				<span class="text">ریال</span>
				<div class="refresh" @click="getExchange">
					<img :src="this.$PATH.GET_IMAGE_PATH('iconPack/refresh.svg')" alt="" />
				</div>
			</div>
		</div>
		<div class="topbar-item-container sabat">
			<Button
				title="ثبت سفارش جدید"
				btnImageUrl="akar-icons:plus"
				@click.native="goToOrder"
			/>
		</div>
		<div class="topbar-item-container web user-drop-panel">
			<div class="icon-item">
				<img :src="this.$PATH.GET_IMAGE_PATH('iconPack/notification.svg')" alt="" />
			</div>
			<div class="icon-item" @click="showProfile = !showProfile">
				<img :src="this.$PATH.GET_IMAGE_PATH('iconPack/user.svg')" alt="" />
			</div>
			<div class="user-panel-dropdown" :class="{ 'show-profile': showProfile }">
				<div class="drop-down-item">
					<router-link to="/profile">
						<span class="iconify" data-icon="bx:bx-user"></span>
						<span>اطلاعات شخصی</span>
					</router-link>
				</div>
				<div class="drop-down-item" @click="logout">
					<span class="iconify" data-icon="ri:shut-down-line"></span>
					<span>خروج</span>
				</div>
				<div class="drop-down-item"></div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../components/Button/Button.vue';
export default {
	components: {
		Button,
	},
	data() {
		return {
			priceData: null,
			showProfile: false,
		};
	},
	watch: {
		$route: function () {
			this.showProfile = false;
			this.getExchange();
		},
	},
	created() {
		this.getExchange();
	},
	methods: {
		changeMenuStatus() {
			this.$STORE.commit(
				'appConfig/changeMenuStatus',
				!this.$STORE.state.appConfig.closeMenu,
			);
		},
		openMobileMenu() {
			this.$STORE.commit(
				'appConfig/openMenuMobile',
				!this.$STORE.state.appConfig.mobileMobile,
			);
		},
		async getExchange() {
			const res = await this.$ApiServiceLayer.get(
				this.$PATH.RELATIVE_PATH.GET.GET_EXCHANGE,
				this.$PATH.SERVICE_NAME.ORDER,
			);
			if (res.code === 200) {
				this.priceData = res.data;
			}
		},
		goToOrder() {
			this.$router.push({ name: 'addOrder' });
		},
		logout() {
			this.$STORE.commit('userConfig/clearAllConfigs');
			this.$router.push({ name: 'login' });
		},
	},
};
</script>

<style lang="scss" scoped>
.topbar-container {
	height: 110px;
	width: 100%;
	background-color: #404141;
	display: flex;
	justify-content: space-between;
	padding: 0 32px;
	.user-drop-panel {
		position: relative;
		.user-panel-dropdown {
			width: 200px;
			min-height: 100px;
			background-color: #404141;
			top: 111px;
			left: 0;
			position: absolute;
			opacity: 0;
			visibility: hidden;
			padding: 28px;
			a,
			span,
			.iconify {
				color: #fff;
				font-size: 16px;
				text-decoration: none;
			}
			.iconify {
				margin-left: 10px;
				font-size: 20px;
			}
			.drop-down-item {
				margin-bottom: 10px;
				cursor: pointer;
			}
		}
		.show-profile {
			opacity: 1;
			visibility: visible;
		}
	}
	.topbar-item-container {
		margin: 0 10px;
		display: flex;
		align-items: center;
		height: 100%;
		.line {
			width: 3px;
			height: 40px;
			background-color: #c4c4c4;
			border-radius: 5px;
		}
		.price-item {
			width: 100%;
			height: 100%;
			padding: 0 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				margin: 0 5px;
			}
			.text {
				color: #c4c4c4;
			}
			.color {
				color: #f6df4b;
			}
		}
		.refresh {
			width: 40px;
			height: 40px;
			background-color: #f6df4b;
			margin-right: 10px;
			border-radius: 2px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
	}
	.icon-item {
		width: 24px;
		height: 24px;
		margin: 0 8px;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.humberger-menu {
		cursor: pointer;
	}
	.web {
		@media screen and (max-width: 767px) {
			display: none;
		}
	}
	.mobile {
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
}
.sabat,
.web {
	@media screen and (max-width: 767px) {
		display: none !important;
	}
}
</style>
