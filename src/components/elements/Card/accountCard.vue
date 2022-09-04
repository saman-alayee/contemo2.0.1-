<template>
	<div class="partner-account-card">
		<BaseCard>
			<template slot="content">
				<div class="partner-item-container">
					<div class="row">
						<div class="col-md-5">
							<img src="@/assets/img/icon/instagramIcon.svg" alt="" />
						</div>
						<div class="col-md-7 text-container">
							<div class="typeEn-container">
								<p>{{ accountName }}</p>
							</div>
							<div class="typeFa-container">
								<p>{{ socialAccountName }}</p>
							</div>
						</div>
					</div>

					<div class="link-container">
						<div>
							<p>{{ username }}</p>
						</div>
						<div class="icon-container">
							<img src="@/assets/img/vectors/user-icon.svg" alt="" />
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
		accountName: {
			type: String,
			// required: true,
		},
		socialAccountName: {
			type: String,
			// required: true,
		},
		username: {
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
