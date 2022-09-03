<template>
	<div class="base-card-container">
		<slot name="content"></slot>
	</div>
</template>

<style lang="scss" scoped>
.base-card-container {
	width: 100%;
	height: 100%;
	padding: 16px;
	background-color: #fff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
}
</style>
