<template>
	<div class="market-media-card">
		<BaseCard class="white-card">
			<template slot="content">
				<div class="media-container">
					<img v-if="image" :src="image" alt="" />
					<div v-if="video" class="video-container">
						<video controls class="video">
							<source :src="video" type="video/mp4" />
						</video>
					</div>
					<audio v-if="audio" controls>
						<source :src="audio" type="audio/ogg" />
					</audio>
				</div>
				<div class="content-container">
					<span>{{ title }}</span>
					<p>{{ description }}</p>
				</div>
				<div class="market-card-footer row">
					<div class="price col-6">
						<span class="amount">{{ price }}</span>
						<span class="currency">تومان</span>
					</div>
					<div class="col-6" @click="openModal">
						<AddItem
							class="learn-more-icon"
							:height="addIconStyle.height"
							:width="addIconStyle.width"
						/>
					</div>
				</div>
			</template>
		</BaseCard>
		<BaseModal ref="addPartnerModal">
			<template slot="base-content">
				<div class="add-partner-modal-container">
					<BaseCard padding="16px" class="add-partner-card" closeBtn="true">
						<template slot="content">
							<div class="inside-modal-container">
								<div class="close-btn" @click="closeModal">
									<img src="@/assets/img/icon/closeGray.svg" alt="" />
								</div>
								<div class="modal-container">
									<div>
										<img src="@/assets/img/vectors/modalPictures.svg" alt="" />
									</div>
								</div>
								<div class="info-container">
									<div class="avatar-container">
										<img src="@/assets/img/vectors/avatar.svg" alt="" />
									</div>
									<div class="names-container">
										<h3>سامان علایی</h3>
										<p>saman.alaii10@gmail.com</p>
									</div>
								</div>
								<div class="icon-container">
									<div>
										<p>5555</p>
									</div>
									<div class="heart-container">
										<img src="@/assets/img/icon/money-icon.svg" alt="" />
									</div>
								</div>

								<div class="text-container">
									<h1>عنوان تصویر</h1>
									<h5>
										لـورم ایپسوم متن ساختگی با تولید سادگی از نامفهوم از صنعت چاپ، و با استفاده
									</h5>
								</div>
								<div class="modal-container">
									<div class="button-container">
										<Button title="افزودن به سبد خرید" />
									</div>
									<div>
										<p>353,000 تومان</p>
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
import AddItem from '../AddItem/index.vue';
import BaseModal from '@/components/elements/BaseModal/index.vue';
import BaseCard from '@/components/elements/Card/index.vue';
import Button from '../../elements/Button/Button.vue';

export default {
	components: {
		BaseCard,
		AddItem,
		BaseModal,
		Button,
	},
	data() {
		return {
			addIconStyle: {
				height: '25px',
				width: '25px',
			},
		};
	},
	props: {
		video: {
			type: String,
		},
		audio: {
			type: String,
		},
		image: {
			type: String,
		},
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		price: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		openModal() {
			this.$refs.addPartnerModal.open();
		},
		closeModal() {
			this.$refs.addPartnerModal.close();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.market-media-card {
	width: 193px;
	height: auto;
	margin: 16px 8px;
}
.white-card {
	padding: 8px;
}
.media-container {
	img {
		position: relative;
		left: 4px;
		top: -4px;
		width: 185px;
		height: 135px;
		border-radius: 20px 20px 0 0;
	}
	.video-container {
		position: relative;
		left: 4px;
		top: -4px;
		border-radius: 20px 20px 0 0;
		overflow: hidden;
		width: 185px;
		height: 135px;
		video {
			width: 185px;
			height: 135px;
			position: relative;
			left: 0;
			top: -16px;
		}
	}
	audio {
		position: relative;
		left: 4px;
		top: -4px;
		width: 185px;
		height: 57px;
		border-radius: 20px 20px 0 0;
	}
}
.content-container {
	height: 60px;
	span {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: #000000;
	}
	p {
		padding-top: 4px;
		font-style: normal;
		font-weight: 300;
		font-size: 10px;
		line-height: 16px;
		text-align: right;
		color: #a5a5a5;
	}
}
.market-card-footer {
	display: flex;
	flex-direction: row;
	width: 120px;
	padding-right: 16px;
	position: relative;
	top: 5px;
}
.price {
	padding-right: 2px;
	position: relative;
	top: 10px;
	.amount {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 23px;
		text-align: right;
		color: #4461f2;
	}
	.currency {
		padding: 4px;
		font-style: normal;
		font-weight: 300;
		font-size: 14px;
		line-height: 16px;
		text-align: right;
		color: #a5a5a5;
	}
}
.learn-more-icon {
	text-align: left;
	position: relative;
	right: 72px;
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

.button-container {
	display: flex;
	flex-direction: row;
	button {
		height: 60px;
		width: 462px;
	}
}
.text-container {
	padding: 16px 32px;
	p {
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 20px;
		color: #000000;
	}
}
.info-container {
	display: flex;
	flex-direction: row;
	justify-content: start;
	padding: 0px 16px;
}
.avatar-container {
	padding: 0px 32px;
	img {
		width: 64px;
	}
}
.names-container {
	p {
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		color: #a5a5a5;
	}
	h3 {
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		color: #000000;
	}
}
.icon-container {
	padding: 0px 50px;
	display: flex;
	justify-content: end;
	margin-top: -6%;
	p {
		font-weight: 300;
		padding-top: 8px;
		font-size: 12px;
		line-height: 23px;
		color: #a5a5a5;
	}
}
.add-partner-modal-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.add-partner-card {
		width: 750px;
		height: 850px;
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
	padding: 36px 24px;
	display: flex;
	flex-direction: row;
	p {
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 20px;
		color: #4461f2;
		padding-right: 32px;
		padding-top: 16px;
	}
	img {
		width: 673px;
		height: 452px;
	}
}
</style>
