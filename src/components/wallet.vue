<template>
	<div class="wallet app-rtl">
        <img class="mx-1" src="@/assets/vectors/plus.svg">
        <span class="text-white py-1">اعتبار حساب</span>
        <span class="text-white py-1 pl-5"><b>2,325,000</b></span>
        <span class="text-white py-1 pl-3"> تومان</span>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.wallet {
	display: flex;
	width: 380px;
	background: $color-warning;
	border-radius: 15px;
}
</style>
