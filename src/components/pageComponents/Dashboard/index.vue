<template>
	<div class="dashboard-component">
		<div class="partner-card-container">
			<PartnerCard
				:role="item.role"
				:name="item.name"
				:avatar="item.avatar"
				v-for="item in partnerData"
				:key="item.id"
			/>
		</div>
	</div>
</template>

<script>
// import BaseCard from '../../../components/elements/Card/index.vue';
import PartnerCard from '../../../components/elements/Card/partnerCard.vue';
export default {
	components: {
		// BaseCard,
		PartnerCard,
	},
	data() {
		return {
			partnerData: [
				{ id: 1, role: 'گرافیست', name: 'محسن فدایی', avatar: 'vectors/avatar.svg' },
				{ id: 2, role: 'گرافیست', name: 'محسن فدایی', avatar: 'vectors/avatar.svg' },
				{ id: 3, role: 'گرافیست', name: 'محسن فدایی', avatar: 'vectors/avatar.svg' },
				{ id: 4, role: 'گرافیست', name: 'محسن فدایی', avatar: 'vectors/avatar.svg' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.partner-card-container {
	display: flex;
	justify-content: space-between;
}
</style>
