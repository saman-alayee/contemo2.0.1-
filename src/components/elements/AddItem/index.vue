<template>
	<div class="add-item">
		<img :style="{ height, width }" src="@/assets/img/icon/add-item-icon.svg" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		height: {
			type: String,
		},
		width: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.add-item {
	padding: 10px 10px;
	border-radius: 21px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-color: $color-primary;
	cursor: pointer;
	img {
		width: 60px;
		height: 60px;
	}
}
</style>
