<template>
	<div class="user-basket">
		<div class="row">
			<div class="col-lg-7"></div>
			<div class="col-lg-5">
				<totalBuyCard />
			</div>
		</div>
	</div>
</template>

<script>
import totalBuyCard from '@/components/elements/Card/totalBuyCard.vue';
export default {
	components: { totalBuyCard },
};
</script>

<style></style>
