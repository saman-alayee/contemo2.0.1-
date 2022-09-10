<template>
	<div class="base-card-container" :style="{ padding: padding }">
		<slot name="content"></slot>
	</div>
</template>
<script>
export default {
	props: {
		padding: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.base-card-container {
	width: 100%;
	height: 100%;
	background-color: #fff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
}
</style>
