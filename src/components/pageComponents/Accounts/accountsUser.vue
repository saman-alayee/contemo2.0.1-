<template>
	<div class="accounts-user">
		<span class="account-header">اکانت های لینک شده</span>

		<div class="account-body">
			<div class="linked-accounts">
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
		<div class="social-accounts">
			<span>اکانت هایی که میتوانید لینک کنید</span>
			<div class="social-media">
				<socialCard
					v-for="item in socialMedia"
					:key="item.id"
					:socialAccountName="item.socialAccountName"
					:accountName="item.accountName"
					:icon="item.icon"
				/>
			</div>
		</div>
		<div class="account-footer">
			<span class="footer-heading">شما چی دوست دارین؟</span>
			<span class="footer-text">
				شما میتونین اسم هر پلتفرمی که دوست دارین به کانتمو اضافه بشه و بتونین ازش استفاده
				کنید رو تو کادر پایین بنویسید تا ما زمینه اضافه شدنش رو فراهم کنید
			</span>
		</div>
	</div>
</template>

<script>
import accountCard from '../../../components/elements/Card/accountCard.vue';
import socialCard from '../../../components/elements/Card/socialCard.vue';
export default {
	components: {
		accountCard,
		socialCard,
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
			socialMedia: [
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '@/assets/img/vectors/aparat.svg',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
				{
					accountName: 'اینستاگرام',
					socialAccountName: 'instagram',
					icon: '',
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.accounts-user {
	margin-top: 40px;
}
.account-header {
	position: relative;
	bottom: 16px;
	padding-right: 18px;
	font-weight: 600;
	font-size: 20px;
	line-height: 23px;
	color: #000000;
}
.account-body {
	height: 450px;
}
.linked-accounts {
	display: flex;
	flex-wrap: wrap;
}
.social-accounts {
	span {
		display: block;
		padding-right: 18px;
		font-weight: 600;
		font-size: 20px;
		line-height: 23px;
		color: #000000;
		margin-bottom: 16px;
	}
	.social-media {
		display: flex;
		flex-wrap: wrap;
	}
}
.account-footer {
	.footer-heading {
		display: block;
		font-weight: 600;
		font-size: 20px;
		line-height: 23px;
		color: #000000;
		margin-top: 40px;
		margin-bottom: 16px;
		padding-right: 18px;
	}
	.footer-text {
		display: block;
		font-size: 17px;
		font-weight: 300;
		color: #000000;
		line-height: 23px;
		padding-right: 18px;
	}
}
</style>
