<template>
	<div class="topbar">
		<div class="row">
			<div class="col-lg-6">
				<h3 class="pt-4 px-3"> سلام وقت بخیر محسن هست :)</h3>
			</div>
			<div class="col-lg-6">
				<wallet class="mt-3" />
			</div>
		</div>
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
}
</style>
