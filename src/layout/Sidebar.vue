<template>
	<div class="sidebar-component-container">
		<div id="mySidenav" class="navbar-brand sidenav">
			<UserProfile />
			<br />
			<a href="javascript:void(0)" class="closebtn" @click="closeNav()"
				><img src="@/assets/vectors/closeIcon.svg" alt=""
			/></a>
			<div class="">
				<router-link class="w-75" to="/Dashboard"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon.svg" alt="" />
					داشبورد</router-link
				>
				<router-link class="w-75" to="/Calendar"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> بوم
					محتوایی</router-link
				>
				<router-link class="w-75" to="/image"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> ابر
					محتوایی</router-link
				>
				<router-link class="w-75" to="/Accounts"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> استراتژی
					محتوا</router-link
				>
				<router-link class="w-75" to="/Partners"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> اکانت ها
				</router-link>

				<router-link class="w-75" to="/Ticket"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> همکاران
				</router-link>
				<router-link class="w-75" to="UserSettings"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> تحلیل وب سایت
				</router-link>
				<router-link class="w-75" to="UserSettings"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> گفت و گو
				</router-link>
				<router-link class="w-75" to="UserSettings"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> مدیریت پروژه
				</router-link>
				<router-link class="w-75" to="UserSettings"
					><img class="hover-img" src="@/assets/vectors/dashboard-icon1.svg" alt="" /> خدمات محتوایی
				</router-link>

				<img class="image-logo mt-5" src="@/assets/vectors/Contemo-Logo.svg" alt="" />
			</div>
		</div>
		<div class="navbar-brand sidenav-close" id="menu">
			<div>
				<div id="main">
					<a class="menu" href="#" @click="openNav()">
						<img class="avatar" src="@/assets/vectors/test-avatar.svg" alt="avatar" />
						<img class="p-1" src="@/assets/vectors/closeIcon.svg" alt=""
			/>
					</a>
				</div>
				<div class="icons-close">
					<router-link class="icon-close" to="/Dashboard"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon.svg" alt="" />
					</router-link>
				</div>

				<div>
					<router-link class="icon-close" to="/Calendar"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div>
					<router-link class="icon-close" to="/image"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div class="w-100">
					<router-link class="icon-close" to="/Accounts"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>

				<div class="w-100">
					<router-link class="icon-close" to="/Partners"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>

				<div class="w-100">
					<router-link class="icon-close" to="/Ticket"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div class="w-100">
					<router-link class="icon-close" to="UserSettings"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div>
					<router-link class="icon-close" to="UserSettings"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div>
					<router-link class="icon-close" to="UserSettings"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<div>
					<router-link class="icon-close" to="UserSettings"
						><img class="img-icon" src="@/assets/vectors/dashboard-icon1.svg" alt="" />
					</router-link>
				</div>
				<img class="img-logo-close" src="@/assets/vectors/justLogo.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import UserProfile from '@/components/pageComponents/UserProfile/UserProfile.vue';
export default {
	components: {
		UserProfile,
	},
	data() {
		return {};
	},

	methods: {
		openNav() {
			document.getElementById('mySidenav').style.width = '260px';
			document.body.style.marginRight = '260px';
			document.getElementById('menu').style.display = 'none';
		},
		closeNav() {
			document.getElementById('mySidenav').style.width = '0';
			document.body.style.marginRight = '0px';
			document.getElementById('menu').style.display = 'inline';
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.sidenav {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: rgb(255, 255, 255);
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
	border-radius: 30px 0px 0px 30px;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
}
.icons-close {
	margin-top: 1rem;
}
.sidenav-close {
	height: 100%;
	width: 84px;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: rgb(255, 255, 255);
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
	border-radius: 30px 0px 0px 30px;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
}
.avatar {
	width: 38px;
	height: 38px;
}
.hover-img {
	color: rgb(255, 255, 255);
	background-color: aliceblue;
	border-radius: 0.2rem;
}
.img-icon {
	width: 18px;
}
.icon-close {
	margin-right: 2rem;
	margin-top: 1rem;
}
.img-logo-close {
	margin-right: 1.3rem;
	margin-top: 4rem;
}
// .icon-close:hover {
// 	background: #4461f2;
// 	box-shadow: 0px 12px 21px rgba(68, 97, 242, 0.15);
// 	border-radius: 10px;
// 	width: 4rem;
// }
.sidenav a {
	padding: 8px 20px 8px 32px;
	text-decoration: none;
	font-size: 18px;
	color: #a5a5a5;
	display: block;
	transition: 0.3s;
	margin-right: 12%;
}

.image-logo {
	width: 60%;
	margin-top: 4rem;
	margin-right: 19%;
}
.sidenav a:hover {
	background-color: #2734ff;
	color: white;
	width: 50%;
	border-radius: 10px;
	box-shadow: 0px 12px 21px rgba(68, 97, 242, 0.15);
}
.closebtn {
	width: 50%;
}
.sidenav .closebtn {
	position: absolute;
	width: 20%;
	top: 0;
	right: 11rem;
	font-size: 36px;
	margin-left: 50px;
	background-color: white;
}
.sidenav .closebtn:hover {
	background-color: white;
	color: #a5a5a5;
	box-shadow: 0px 0px 0px;
}
.logo {
	margin-right: 1rem;
}
.mydropdown {
	margin-top: 10%;
	margin-left: 0%;
	width: 140%;
}
.nametext {
	font-size: 1rem;
	font-weight: bold;
	margin-right: -3%;
	margin-top: -7%;
}
.nametext-title {
	font-size: 1.5rem;
	font-weight: bold;
	margin-right: -3%;
}
#main {
	transition: margin-left 0.5s;
	padding: 16px;
}
</style>
