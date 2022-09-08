<template>
	<div class="user-basket">
		<div class="row">
			<div class="col-lg-7">
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
			],
		};
	},
};
</script>

<style></style>
