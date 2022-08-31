<template>
	<div class="select-side-user">
		<div class="container">
			<div class="col-12">
				<img class="mt-5" src="@/assets/vectors/Contemo-Logo.svg" />
			</div>
			<div class="col-12 mt-3 d-flex justify-content-center">
				<h1>کارپذیر هستید یا کارفرما؟</h1>
			</div>
			<div class="sides">
				<div class="employee">
					<h1>کارپذیر</h1>
					<img src="@/assets/vectors/employee-vector.svg" alt="" />
				</div>
				<div class="employer">
					<h1>کارفرما</h1>
					<img src="@/assets/vectors/employer-vector.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* @import'@/assets/scss/_shared.scss'; */
.select-side-user {
	width: 100%;
    height: 100vh;
	background: #f5f5f5;
	display: flex;
}
.select-side-user .container .col-12 h1 {
	font-weight: 900;
	font-size: 32px;
}
.select-side-user .container .sides {
	display: flex;
	flex-wrap: wrap;
	gap: 8rem;
	align-items: center;
	justify-content: center;
}
.select-side-user .container .sides .employee,
.select-side-user .container .sides .employer {
	margin-top: 10rem;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	width: 300px;
	height: 150px;
}
.select-side-user .container .sides .employee h1,
.select-side-user .container .sides .employer h1 {
	font-weight: 900;
	font-size: 30px;
	padding-top: 3.5rem;
	padding-right: 3rem;
	color: #000000;
}
.select-side-user .container .sides .employee img,
.select-side-user .container .sides .employer img {
	width: 280px;
	height: 230px;
	position: relative;
	right: 9rem;
	top: -11rem;
}
.select-side-user .container .sides .employee:hover {
	background: #4461f2;
	cursor: pointer;
}
.select-side-user .container .sides .employer:hover {
	background: #fcbf00;
	cursor: pointer;
}
.select-side-user .container .sides .employee:hover h1,
.select-side-user .container .sides .employer:hover h1 {
	color: #fff;
}
</style>
