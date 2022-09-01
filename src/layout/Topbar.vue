<template>
	<div class="topbar">
		<!-- <div class="row"> -->
			<div class="col-8"><h3 class="">سلام وقت بخیر محسن هست :)</h3></div>
			<div class="col-4"><wallet class="" /></div>
		<!-- </div> -->
	</div>
</template>

<script>
import wallet from '@/components/wallet.vue';
export default {
	name: 'topbar',
	components: { wallet },
};
</script>

<style lang="scss" scoped>
.topbar {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
