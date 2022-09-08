<template>
	<div class="shopping-cart-card">
		<div class="shopping-cart-icon">
			<img src="@/assets/img/icon/shopping-cart-icon.svg" alt="" />
		</div>
		<span class="shopping-cart-content"> سبد خرید </span>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.shopping-cart-card {
	width: 132px;
	height: 48px;
	background: #fcbf00;
	box-shadow: 0px 12px 21px rgba(252, 191, 0, 0.15);
	border-radius: 15px;
	display: flex;
	cursor: pointer;
}
.shopping-cart-icon {
	padding: 8px 14px;
}
.shopping-cart-content {
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
	padding-top: 11px;
}
</style>
