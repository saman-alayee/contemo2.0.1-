<template>
	<div class="sidebar-component-container" :class="{ openSidebar: isOpen }">
		<div class="close-container" @click="isOpen = !isOpen" :class="{ rotate: isOpen }">
			<img :src="this.$PATH.GET_IMAGE_PATH('vectors/closeIcon.svg')" alt="" />
		</div>
		<div class="user-profile-container">
			<div class="img-container" :class="{ 'open-image-container': isOpen }">
				<img :src="this.$PATH.GET_IMAGE_PATH('vectors/avatar.svg')" alt="" />
			</div>
			<p class="user-name" v-if="isOpen">فرناز فرضی</p>
			<p class="email" v-if="isOpen">mohsenfadaei97@gmail.com</p>
		</div>
		<div class="menu-item-container">
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/gray-dashboard-icon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">داشبود</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">بوم محتوایی</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/gray-dashboard-icon2.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">ابر محتوا</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">استراتژی محتوا</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">اکانت ها</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/partnersIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">همکاران</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">تحلیل وب سایت</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">معاشرت</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">مدیریت پروژه</div>
			</div>
			<div class="menu-item">
				<div class="icon-container">
					<img :src="this.$PATH.GET_IMAGE_PATH('vectors/dashboardIcon.svg')" alt="" />
				</div>
				<div class="menu-title" v-if="isOpen">خدمات محتوایی</div>
			</div>
		</div>
		<div class="logo-botton" v-if="isOpen">
			<img :src="this.$PATH.GET_IMAGE_PATH('vectors/Contemo-Logo.svg')" alt="" />
		</div>
		<div class="logo-botton" v-if="!isOpen">
			<img :src="this.$PATH.GET_IMAGE_PATH('vectors/justLogo.svg')" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			isOpen: false,
		};
	},

	methods: {
		openMenu() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.sidebar-component-container {
	width: 72px;
	height: 100%;
	background-color: #fff;
	border-radius: 20px 0 0 20px;
	transition: all 0.3s;
	padding: 24px;
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	.user-profile-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		.img-container {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.user-name {
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 23px;
			color: #000000;
			margin-top: 8px;
			margin-bottom: 0;
		}
		.email {
			font-weight: 300;
			font-size: 12px;
			line-height: 23px;
			color: #a5a5a5;
			margin-top: 4px;
		}
	}

	.menu-item-container {
		width: 120%;
		.menu-item {
			width: 100%;
			height: 32px;
			background-color: #fff;
			border-radius: 10px;
			transition: all 0.3s;
			cursor: pointer;
			margin-bottom: 16px;
			display: flex;
			justify-content: start;
			align-items: start;
			&:hover {
				transition: 0.5s;
				background-color: #4461f2;
				color: #fff;
				display: flex;
				justify-content: center;
			}
			.menu-title {
				margin-right: 16px;
				margin-top: 4px;
			}
		}
	}

	.logo-botton {
		height: 100px;
		width: 100%;
	}

	.close-container {
		position: absolute;
		top: 30px;
		left: 8px;
		transform: rotate(180deg);
		cursor: pointer;
	}
	.rotate {
		transform: rotate(0);
	}
}
.openSidebar {
	width: 260px;
	padding: 48px;
}
</style>
