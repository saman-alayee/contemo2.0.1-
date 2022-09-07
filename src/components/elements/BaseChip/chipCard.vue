<template>
	<div>
		<div
			class="base-card-container"
			:style="{ border: border, background: background, width: width }"
		>
			<div class="chip-card-container">
				<div v-if="iconRight">
					<div class="img-container mx-1">
						<img :src="$PATH.GET_IMAGE_PATH(iconRight)" alt="" />
					</div>
				</div>
				<div :style="{ color: color }">
					<p>{{ title }}</p>
				</div>
				<div v-if="iconLeft">
					<div class="img-container mx-1">
						<img :src="$PATH.GET_IMAGE_PATH(iconLeft)" alt="" />
					</div>
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
			default: null,
		},
		iconLeft: {
			type: String,
			default: null,
		},
		iconRight: {
			type: String,
			default: null,
		},
		color: {
			type: String,
		},
		background: {
			type: String,
		},

		width: {
			type: Number,
			default: null,
		},
		border: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.base-card-container {
	height: 32px;
	cursor: pointer;
	// border: 1px solid $color-primary;
	border-radius: 10px;
	white-space: nowrap;
	text-align: center;
	box-shadow: 0px 12px 21px rgba(68, 97, 242, 0.15);
}
.base-card-container {
	p {
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		line-height: 20px;
		margin-top: 3px;
	}
}
.chip-card-container {
	display: flex;
	justify-content: start;
	align-items: start;
	padding-right: 14px;
	padding-top: 2px;
}
</style>
