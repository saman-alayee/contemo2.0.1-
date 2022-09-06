<template>
	<div class="wallet app-rtl">
		<div class="account-credit">
			<img class="mx-1" src="@/assets/vectors/plus.svg" />
			<span class="text-white">اعتبار حساب</span>
		</div>
		<div class="amount-box">
			<span class="amount "><b>2,325,000</b></span>
			<span class="currency"> تومان</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.wallet {
	display: flex;
	width: 100%;
	background: $color-warning;
	border-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
}
.account-credit {
	display: flex;
	justify-content: flex-start;
	span {
		width: 85px;
	}
}
.amount-box {
	display: flex;
	justify-content: flex-end;
	padding-right: 56px;
}
.amount {
	color: $color-white;
}
.currency {
	padding-right: 16px;
    padding-left: 24px;
	color: $color-white;
}
</style>
