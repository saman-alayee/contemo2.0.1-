<template>
	<div class="market-data">
		<marketUser v-if="marketUser" />
		<myMarket v-if="myMarket" />
	</div>
</template>

<script>
import marketUser from '@/components/pageComponents/Market/marketUser.vue';
import myMarket from '@/components/pageComponents/Market/myMarket.vue';
export default {
	components: {
		marketUser,
		myMarket,
	},
	data() {
		return {
			marketUser: false,
			myMarket: true,
		};
	},
};
</script>

<style></style>
