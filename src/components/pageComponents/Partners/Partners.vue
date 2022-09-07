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
					<BaseCard class="add-partner-card" closeBtn="true">
						<template slot="content">
							<div class="inside-modal-container">
								<div class="close-btn">X</div>
								<div class="modal-container mt-3">
									<p>لطفا آدرس ایمیل همکار خود را وارد کنید</p>
									<div class="input-container">
										<input class="form-control input-form" type="text" />
									</div>
								</div>
								<div class="modal-container mt-3">
									<p>لطفا سطح دسترسی همکار خود را مشخص کنید</p>
									<div class="input-container">
										<select class="form-control" id="exampleFormControlSelect1">
											<option disabled>فقط امکان مشاهده</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
									<div class="button-container"><Button title="ذخیره تغییرات" /></div>
								</div>
							</div>
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
import Button from '../../elements/Button/Button.vue';
export default {
	components: {
		PartnerCard,
		chipCard,
		BaseModal,
		BaseCard,
		Button,
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
		width: 550px;
		height: 510px;
		position: relative;
	}
}
.close-btn {
	position: absolute;
	top: 15px;
	right: 20px;
	cursor: pointer;
}
.modal-container {
	padding: 8px;
	p {
		font-style: normal;
		font-weight: 500;
		font-size: 23px;
		line-height: 20px;
		color: #000000;
	}
}

.input-container {
	padding-top: 16px;
	input {
		background-color: #f5f5f5;
		border: none;
		height: 60px;
		border-radius: 10px;
	}
}
.input-container {
	padding-top: 16px;
	select {
		background-color: #f5f5f5;
		border: none;
		height: 60px;
		border-radius: 10px;
	}
}
.button-container {
	padding-top: 52px;
	button {
		height: 60px;
	}
}
</style>
