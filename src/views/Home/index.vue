<template>
	<p>salam</p>
</template>

<script>
export default {
	methods: {
		async test() {
			const res = await this.$ApiServiceLayer.post(
				this.$PATH.RELATIVE_PATH.POST.PHONE_NUMBER_OTP_REQ,
				{ phone_number: '+98' + this.userPhoneNumber.substring(1) },
				
			);
		},
	},
};
</script>