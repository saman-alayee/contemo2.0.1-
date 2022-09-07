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
			<div class="go-back-button col-2">
				<img src="@/assets/img/icon/arrow-right.svg" alt="" />
				<span>بازگشت</span>
			</div>
		</div>
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
		};
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
.go-back-button {
	color: #4461f2;
	text-align: right;
	position: relative;
	top: 16px;
	right: 184px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 23px;
	cursor: pointer;
}
.image-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
