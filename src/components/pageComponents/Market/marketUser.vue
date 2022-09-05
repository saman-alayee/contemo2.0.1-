<template>
	<div class="market-user">
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
export default {
	components: {
		marketMediaCard,
	},
	data() {
		return {
			images: [
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					imageItem: 'https://picsum.photos/200/300',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					imageItem: 'https://picsum.photos/200/300',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					imageItem: 'https://picsum.photos/200/300',
				},
			],
			audio: [
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					audioItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
			],
			videos: [
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
				{
					title: 'slm',
					description: 'bye',
					price: 20000,
					videoItem: 'https://static.cdn.asset.aparat.com/avt/47439137_15s.mp4',
				},
			],
		};
	},
};
</script>

<style>
.content-heading {
	position: relative;
	bottom: 16px;
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
