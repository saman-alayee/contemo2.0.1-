<template>
	<div class="task-card-container">
		<BaseCard class="white-card">
			<template slot="content">
				<div class="task-cart-item-container">
					<div class="title-container">
						<p>{{ title }}</p>
					</div>
					<div class="description-container">
						<p>{{ description }}</p>
					</div>
					<div class="progress-bar-container">
						<div class="progress-bar-right">60%</div>
						<div class="progress-bar-left">
							<p>میزان </p>
						</div>
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
					<div class="progress-bar-container">
						<div class="progress-bar-right">
							<img :src="$PATH.GET_IMAGE_PATH(avatar)" />
						</div>
						<div class="progress-bar-left">
							<img src="@/assets/img/vectors/basket.svg" />
							<p class="px-1 pt-1">06/23</p>
							<img src="@/assets/img/vectors/comment.svg" />
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
		},
		description: {
			type: String,
		},
		avatar: {
			type: String,
		},
	},
};
</script>

<style scoped lang="scss">
.task-card-container {
	width: 350px;
	margin-right: 4px;
}
.white-card{
	padding: 16px;
}
.task-cart-item-container {
	display: flex;
	flex-direction: column;
	padding: 10px 10px;
}
.title-container {
	p {
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 20px;
		text-align: right;
		color: #000000;
	}
}
.description-container {
	p {
		font-style: normal;
		font-weight: 200;
		font-size: 12px;
		line-height: 20px;
		text-align: right;
		color: #000000;
	}
}
.progress-bar-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	.progress-bar-left {
		width: 50%;
		display: flex;
		justify-content: start;
		direction: ltr;
	}
	.progress-bar-right {
		direction: ltr;
		width: 50%;
		display: flex;
		justify-content: end;
		p {
			font-size: 12;
			font-weight: 400;
		}
		img {
			width: 32px;
			height: 32px;
			margin-top: 10px;
		}
	}
}
</style>
