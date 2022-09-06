<template>
	<div class="base-card-container" :style="{ background: background }">
		<div class="row">
			<div class="col-md-3">
				<div class="img-container mx-1" v-if="icon">
					<img :src="$PATH.GET_IMAGE_PATH(icon)" alt="" />
				</div>
			</div>
			<div class="col-md-9" :style="{ color: color }">
				<p>{{ title }}</p>
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
		icon: {
			type: String,
		},
		color: {
			type: String,
		},
		background: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.base-card-container {
	width: 151px;
	height: 32px;
	cursor: pointer;
	border: 1px solid $color-primary;
	border-radius: 10px;
	white-space: nowrap;
	text-align: center;
    box-shadow: 0px 12px 21px rgba(68, 97, 242, 0.15);
}
.base-card-container {
	p {
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		padding-top: 4px;
	}
}
</style>
