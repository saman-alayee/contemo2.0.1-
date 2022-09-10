<template>
	<div class="partner-account-card">
		<BaseCard padding="20px">
			<template slot="content">
				<div class="card-container">
					<div class="file-container">
						<span class="close-btn"><img src="@/assets/img/icon/closeIcon.svg" alt="" /></span>
						<img :src="$PATH.GET_IMAGE_PATH(file)" alt="" />
					</div>
					<div class="name-container">
						<p>{{ name }}</p>
					</div>
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
		name: {
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
	height: 114px;
	padding-left: 12px;
	position: relative;
	margin-top: 12px;
}
.name-container {
	p {
		display: flex;
		justify-content: center;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color: #a5a5a5;
	}
}
.file-container {
	display: flex;
	justify-content: center;
}
.close-btn {
	position: absolute;
	top: 0px;
	right: 3px;
	cursor: pointer;
}
</style>
