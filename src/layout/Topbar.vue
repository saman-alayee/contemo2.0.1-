<template>
	<div class="topbar">
		<h3 class="">سلام وقت بخیر محسن هست :)</h3>
		<wallet class="" />
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
