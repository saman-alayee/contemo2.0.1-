<template>
	<div class="market-media-card">
		<BaseCard class="white-card">
			<template slot="content">
				<div class="media-container">
					<img v-if="image" :src="image" alt="" />
					<video v-if="video" controls class="video">
						<source :src="video" type="video/mp4" />
					</video>
					<audio v-if="audio" controls>
						<source :src="audio" type="audio/ogg" />
					</audio>
				</div>
				<div class="content-container">
					<span>{{ title }}</span>
					<p>{{ description }}</p>
				</div>
				<div class="market-card-footer">
					<div class="price">
						<span class="amount">{{ price }}</span>
						<span class="currency">تومان</span>
					</div>
					<div class="learn-more-icon">
						<img src="@/assets/img/icon/plus-icon.svg" />
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
	data() {},
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
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

.market-media-card {
	width: 193px;
	height: auto;
	margin: 16px 8px;
}
.white-card {
	padding: 8px;
}
.media-container {
	img {
		position: relative;
		left: 4px;
		top: -4px;
		width: 185px;
		height: 135px;
		border-radius: 20px 20px 0 0;
		width: 193px;
		height: 141px;
	}
	.video {
		position: relative;
		left: 4px;
		top: -4px;
		width: 185px;
		height: 135px;
		border-radius: 20px 20px 0 0;
		width: 193px;
		height: 141px;
	}
	audio {
		position: relative;
		left: 4px;
		top: -4px;
		width: 185px;
		height: 57px;
		border-radius: 20px 20px 0 0;
	}
}
.content-container {
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
.market-card-footer {
	display: flex;
	flex-direction: row;
}
.price {
	padding-right: 2px;
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
.learn-more-icon {
	position: relative;
	right: 80px;
}
</style>
