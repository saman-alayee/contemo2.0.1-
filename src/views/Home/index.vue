<template>
	<ForgetPasswordUser />
</template>

<script>
import ForgetPasswordUser from '../../components/pageComponents/ForgetPassword/forgetPasswordUser.vue';
export default {
	name: 'home',
	components: { ForgetPasswordUser },
	methods: {
		async test() {
			const res = await this.$ApiServiceLayer.post(
				this.$PATH.RELATIVE_PATH.POST.PHONE_NUMBER_OTP_REQ,
				{ phoneNumber: '+98' + this.userPhoneNumber.substring(1) },
			);
			console.log(res);
		},
	},
};
</script>
