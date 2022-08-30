<template>
	<div class="container">
		<div class="d-flex justify-content-center">
			<img class="avatar" src="@/assets/vectors/test-avatar.svg" alt="" />
		</div>
		<div class="d-flex justify-content-center h-25"><p class="name-text">ممد ممدیان</p></div>
		<div class="d-flex justify-content-center"><p class="email-text">mmd.mmdian@gmail.com</p></div>
	</div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.avatar {
	vertical-align: middle;
	width: 70px;
	height: 70px;
	border-radius: 5rem;
	background-color: #ded5fb;
	margin-top: -7%;
}
.name-text {
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 23px;
	counter-reset: #000;
}
.email-text {
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 23px;
	color: #a5a5a5;
}
</style>
