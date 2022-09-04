<template>
	<div class="partner-account-card mt-4">
		<BaseCard>
			<template slot="content">
				<div class="partner-item-container">
					<div class="row">
						<div class="col-md-5">
							<img :src="$PATH.GET_IMAGE_PATH(icon)" alt="" />
						</div>
						<div class="col-md-7 text-container">
							<div class="typeEn-container">
								<p>{{ typeFa }}</p>
							</div>
							<div class="typeFa-container">
								<p>{{ typeEn }}</p>
							</div>
						</div>
					</div>

					<div class="link-container">
						<div>
							<p>{{ link }}</p>
						</div>
						<div class="icon-container">
							<img src="@/assets/img/vectors/contactIcon.svg" alt="" />
						</div>
					</div>
					<button class="btn btn-primary text-btn w-100">افزودن اکانت دیگر</button>
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
		typeFa: {
			type: String,
			// required: true,
		},
		typeEn: {
			type: String,
			// required: true,
		},
		link: {
			type: String,
			// required: true,
		},
		icon: {
			type: String,
		},
	},
};
</script>

<style>
.partner-account-card {
	width: 220px;
	height: auto;
}
.text-container {
	margin-top: 5px;
}
.typeEn-container {
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 23px;
	color: #000000;
}
.typeFa-container {
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 20px;
	color: #a5a5a5;
}
.link-container {
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	text-align: right;
	color: #000000;
	display: flex;
	justify-content: center;
	padding-top: 8px;
}
.icon-container {
	padding-right: 16px;
}
.text-btn {
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #ffffff;
}
</style>
