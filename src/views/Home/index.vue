<template>
	<SelectSideUser />
</template>

<script>
import SelectSideUser from '@/components/elements/SelectSide/SelectSideUser.vue';
export default {
	name: 'home',
	components: { SelectSideUser },
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
