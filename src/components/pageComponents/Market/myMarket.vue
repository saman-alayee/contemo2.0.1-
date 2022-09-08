<template>
	<div class="market-user">
		<div class="market-header">
			<div>
				<chipCard
					class="chipcard-component"
					background="#4461F2"
					color="white"
					title="فروش در بازارچه"
					iconLeft="icon/plusIcon.svg"
					@onClick="openAddModal"
				/>
			</div>
		</div>
		<span class="content-heading">بازارچه شما</span>
		<div class="my-media">
			<myMarketCard
				v-for="item in images"
				:key="item.id"
				:title="item.title"
				:description="item.description"
				:price="item.price"
				:image="item.imageItem"
				:likes="item.likes"
				:views="item.views"
				:purchases="item.purchases"
			/>
			<myMarketCard
				v-for="item in audios"
				:key="item.id"
				:title="item.title"
				:description="item.description"
				:price="item.price"
				:audio="item.audioItem"
				:likes="item.likes"
				:views="item.views"
				:purchases="item.purchases"
			/>
			<myMarketCard
				v-for="item in videos"
				:key="item.id"
				:title="item.title"
				:description="item.description"
				:price="item.price"
				:video="item.videoItem"
				:likes="item.likes"
				:views="item.views"
				:purchases="item.purchases"
			/>
		</div>
		<BaseModal ref="addPhotoModal">
			<template slot="base-content">
				<div class="add-photo-modal-container">
					<BaseCard class="add-photo-card">
						<template slot="content">
							<div class="modal-heading">
								<span>لطفا اطلاعات زیر را تکمیل کنید</span>
							</div>
							<div class="add-photo-inputs">
								<div class="right-column-inputs">
									<div class="form-group">
										<span class="input-heading"
											>عنوان تصویر خود را مشخص کنید</span
										>
										<div class="inside-input-container">
											<input type="text" name="" class="form-control" />
										</div>
									</div>
									<div class="form-group">
										<span class="input-heading"
											>متن توضیحات تصویر خود را در کادر زیر بنویسید</span
										>
										<div class="inside-input-container">
											<textarea
												name=""
												style="height: 120px"
												class="modal-text-area form-control"
											></textarea>
										</div>
									</div>
									<div class="form-group">
										<span class="input-heading"
											>قیمت محصول خود را مشخص کنید</span
										>
										<div class="inside-input-container">
											<input
												type="number"
												name=""
												placeholder=""
												class="form-control"
											/>
										</div>
									</div>
									<div class="form-group">
										<input class="checkbox" type="checkbox" />
										<span class="checkbox-text">
											میخواهم رایگان به اشتراک بگذارم</span
										>
									</div>
									<div class="add-photo-button">
										<BaseButton title="فروش در بازارچه" />
									</div>
								</div>
								<div class="left-column-inputs">
									<div class="upload-file">
										<img src="@/assets/img/icon/plus-icon.svg" />
										<span>بارگذاری فایل</span>
									</div>
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
import myMarketCard from '../../../components/elements/Card/myMarketCard.vue';
import chipCard from '@/components/elements/BaseChip/baseChip.vue';
import BaseModal from '@/components/elements/BaseModal/index.vue';
import BaseCard from '@/components/elements/Card/index.vue';
import BaseButton from '../../../components/elements/Button/Button.vue';
export default {
	components: {
		myMarketCard,
		chipCard,
		BaseModal,
		BaseCard,
		BaseButton,
	},

	data() {
		return {
			model: {
				serach: '',
			},
			images: [
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					imageItem: 'https://picsum.photos/200/300',
					likes: 750,
					views: 750,
					purchases: 750,
				},
			],
			audios: [
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
					likes: 750,
					views: 750,
					purchases: 750,
				},
			],
			videos: [
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
					likes: 750,
					views: 750,
					purchases: 750,
				},
			],
		};
	},
	methods: {
		openAddModal() {
			this.$refs.addPhotoModal.open();
		},
		closeAddModal() {
			this.$refs.addPhotoModal.close();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.market-header {
	margin-bottom: 48px;
}
.chipcard-component {
	width: 170px;
}
.add-photo-modal-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.add-photo-card {
		width: 940px;
		height: 680px;
	}
}
.modal-heading {
	margin-top: 24px;
	display: flex;
	justify-content: center;
	margin-bottom: 24px;
	span {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 20px;
		color: #000000;
	}
}
.add-photo-inputs {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	.right-column-inputs {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 450px;
		margin-right: 16px;
	}
	.left-column-inputs {
		display: flex;
		flex-direction: column;
		width: 450px;
	}
}
.form-group {
	margin: 16px;
	.input-heading {
		display: block;
		color: #000000;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 20px;
		margin-bottom: 16px;
	}
	input[type='text'],
	input[type='number'],
	.modal-text-area {
		width: 400px;
		height: 50px;
		background: #f4f4f4;
		border-radius: 10px;
		border: none;
		&:focus {
			outline: none;
			box-shadow: none;
		}
	}
	input[type='checkbox'] {
		height: 16px;
		width: 16px;
		position: relative;
		top: 4px;
		cursor: pointer;
	}
	.checkbox-text {
		margin-right: 8px;
		color: #000000;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 20px;
		margin-bottom: 16px;
	}
}
.add-photo-button {
	width: 400px;
	margin-right: 16px;
	margin-top: 24px;
}
.upload-file {
	margin: 16px;
	width: 400px;
	height: 280px;
	background: #f4f4f4;
	border: 2px dashed #4461f2;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	img {
		width: 28px;
		height: 28px;
		cursor: pointer;
	}
	span {
		margin-top: 8px;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color: #4461f2;
	}
}
.my-media {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.heading-container {
	display: flex;
	flex-direction: row;
	width: 900px;
}
.content-heading {
	position: relative;
	bottom: 4px;
	padding-right: 30px;
	margin-top: 16px;
	font-weight: 600;
	font-size: 20px;
	line-height: 23px;
	color: #000000;
}
.audio-container,
.video-container,
.image-container {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}
.checkbox {
	accent-color: $color-primary;
}
</style>
