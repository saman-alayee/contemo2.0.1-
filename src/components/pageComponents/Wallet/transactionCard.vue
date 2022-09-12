<template>
	<div class="transaction-card-container">
		<BaseCard class="transaction-card">
			<template slot="content">
				<img class="plus-icon" src="@/assets/img/icon/gray-plus-icon.svg" />
				<span>{{ title }}</span>
				<img class="transaction-image" :src="$PATH.GET_IMAGE_PATH(image)" alt="" />
			</template>
		</BaseCard>
	</div>
</template>

<script>
import BaseCard from '@/components/elements/Card/index.vue';
export default {
	components: {
		BaseCard,
	},
	props: {
		title: {
			type: String,
		},
		image: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.transaction-card-container {
	margin-right: 32px;
	margin-bottom: 61px;
    cursor: pointer;
}
.transaction-card {
	width: 424px;
	height: 84px;
	display: flex;
	justify-content: start;
	align-items: center;
	.plus-icon {
		margin-right: 24px;
	}
	span {
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;
		color: #a5a5a5;
		margin-right: 16px;
	}
	.transaction-image {
		position: relative;
		right: 68px;
		top: -28px;
	}
}
</style>
