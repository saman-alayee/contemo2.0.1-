<template>
	<div class="partner-account-card">
		<BaseCard padding="0px">
			<template slot="content">
				<span class="close-btn"><img src="@/assets/img/icon/closeIcon.svg" alt="" /></span>
				<div class="file-container">
					<img class="img-size" :src="$PATH.GET_IMAGE_PATH(file)" alt="" />
				</div>
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
		file: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.partner-account-card {
	width: 124px;
	height: 112px;
	padding-left: 12px;
	position: relative;
	margin-top: 12px;
}
.file-container {
	object-fit: cover;
	display: flex;
	justify-content: center;
	padding: 0px 4px 0px 0px;
	img {
		width: 104px;
		height: 112px;
		border-radius: 20px;
		object-fit: cover;
		padding: 4px 0px;
		margin-left: 4px;
	}
}
.close-btn {
	position: absolute;
	top: 0px;
	right: 3px;
	cursor: pointer;
}
</style>
