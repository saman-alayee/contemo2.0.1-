<template>
	<div class="base-card-container" :style="{ background, width, color }">
		<div class="card-body">
			<h5 class="card-title-component" :style="{ color }">{{ title }}</h5>
			<p class="card-text-component">
				{{ description }}
			</p>
			<div class="card-footer-component">{{ footer }}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		description: String,
		background: String,
		width: String,
		footer: String,
		color: String,
	},
};
</script>

<style lang="scss" scoped>
.base-card-container {
	width: 100%;
	padding: 16px;
	background-color: #fff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
}
.card-title-component {
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 20px;
}
.card-text-component {
	font-style: normal;
	font-weight: 200;
	font-size: 12px;
	line-height: 20px;
}
.card-footer-component {
	width: 100%;
}
</style>
