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
							<h4>234,000</h4>
							<p>تومان</p>
						</div>
					</div>
					<p>
						اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
						برخورده اید که با نام لورم ایپسوم شناخته می‌شوند
					</p>
					<div class="code-container">
						<span class="text">کد تخفیف</span>
					</div>
				</div>
			</template>
		</baseCard>
	</div>
</template>

<script>
import baseCard from '@/components/elements/Card/index.vue';
export default {
	components: { baseCard },
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
</style>
