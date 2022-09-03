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
			<div class="row form-base-container">
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
				<div class="col-lg-4 mt-1">
					<div class="form-heading">
						<h5>
							لطفا برای ورود کد ارسال شده به شماره تلفنی که در مرحله قبل وارد کردین رو
							در کادر زیر وارد کنید.
						</h5>
					</div>
					<div class="input-managment">
						<div class="hidden-input">
							<input
								v-model="verificationCode"
								oninput="this.value=this.value.slice(0,6)"
								type="number"
							/>
						</div>

						<div class="form-group">
							<div class="visible-input">{{ verificationCode[0] }}</div>
							<div class="visible-input">{{ verificationCode[1] }}</div>
							<div class="visible-input">{{ verificationCode[2] }}</div>
							<div class="visible-input">{{ verificationCode[3] }}</div>
							<div class="visible-input">{{ verificationCode[4] }}</div>
							<div class="visible-input">{{ verificationCode[5] }}</div>
						</div>
					</div>
					<div class="resend-code">
						<div class="countdown-container">
							<h6
								:class="{ resendCodeColor: resendCode }"
								v-if="resendCode"
								@click="sendAgainCode"
								type="button"
								class="py-2"
							>
								ارسال مجدد کد
							</h6>
						</div>
						<div class="countdown-container">
							<h6 v-if="timer" class="text-center py-2">
								{{ second }} : {{ minute }} تا ارسال مجدد کد
							</h6>
						</div>
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
export default {
	data() {
		return {
			verificationCode: '',
			second: 59,
			minute: 1,
			timer: true,
			resendCode: false,
		};
	},
	methods: {
		sendAgainCode() {
			this.resendCode = true;
		},
	},

	mounted() {
		setInterval(() => {
			this.second--;
			if (this.second === 0) {
				this.second = 59;
			} else if (this.resendCode === true) {
				this.resendCode = false;
				this.timer = true;
				this.minute = 1;
			}
		}, 1000);
		setInterval(() => {
			this.minute--;
			if (this.minute === -1) {
				this.timer = false;
				this.resendCode = 'send';
				this.minute = 0;
			}
		}, 59 * 1000);
	},
};
</script>
<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.resendCodeColor {
	color: $color-primary !important ;
}
.register {
	width: 100%;
	height: 100vh;
	background-color: $color-white;
}
.color-primary {
	background-color: $color-primary;
}
.login-router {
	color: $color-secoundary;
	font-weight: 500;
	font-size: 15px;
}
.register_image {
	width: 500px;
	margin-top: -10%;
}
.form-base-container {
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form-heading h5 {
	line-height: 35px;
	font-weight: 500;
	text-align: center;
	text-align: center;
}
.input-managment {
	width: 100%;
	height: 70px;
	position: relative;
}
.form-group {
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 10px;
	margin-top: 80px;
}
.visible-input {
	width: 50px;
	height: 50px;
	background: #ffffff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.hidden-input {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 222;
	top: 0;
	left: 0;
	opacity: 0;
	input {
		width: 100%;
		height: 100%;
	}
}
.countdown-container {
	display: flex;
	justify-content: start;
}
.resend-code h6 {
	color: #9ca3af;
	size: 16px;
}
.register_image {
	width: 500px;
	margin-top: -10%;
}
</style>
