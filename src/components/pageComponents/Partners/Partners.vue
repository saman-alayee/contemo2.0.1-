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
				@onClick="openAddModal"
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
		<BaseModal ref="addPartnerModal">
			<template slot="base-content">
				<div class="add-partner-modal-container">
					<BaseCard class="add-partner-card">
						<template slot="content">
							<p>salam</p>
						</template>
					</BaseCard>
				</div>
			</template>
		</BaseModal>
	</div>
</template>

<script>
import PartnerCard from '@/components/elements/Card/partnerCard.vue';
import chipCard from '@/components/elements/BaseChip/baseChip.vue';
import BaseModal from '@/components/elements/BaseModal/index.vue';
import BaseCard from '@/components/elements/Card/index.vue';
export default {
	components: {
		PartnerCard,
		chipCard,
		BaseModal,
		BaseCard,
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
			this.$refs.addPartnerModal.open();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.chipcard-component {
	width: 150px;
}
.add-partner-modal-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.add-partner-card {
		width: 500px;
		height: 500px;
	}
}
</style>
