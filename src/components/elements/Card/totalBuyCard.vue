<template>
	<div class="total-buy-card">
		<baseCard>
			<template slot="content">
				<div class="total-buy-card-container">
					<div class="total-container">
						<div class="total-text">
							<span>جمع سبد خرید</span>
						</div>
						<div class="total-price">
							<h4>{{price}}</h4>
							<h5>تومان</h5>
						</div>
					</div>
					<p>
						اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
						برخورده اید که با نام لورم ایپسوم شناخته می‌شوند
					</p>
					<div class="code-container mt-5">
						<span class="text">کد تخفیف</span>
					</div>
					<input class="input mt-1" type="text" />
					<hr />
					<BaseButton title="پرداخت با کارت بانکی" class="mt-1" />
					<button class="wallet-btn mt-1">پرداخت با اعتبار حساب</button>
				</div>
			</template>
		</baseCard>
	</div>
</template>

<script>
import baseCard from '@/components/elements/Card/index.vue';
import BaseButton from '../../../components/elements/Button/Button.vue';
export default {
	components: { baseCard, BaseButton },
	props: {
		price: {
			type: Number,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.total-buy-card-container {
	padding: 35px 15px;
	span {
		font-size: 16px;
		font-weight: 600;
	}
	p {
		color: $color-secoundary;
		font-size: 12px;
	}
	.total-container {
		width: 100%;
		display: flex;
		.total-text {
			width: 50%;
			display: flex;
			justify-content: start;
		}
		.total-price {
			width: 50%;
			display: flex;
			justify-content: end;
			h4 {
				color: $color-primary;
				padding: 0px 10px;
			}
			p {
				color: $color-secoundary;
			}
		}
		.code-container {
			width: 100%;
			display: flex;
			flex-direction: column;
		}
	}
}
.input {
	width: 100%;
	background-color: #f5f5f5;
	outline: none;
	border: none;
	height: 60px;
	border-radius: 10px;
	padding: 0px 10px;
}
.wallet-btn {
	width: 100%;
	height: 42px;
	border: 1px solid $color-primary;
	background: none;
	border-radius: 8px;
	color: $color-primary;
	font-weight: 400;
	transition: 0.4s;
}
.wallet-btn:hover {
	background: $color-primary;
	color: #fff;
}
</style>
