<template>
	<div class="register">
		<div class="container-fluid">
			<div class="login-user">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<img class="mt-3" src="@/assets/vectors/Contemo-Logo.svg" />
						</div>
						<div class="col-lg-6 d-flex app-ltr">
							<div class="mt-4">
								<router-link class="mt-4 px-4 login-router" to="/login"
									>ورود</router-link
								>
							</div>
							<div class="mt-4">
								<router-link class="mt-4 login-router" to="/register"
									>ثبت نام</router-link
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row form-base-container	">
				<div class="col-lg-8 row w-50">
					<div class="flex-column align-items-center mt-5 d-flex justify-content-center">
						<h1 class="" style="padding-right: 120px">به کانتمو خوش آمدید</h1>
						<h5 style="padding-right: 120px">
							اگر قبلا ثبت نام کردی میتونی از
							<router-link to="/login">اینجا</router-link> وارد حسابت بشی
						</h5>
					</div>
					<div class="col-lg-6">
						<img
							class="register_image mt-5"
							src="@/assets/vectors/register-vector.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="col-lg-4 mt-5">
					<div class="form-heading">
						<h5>
							لطفا برای ورود کد ارسال شده به شماره تلفنی که در مرحله قبل وارد کردین رو
							در کادر زیر وارد کنید.
						</h5>
					</div>
					<div class="form-group">
						<BaseInput class="input-form" />
						<BaseInput class="input-form" />
						<BaseInput class="input-form" />
						<BaseInput class="input-form" />
						<BaseInput class="input-form" />
						<BaseInput class="input-form" />
					</div>
					<div class="resend-code">
						<h6>00:56 تا ارسال مجدد کد</h6>
					</div>
					<button
						type="submit"
						class="btn btn-primary color-primary w-100"
						:disabled="!valid"
					>
						ورود
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseInput from '@/components/elements/BaseInput/index.vue';
export default {
	components: {
		BaseInput,
	},
};
</script>
<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.register {
	width: 100%;
	height: 100vh;
	background-color: $color-white;
}
.color-primary {
	background-color: $color-primary;
}
.form-group {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 10px;
	margin-top: 96px;
}
.form-heading {
	text-align: center;
}
.form-heading h5 {
	line-height: 35px;
	margin-top: 104px;
	font-weight: 500;
}
.input-form {
	width: 50px;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 10px;
}
.input-form:focus {
	border: 1px solid $color-warning;
}
.resend-code h6 {
	color: #9ca3af;
	padding-top: 48px;
	padding-bottom: 40px;
}
.register_image {
	width: 500px;
	margin-top: -10%;
}
.login-router {
	color: $color-secoundary;
	font-weight: 500;
	font-size: 15px;
}
.register-router {
	background: #fafafa;
	padding: 10px 50px;
	border-radius: 21px;
	box-shadow: rgba(0, 0, 0, 0.05);
	font-weight: 700;
	font-size: 17px;
}
.form-base-container {
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
