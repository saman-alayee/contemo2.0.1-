<template>
	<div class="user-basket">
		<div class="go-back-button col-lg-12 mb-3" @click="goToMarket">
			<img src="@/assets/img/icon/arrow-right.svg" alt="" />
			<span>بازگشت</span>
		</div>
		<div class="row">
			<div class="col-lg-7 basket-card-container p-2">
				<basketCard
					v-for="item in test"
					:key="item.id"
					:title="item.title"
					:description="item.description"
					:price="item.price"
					:cover="item.cover"
				/>
			</div>
			<div class="col-lg-5">
				<totalBuyCard :price="234000" />
			</div>
		</div>
	</div>
</template>

<script>
import totalBuyCard from '@/components/elements/Card/totalBuyCard.vue';
import basketCard from '@/components/elements/Card/basketCard.vue';
export default {
	components: { totalBuyCard, basketCard },
	data() {
		return {
			test: [
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
				{
					title: 'عکس برای تست',
					price: 234000,
					description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید',
					cover: 'https://picsum.photos/200/300',
				},
			],
		};
	},
	methods: {
		goToMarket() {
			return this.$router.push('/market');
		},
	},
};
</script>

<style scoped>
.go-back-button {
	color: #4461f2;
	text-align: right;
	position: relative;
	top: 16px;
	right: 1005px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 23px;
	cursor: pointer;
}
.basket-card-container {
	background: #fff;
	border-radius: 30px;
}
</style>
