<template>
	<div class="input-component-container">
		<input
			ref="input"
			class="form-control input_form"
			:style="{ height, ...styleInput }"
			:type="type"
			:placeholder="placeholder"
			:value="value"
			:name="name"
			@focus="
				$emit('focus');
				isFocus = true;
			"
			@blur="
				$emit('blur');
				isFocus = false;
			"
			@input="$emit('input', $event.target.value)"
			:disabled="disabled"
			@keyup.enter="keyUp"
		/>
		<ul v-if="errors && errors.length">
			<li v-for="(error, index) in errors" :key="index" class="error-text">{{ error }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'base-input-component',
	props: {
		placeholder: String,
		type: {
			type: String,
			default: 'text',
		},
		height: {
			type: String,
		},
		value: {
			required: false,
		},
		name: {
			type: String,
		},
		styleInput: {
			default: () => {},
		},
		errors: {
			type: Array,
		},
		disabled: {
			type: Boolean,
		},
	},
	data: () => ({
		isFocus: false,
		hasSlot: true,
	}),

	methods: {
		clearValue() {
			this.$refs.input.value = '';
			this.$emit('input', '');
		},
		keyUp() {
			this.$emit('keyUp');
		},
	},
};
</script>

<style lang="scss" scoped>
.input_form {
	box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 10px;
}
.error-text {
	color: #c6243d !important;
	font-size: 12px;
	margin-top: 8px;
	margin-right: 16px;
}
</style>
