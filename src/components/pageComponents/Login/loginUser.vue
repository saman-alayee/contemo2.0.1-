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
								<router-link class="mt-4 login-router" to="/login"
									>ورود</router-link
								>
							</div>
							<router-link class="mt-4 px-4 register-router" to="/register"
								>ثبت نام</router-link
							>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 row w-50">
					<div class="col-lg-2 mt-5">
						<p>با این حساب وارد شو</p>
					</div>
					<div class="col-lg-10">
						<img class="register_image" src="@/assets/vectors/loginVector.svg" alt="" />
					</div>
				</div>
				<div class="col-lg-4 mt-5">
					<validation-observer v-slot="{ valid }">
						<form class="app" @submit.prevent="doLogin">
							<div class="form-group">
								<validation-provider
									name="آدرس ایمیل"
									rules="required|email"
									:bails="false"
									v-slot="{ errors }"
								>
									<BaseInput
										ref="email"
										type="email"
										name="email"
										v-model="model.email"
										:errors="errors"
										placeholder="آدرس ایمیل"
									/>
								</validation-provider>
							</div>
							<div class="form-group">
								<BaseInput
									ref="password"
									type="password"
									name="password"
									v-model="model.password"
									placeholder="رمز عبور"
								/>
							</div>
							<div class="rtl">
								<span class="text-secondary app-pointer">بازیابی رمز عبور</span>
							</div>
							<button
								type="submit"
								class="btn btn-primary mt-3 color-primary w-100"
								:disabled="!valid"
							>
								ورود
							</button>
							<div class="hr-sect mt-3">با این حساب وارد شو</div>
							<div class="row mt-2">
								<div class="col-md-4">
									<button class="btn btn-social btn-light">
										<img src="@/assets/vectors/Facebook.svg" alt="" />
									</button>
								</div>
								<div class="col-md-4">
									<button class="btn btn-social btn-light">
										<img src="@/assets/vectors/linkedin.svg" alt="" />
									</button>
								</div>
								<div class="col-md-4">
									<button class="btn btn-social btn-light">
										<img src="@/assets/vectors/googleIcon.svg" alt="" />
									</button>
								</div>
							</div>
						</form>
					</validation-observer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseInput from '@/components/elements/BaseInput/index.vue';
export default {
	data() {
		return {
			model: {
				email: '',
				password: '',
			},
			email: '',
		};
	},
	components: {
		BaseInput,
	},
	methods: {
		async doLogin() {
			const res = await this.$ApiServiceLayer.post(
				this.$PATH.RELATIVE_PATH.POST.LOGIN,
				this.model,
			);
			console.log(res);
		},
	},
};
</script>
<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.color-primary {
	background-color: $color-primary;
}
.input-form {
	box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 10px;
}
.input-form:active {
	box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border: 1px solid #fcbf00;
	border-radius: 10px;
}
.border_primary:active {
	border: 1px solid $color-warning;
}
.register {
	background-color: $color-white;
}
.register_image {
	width: 75%;
	margin-top: -10%;
}
.login-user {
	width: 100%;
	height: auto;
	background: #f4f4f4;
}
.login-router {
	background: #fafafa;
	padding: 10px 50px;
	border-radius: 21px;
	box-shadow: rgba(0, 0, 0, 0.05);
	font-weight: 700;
	font-size: 17px;
}
.register-router {
	color: $color-secoundary;
	font-weight: 500;
	font-size: 15px;
}
.hr-sect {
	display: flex;
	flex-basis: 100%;
	align-items: center;
	color: $color-secoundary;
	margin: 8px 0px;
	font-size: 1rem;
}

.hr-sect::before,
.hr-sect::after {
	content: '';
	flex-grow: 1;
	background: $color-secoundary;
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 8px;
}
.btn-social {
	background: #f6f6f6;
	border: 1px solid #dddfdd;
	border-radius: 10px;
	width: 100%;
}
</style>