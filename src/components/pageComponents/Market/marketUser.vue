<template>
	<div class="market-user">
		<div class="market-header">
			<div class="row">
				<div class="col-6">
					<BaseInput
						class="search-box"
						type="text"
						name="search"
						v-model="model.email"
						placeholder="جستجو ..."
					/>
				</div>
			</div>
		</div>
		<span class="content-heading">تصاویر</span>
		<div class="image-container">
			<marketMediaCard
				v-for="image in images"
				:key="image.id"
				:title="image.title"
				:image="image.imageItem"
				:description="image.description"
				:price="image.price"
			/>
		</div>
		<span class="content-heading">صوت</span>
		<div class="video-container">
			<marketMediaCard
				v-for="item in audio"
				:key="item.id"
				:title="item.title"
				:audio="item.audioItem"
				:description="item.description"
				:price="item.price"
			/>
		</div>
		<span class="content-heading">ویدیو</span>
		<div class="audio-container">
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
export default {
	components: {
		marketMediaCard,
		BaseInput,
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
};
</script>

<style scoped>
.market-header {
	margin-bottom: 40px;
}
.search-box {
	width: 304px;
	height: 32px;
	border-radius: 21px !important;
}
.content-heading {
	position: relative;
	bottom: 4px;
	padding-right: 18px;
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
</style>
