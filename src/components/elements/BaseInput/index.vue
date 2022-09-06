<template>
	<div class="input-component-container">
		<div class="inside-input-container">
			<input
				ref="input"
				class="input_form"
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
			<!-- <img src="../../../assets/img/icon/add-item-icon.svg" alt="" /> -->
			<img :src="this.$PATH.GET_IMAGE_PATH(icon)" alt="" v-if="icon" />
		</div>

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
		icon: {
			type: String,
			default: null,
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
.inside-input-container {
	width: 100%;
	height: 60px;
	background: #ffffff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	input {
		border: none;
		width: 100%;
		margin-right: 8px;
		border-radius: 10px;

		&:focus {
			outline: none;
		}
	}
	img {
		width: 16px;
		height: 16px;
		object-fit: contain;
	}
}

.error-text {
	color: #c6243d !important;
	font-size: 12px;
	margin-top: 8px;
	margin-right: 16px;
}
</style>
