<template>
	<h1>home page</h1>
</template>

<script>
export default {
	name: 'home',
	components: {},
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
