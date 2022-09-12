<template>
	<div class="addItem-container">
		<div
			class="add-item"
			:style="{ border: border, background: background, width: borderWidth, height: borderHeight }"
		>
			<img :style="{ height, width }" src="@/assets/img/icon/add-item-icon.svg" alt="" />
			<p>{{ text }}</p>
		</div>
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

		background: {
			type: String,
		},
		border: {
			type: String,
		},
		borderWidth: {
			type: String,
		},
		borderHeight: {
			type: String,
		},
		text: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.add-item {
	padding: 10px 10px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	border-color: $color-primary;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color: #4461f2;
		position: absolute;
		top: 70px;
	}
}
.text-container {
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color: #4461f2;
		padding: 8px;
	}
}
</style>
