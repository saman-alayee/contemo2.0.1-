<template>
	<div class="accounts-user">
		<span>اکانت لینک شده</span>

		<div class="d-flex">
			<accountCard
				v-for="item in accounts"
				:key="item.id"
				:accountName="item.accounName"
				:socialAccountName="item.socialAccountName"
				:username="item.username"
				class="mx-1"
			/>
		</div>
	</div>
</template>

<script>
import accountCard from '../../../components/elements/Card/accountCard.vue';
export default {
	components: {
		accountCard,
	},
	data() {
		return {
			accounts: [
				{
					accounName: 'اینستاگرام',
					socialAccountName: 'instagram',
					username: 'jhoneDoe@gmail.com',
				},
				{
					accounName: 'اینستاگرام',
					socialAccountName: 'instagram',
					username: 'jhoneDoe@gmail.com',
				},
				{
					accounName: 'اینستاگرام',
					socialAccountName: 'instagram',
					username: 'jhoneDoe@gmail.com',
				},
				{
					accounName: 'اینستاگرام',
					socialAccountName: 'instagram',
					username: 'jhoneDoe@gmail.com',
				},
			],
		};
	},
};
</script>

<style></style>
