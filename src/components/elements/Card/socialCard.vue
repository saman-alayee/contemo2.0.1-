<template>
	<div class="partner-card-container">
		<BaseCard class="base-color">
			<template slot="content">
				<div class="partner-item-container">
					<div class="row">
						<div class="col-md-5">
							<img src="@/assets/img/icon/instagramIcon.svg" alt="" />
						</div>

						<div class="col-md-7 text-container">
							<div class="textFa-container">
								<p>{{ textFa }}</p>
							</div>
							<div class="textEn-container">
								<p>{{ textEN }}</p>
							</div>
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
		textFa: {
			type: String,
			required: true,
		},
		textEN: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.partner-card-container {
	width: 210px;
	height: 88px;
}
.base-color {
	border: 1px solid #a5a5a5;
	border-radius: 20px;
	background-color: #f5f5f5;
}
.partner-item-container {
}
.name-container {
	p {
		font-weight: 600;
		font-size: 20px;
		line-height: 23px;
		text-align: right;
		color: #ffffff;
	}
}
.text-container{
    margin-top: 8px;
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
