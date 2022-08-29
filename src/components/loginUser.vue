<template>
	<div class="login-user">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<img class="mt-3" src="@/assets/vectors/Contemo-Logo.svg" />
				</div>
				<div class="col-lg-6 d-flex app-ltr">
					<div class="mt-4">
						<router-link class="mt-4 login-router" to="/login">ورود</router-link>
					</div>
					<router-link class="mt-4 px-4 register-router" to="/register">ثبت نام</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loginUser',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.login-user {
	width: 100%;
	height: 100vh;
	background: #f5f5f5;
}
.login-router {
	background: #fafafa;
	padding: 10px 50px;
	border-radius: 21px;
    box-shadow: rgba(0, 0, 0, 0.05);
    font-weight: 700;
    font-size: 17px;
}
.register-router{
    color: $color-secoundary;
    font-weight: 500;
    font-size: 15px;
}
</style>
