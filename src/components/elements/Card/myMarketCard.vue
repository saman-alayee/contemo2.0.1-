<template>
	<div class="my-market-card">
		<BaseCard class="white-card">
			<template slot="content">
				<div class="media-container">
					<img v-if="image" :src="image" alt="" />
					<div v-if="video" class="video-container">
						<video controls class="video">
							<source :src="video" type="video/mp4" />
						</video>
					</div>
					<audio v-if="audio" controls>
						<source :src="audio" type="audio/ogg" />
					</audio>
				</div>
				<img class="edit-icon" src="@/assets/img/icon/edit-icon.svg" />
				<div class="content-container">
					<div class="row">
						<span class="col-8">{{ title }}</span>
						<div class="price col-4">
							<span class="amount">{{ price }}</span>
							<span class="currency">تومان</span>
						</div>
					</div>
					<p>{{ description }}</p>
				</div>
				<div class="market-card-footer">
					<div class="footer-item likes">
						<span>{{ likes }}</span>
						<img src="@/assets/img/icon/heart-icon.svg" />
					</div>
					<div class="footer-item views">
						<span>{{ views }}</span>
						<img src="@/assets/img/icon/view-icon.svg" />
					</div>
					<div class="footer-item purchases">
						<span>{{ purchases }}</span>
						<img src="@/assets/img/icon/money-icon.svg" />
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
		video: {
			type: String,
		},
		audio: {
			type: String,
		},
		image: {
			type: String,
		},
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		price: {
			type: Number,
			default: 0,
		},
		likes: {
			type: Number,
			default: 0,
		},
		views: {
			type: Number,
			default: 0,
		},
		purchases: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.my-market-card {
	width: 210px;
	height: auto;
	margin: 16px 8px;
}
.white-card {
	padding: 8px;
}
.edit-icon {
	position: relative;
	z-index: 1000;
	top: -120px;
	right: 2px;
	cursor: pointer;
}
.media-container {
	height: 122px;
	img {
		position: relative;
		left: 4px;
		top: -4px;
		width: 200px;
		height: 135px;
		border-radius: 20px 20px 0 0;
	}
	.video-container {
		position: relative;
		left: 4px;
		top: -4px;
		border-radius: 20px 20px 0 0;
		overflow: hidden;
		width: 200px;
		height: 135px;
		video {
			width: 200px;
			height: 150px;
			position: relative;
			left: 0;
			top: -16px;
		}
	}
	audio {
		position: relative;
		left: 4px;
		top: 40px;
		width: 200px;
		height: 57px;
		border-radius: 20px 20px 0 0;
		padding: 8px;
	}
}
.content-container {
	width: 200px;
	span {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: #000000;
	}
	p {
		padding-top: 4px;
		font-style: normal;
		font-weight: 300;
		font-size: 10px;
		line-height: 16px;
		text-align: right;
		color: #a5a5a5;
	}
}
.price {
	text-align: left;
	position: relative;
	left: 27px;
	.amount {
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 23px;
		text-align: right;
		color: #4461f2;
	}
	.currency {
		padding: 4px;
		font-style: normal;
		font-weight: 300;
		font-size: 10px;
		line-height: 16px;
		text-align: right;
		color: #a5a5a5;
	}
}
.market-card-footer {
	display: flex;
	flex-direction: row;
	width: 215px;
	.footer-item {
		padding: 2px 8px;
		span {
			padding-left: 4px;
			font-style: normal;
			font-weight: 300;
			font-size: 12px;
			line-height: 23px;
			color: #a5a5a5;
		}
	}
}
</style>
