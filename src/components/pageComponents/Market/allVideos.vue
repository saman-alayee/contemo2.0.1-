<template>
	<div class="market-user">
		<div class="video-container">
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
export default {
	components: {
		marketMediaCard,
	},
	data() {
		return {
			model: {
				serach: '',
			},
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
.video-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
