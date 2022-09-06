<template>
	<div class="dashboard-component">
		<div>
			<chipCardRight
				class="chipcard-component"
				icon="icon/plusIcon.svg"
				background="#4461F2"
				color="white"
				title="افزودن همکار "
			/>
		</div>
		<div class="row">
			<PartnerCard
				v-for="item in partnerData"
				:key="item.id"
				:role="item.role"
				:name="item.name"
				:avatar="item.avatar"
				:hasIcon="true"
				class="mx-1 mt-1"
			/>
		</div>
	</div>
</template>

<script>
import PartnerCard from '@/components/elements/Card/partnerCard.vue';
import chipCardRight from '@/components/elements/Card/chipCardRight.vue';
export default {
	components: {
		PartnerCard,
		chipCardRight,
	},
	data() {
		return {
			partnerData: [
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.chipcard-component {
	width: 150px;
}
</style>
