<template>
	<div class="base-card-container">
		<div class="row">
			<div class="col-md-7">
				<p>{{ title }}</p>
			</div>
			<div class="col-md-5">
				<div class="img-container">
					<img src="@/assets/vectors/trash.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		title: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.base-card-container {
	padding: 8px;
	height: 42px;
	border: 1px solid $color-primary;
	filter: drop-shadow(-2px 4px 10px rgba(0, 0, 0, 0.05));
	border-radius: 10px;
	white-space: nowrap;
	text-align: center;
}
.base-card-container {
	p {
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		line-height: 20px;
		color: $color-primary;
		margin-top: 3px;
	}
}
</style>

