<template>
	<div class="partner-card-container">
		<div class="partner-item-container">
			<div class="row">
				<div class="col-md-7 name-container">
					<p>تعداد کل پروژه ها</p>
					<p>{{ projects }}</p>
					<div class="row mt-2">
						<div class="col-md-6 end-text-container">
							<img src="@/assets/img/icon/onlineIcon.svg" alt="" />
							<p>آنلاین</p>
						</div>
						<div class="col-md-6 end-text-container">
							<img src="@/assets/img/icon/offlineIcon.svg" alt="" />
							<p>آفلاین</p>
						</div>
					</div>
					<div class="row number-container">
						<div class="col-md-6">
							<p>{{ online }}</p>
						</div>
						<div class="col-md-6">
							<p>{{ offline }}</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<img class="space-top" src="@/assets/img/vectors/doneHand.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		projects: {
			type: Number,
		},
		online: {
			type: Number,
		},
		offline: {
			type: Number,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.partner-card-container {
	width: 363px;
	height: 207px;
	left: 488px;
	top: 156px;
	background: $color-primary;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
}
.base-color {
	background-color: $color-primary;
}
.partner-item-container {
	padding: 20px;
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

.space-top {
	margin-top: -4rem;
}
.end-text-container {
	display: flex;
	justify-content: center;
	flex-direction: row;
	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #ffffff;
		margin-top: 16px;
		padding-right: 8px;
	}
}
.number-container {
	p {
		font-weight: 400;
		font-size: 17px;
		line-height: 23px;
		color: #ffffff;
		text-align: center;
	}
}
</style>
