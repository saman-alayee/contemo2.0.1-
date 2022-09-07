<template>
	<div class="dashboard-component">
		<div>
			<chipCard
				class="chipcard-component"
				background="#4461F2"
				color="white"
				title="افزودن همکار"
				width="154px"
				iconLeft="icon/plusIcon.svg"
				@click="openAddModal"
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
import chipCard from '@/components/elements/BaseChip/chipCard.vue';
export default {
	components: {
		PartnerCard,
		chipCard,
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
	methods: {
		openAddModal() {
			console.log('salam');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.chipcard-component {
	width: 150px;
}
</style>
