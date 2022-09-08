<template>
	<div class="basket-card">
		<baseCard>
			<template slot="content">
				<div class="baseket-card-container">
					<div class="cart-container">
						<div class="cover-container">
							<img :src="cover" />
						</div>
						<div class="text-container">
							<div class="price-container">
								<div class="price">
									<p>تومان</p>
									<h5 class="px-1">{{ price }}</h5>
								</div>
								<div class="price-title">
									<h5>{{ title }}</h5>
								</div>
							</div>
							<p>
								{{ description }}
							</p>
							<div class="trash-container">
								<img src="@/assets/img/icon/deleteIcon.svg" />
							</div>
						</div>
					</div>
					<hr />
				</div>
			</template>
		</baseCard>
	</div>
</template>

<script>
import baseCard from '@/components/elements/Card/index.vue';
export default {
	components: { baseCard },
	props: {
		price: {
			type: Number,
			default: 0,
			required: true,
		},
		cover: {
			type: String,
			default: '',
			required: true,
		},
		title: {
			type: String,
			default: '',
			required: true,
		},
		description: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.basket-card {
	width: 100%;
    background: #fff;
	.baseket-card-container {
		display: flex;
		flex-direction: column;
		.cart-container {
			display: flex;
			flex-direction: row;
		}
		.cover-container {
			width: 150px;
			height: 120px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {
				width: 120px;
				height: 120px;
				border-radius: 20px;
			}
		}
		.text-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			direction: ltr;
			padding: 0px 10px;
			p {
				color: $color-secoundary;
				font-weight: 100;
			}
			.price-container {
				width: 100%;
				display: flex;
				flex-direction: row;
				.price-title {
					display: flex;
					justify-content: end;
					width: 50%;
					h5 {
						font-weight: 600;
					}
				}
				.price {
					display: flex;
					justify-content: start;
					width: 50%;
					h5 {
						font-weight: 600;
					}
				}
			}
			.trash-container {
				width: 100%;
				display: flex;
				justify-content: start;
			}
		}
	}
}
</style>
