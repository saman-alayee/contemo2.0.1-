<template>
	<div class="topbar">
		<div v-if="$route.path !== `/Partners`" class="col-8">
			<h3 class="">سلام وقت بخیر محسن هستم :)</h3>
		</div>
		<div v-if="$route.path == `/Partners`" class="col-8">
			<h3 class="">متن مربوط به بخش همکاران</h3>
		</div>
		<div class="col-4" v-if="$route.path !== `/market`"><wallet class="" /></div>
		<div class="col-3 app-ltr" v-if="$route.path == `/market`"><shoppingChip /></div>
	</div>
</template>

<script>
import wallet from '@/components/wallet.vue';
import shoppingChip from '../components/elements/Chips/shoppingChip.vue';
export default {
	name: 'topbar',
	components: { wallet, shoppingChip },
};
</script>

<style lang="scss" scoped>
.topbar {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
