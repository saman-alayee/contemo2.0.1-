<template>
	<!-- Notify component for show notification  -->
	<div
		class="alert"
		:class="['alert-' + type, { 'alert-with-icon': icon }]"
		data-notify="container"
	>
		<slot name="NotifyIcon"></slot>
		<button v-if="closeButton" type="button" class="close" data-dismiss="alert" aria-label="Close">
			<i class="material-icons">close</i>
		</button>
		<span style="max-width: 100% important;" class="message" data-notify="message">
			<slot name="NotifyMessage"></slot>
		</span>
	</div>
</template>

<script>
export default {
	//set type for alert type with type prop, icon prop is for bind alert-with-icon class, closeButton prop is for show button
	props: ['type', 'icon', 'closeButton'],
};
</script>

<style lang="scss">
.message {
	word-wrap: break-word;
}
</style>
