<template>
	<div class="dashboard-component">
		<BaseCard>
			<template slot="content">
				salam
				<p>salam</p>
				<h1>by</h1>
			</template>
		</BaseCard>
	</div>
</template>

<script>
import BaseCard from '../../../components/elements/Card/index.vue';
export default {
	components: {
		BaseCard,
	},
};
</script>
