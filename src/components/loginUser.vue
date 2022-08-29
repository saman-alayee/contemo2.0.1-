<template>
	<div class="login-user">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
                    <img class="mt-5" src="@/assets/vectors/Contemo-Logo.svg" alt="" />
                </div>
				<div class="col-lg-6">
					<h1>Login</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loginUser',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
</style>
