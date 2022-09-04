<template>
	<div class="social-card-container">
		<BaseCard class="base-color">
			<template slot="content">
				<div class="row">
					<div class="col-md-5 social-media-icon">
						<img src="@/assets/img/icon/instagramIcon.svg" alt="" />
					</div>

					<div class="col-md-7 text-container">
						<div class="textFa-container">
							<p>{{ accountName }}</p>
						</div>
						<div class="textEn-container">
							<p>{{ socialAccountName }}</p>
						</div>
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
		accountName: {
			type: String,
			required: true,
		},
		socialAccountName: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.social-card-container {
	width: 210px;
	height: 88px;
	padding: 0;
	margin: 5px;
}
.base-color {
	border: 1px solid #a5a5a5;
	border-radius: 20px;
	background-color: #f5f5f5;
}
.social-media-icon {
	padding: 10px 24px;
}
.text-container {
	padding: 8px 4px;
}
.textFa-container {
	p {
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;
		color: #000000;
	}
}
.textEn-container {
	p {
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		color: #a5a5a5;
	}
}
</style>
