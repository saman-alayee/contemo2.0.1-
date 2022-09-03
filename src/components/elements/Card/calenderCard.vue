<template>
	<div class="calender-card">
		<BaseCard>
			<template slot="content">
				<div class="calender-card-container">
					<div class="calender-card-header">
						<div class="calender-close">
							<img src="@/assets/vectors/close.svg" />
						</div>
						<div class="calender-time">
							<span> 23:30 </span>
							<img src="@/assets/vectors/clock.svg" />
						</div>
					</div>
					<div class="calender-card-content">
						<div class="title-container">
							<p>{{title}}</p>
						</div>
						<div class="progress-bar-container">
							<div class="progress-bar-right">{{progressCount}}%</div>
						</div>
						<div class="progress app-ltr">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 25%"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
						<div class="social-media">
							<img
								class="social-media-icon"
								src="@/assets/vectors/instagram-icon.svg"
							/>
							<img class="user-icon" src="@/assets/img/vectors/avatar.svg" />
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
		title: {
			type: String,
			default: '',
		},
		progressCount: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style scoped>
.calender-card {
	width: 162px;
}
.calender-card-header {
	background: #4461f2;
	height: 40px;
	margin: -16px;
	display: flex;
	flex-direction: row;
}
.calender-card-content {
	margin: 0;
	padding: 0;
}
.calender-close,
.calender-time {
	padding: 6px;
}
.calender-time {
	position: relative;
	right: 48px;
}
.calender-time span {
	color: #f5f5f5;
}
.title-container {
	margin-top: 24px;
	font-weight: 600;
	font-size: 16px;
	color: #000000;
	line-height: 20px;
	text-align: right;
}
.progress-bar-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-bottom: 16px;
}
.progress-bar-container .progress-bar-right {
	direction: ltr;
	width: 50%;
	display: flex;
	justify-content: end;
}
.social-media {
	display: flex;
	flex-direction: row;
}
.social-media-icon {
	position: relative;
	right: 112px;
}
.user-icon {
	width: 24px;
	height: 24px;
	position: relative;
	left: 24px;
}
</style>
