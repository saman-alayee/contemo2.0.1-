<template>
	<div id="app">
		<router-view />
		<notify-container></notify-container>
	</div>
</template>

<script>
import NotifyContainer from '@/components/elements/Notify/NotifyContainer';

export default {
	name: 'App',
	components: {
		NotifyContainer,
	},
};
</script>

<style></style>
