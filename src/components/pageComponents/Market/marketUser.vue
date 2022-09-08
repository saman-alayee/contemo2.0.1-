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
import allPhotos from '../../pageComponents/Market/allPhotos.vue';
import allAudios from '../../pageComponents/Market/allAudios.vue';
import allVideos from '../../pageComponents/Market/allVideos.vue';
export default {
	components: {
		marketMediaCard,
		BaseInput,
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

<style scoped>
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
</style>
