<template>
	<div class="market-user">
		<div class="market-header">
			<div class="row">
				<div class="col-6">
					<BaseInput
						class="search-box"
						type="text"
						name="search"
						v-model="model.search"
						placeholder="جستجو ..."
					/>
				</div>
			</div>
		</div>
		<button class="btn btn-primary" @click="openModal">click</button>
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
		<div class="heading-container row">
			<span class="content-heading col-10">تصاویر</span>
			<div class="go-back-button col-2" @click="seeAllPhotos" v-if="allPhotos">
				<img src="@/assets/img/icon/arrow-right.svg" alt="" />
				<span>بازگشت</span>
			</div>
			<div class="see-all col-2" @click="seeAllPhotos" v-else>
				<span> مشاهده همه </span>
				<img src="@/assets/img/icon/arrow-left.svg" alt="" />
			</div>
		</div>
		<allPhotos v-if="allPhotos" class="application-animation" />
		<div class="image-container" v-else>
			<marketMediaCard
				v-for="image in images"
				:key="image.id"
				:title="image.title"
				:image="image.imageItem"
				:description="image.description"
				:price="image.price"
				class="application-animation"
			/>
		</div>
		<div class="heading-container row">
			<span class="content-heading col-10">صوت </span>
			<div class="go-back-button col-2" @click="seeAllAudios" v-if="allAudios">
				<img src="@/assets/img/icon/arrow-right.svg" alt="" />
				<span>بازگشت</span>
			</div>
			<div class="see-all col-2" @click="seeAllAudios" v-else>
				<span> مشاهده همه </span>
				<img src="@/assets/img/icon/arrow-left.svg" alt="" />
			</div>
		</div>
		<allAudios v-if="allAudios" class="application-animation" />
		<div class="audio-container">
			<marketMediaCard
				v-for="item in audio"
				:key="item.id"
				:title="item.title"
				:audio="item.audioItem"
				:description="item.description"
				:price="item.price"
			/>
		</div>
		<div class="heading-container row">
			<span class="content-heading col-10">ویدیو</span>
			<div class="go-back-button col-2" @click="seeAllVideos" v-if="allVideos">
				<img src="@/assets/img/icon/arrow-right.svg" alt="" />
				<span>بازگشت</span>
			</div>
			<div class="see-all col-2" @click="seeAllVideos" v-else>
				<span> مشاهده همه </span>
				<img src="@/assets/img/icon/arrow-left.svg" alt="" />
			</div>
		</div>
		<allVideos v-if="allVideos" class="application-animation" />
		<div class="video-container" v-else>
			<marketMediaCard
				v-for="video in videos"
				:key="video.id"
				:title="video.title"
				:video="video.videoItem"
				:description="video.description"
				:price="video.price"
			/>
		</div>
	</div>
</template>

<script>
import marketMediaCard from '../../elements/Card/marketMediaCard.vue';
import BaseInput from '../../elements/BaseInput/index.vue';
import BaseModal from '@/components/elements/BaseModal/index.vue';
import BaseCard from '@/components/elements/Card/index.vue';
import Button from '../../elements/Button/Button.vue';
import allPhotos from '../../pageComponents/Market/allPhotos.vue';
import allAudios from '../../pageComponents/Market/allAudios.vue';
import allVideos from '../../pageComponents/Market/allVideos.vue';
export default {
	components: {
		marketMediaCard,
		BaseInput,
		BaseCard,
		BaseModal,
		Button,
		allPhotos,
		allAudios,
		allVideos,
	},
	data() {
		return {
			allPhotos: false,
			allAudios: false,
			allVideos: false,
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
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					imageItem: 'https://picsum.photos/200/300',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					imageItem: 'https://picsum.photos/200/300',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					imageItem: 'https://picsum.photos/200/300',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					imageItem: 'https://picsum.photos/200/300',
				},
			],
			audio: [
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان صوت',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
			],
			videos: [
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'عنوان تصویر',
					description:
						'لـورم ایپسوم متن ساختگی با تولید سادگی از  نامفهوم از صنعت چاپ، و با استفاده',
					price: 355000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
			],
		};
	},
	methods: {
		openModal() {
			this.$refs.addPartnerModal.open();
		},
		closeModal() {
			this.$refs.addPartnerModal.close();
		},
		seeAllPhotos() {
			this.allPhotos = !this.allPhotos;
		},
		seeAllAudios() {
			this.allAudios = !this.allAudios;
		},
		seeAllVideos() {
			this.allVideos = !this.allVideos;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.market-header {
	margin-bottom: 48px;
}
.search-box {
	width: 304px;
	height: 32px !important;
	border-radius: 21px !important;
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
.see-all,
.go-back-button {
	color: #4461f2;
	text-align: right;
	position: relative;
	top: 16px;
	right: 160px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 23px;
	cursor: pointer;
}
.audio-container,
.video-container,
.image-container {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
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
</style>
