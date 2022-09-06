<template>
	<div class="market-user">
		<div class="market-header">
			<div class="sell-in-market"></div>
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
	</div>
</template>

<script>
import myMarketCard from '../../../components/elements/Card/myMarketCard.vue';
export default {
	components: {
		myMarketCard,
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
};
</script>

<style scoped>
.market-header {
	margin-bottom: 48px;
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
.see-all {
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
