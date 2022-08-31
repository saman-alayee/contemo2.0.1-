<template>
	<SelectSideUSer/>
</template>

<script>
import SelectSideUSer from '@/components/SelectSideUser.vue';
export default {
	name: 'SelectSide',
	components: {
		SelectSideUSer,
	},
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
