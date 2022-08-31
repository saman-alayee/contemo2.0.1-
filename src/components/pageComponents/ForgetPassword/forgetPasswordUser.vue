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
					<div class="flex-column align-items-center mt-5 d-flex justify-content-center">
						<h1 class="" style="padding-right: 200px">به کانتمو خوش آمدید</h1>
						<h5
							style="
								padding-right: 200px;
								width: 470px;
								line-height: 2rem;
								text-align: center;
							"
						>
							لینک بازیابی رمز عبور به ایمیل شما ارسال خواهد شد
						</h5>
					</div>
					<div class="col-lg-6">
						<img
							class="login_image mt-5"
							src="@/assets/vectors/login-vector.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="col-lg-4 mt-5">
					<validation-observer v-slot="{ valid }">
						<form class="app" @submit.prevent="doLogin" style="margin-top: 11rem">
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
							<button
								type="submit"
								class="btn btn-primary mt-3 color-primary w-100"
								:disabled="!valid"
							>
								بازیابی رمز عبور
							</button>
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
			},
		};
	},
	components: {
		BaseInput,
	},
	methods: {
		async sendEmail() {
			const res = await this.$ApiServiceLayer.post(this.$PATH.RELATIVE_PATH.POST.LOGIN, {
				email: this.model.email,
			});
			console.log(res);
		},
	},
};
</script>
<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.register {
	width: 100%;
	height: 100vh;
}
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
.login_image {
	width: 500px;
	margin-top: -10%;
}
.login-user {
	width: 100%;
	height: auto;
	background: #f4f4f4;
}
.login-router {
	padding: 10px 50px;
}
.register-router,
.login-router {
	color: $color-secoundary;
	font-weight: 500;
	font-size: 15px;
}
</style>
