<template>
	<div class="container">
		<ul class="nav justify-content-start">
			<li class="nav-item">
				<a class="nav-link pill-tab" href="#">در حال انجام</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">در انتظار تایید </a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">انجام شده</a>
			</li>
		</ul>
		<div class="card task-card">
			<div class="card-body">
				<h5 class="card-title">عنوان تسک</h5>
				<p class="card-text">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
					است چاپگرها
				</p>
				<div class="row">
					<div class="col-md-6"><p>50%</p></div>
					<div class="col-md-6"><p class="progress-text">میزان پیشرفت</p></div>
				</div>
				<div class="progress">
					<div
						class="progress-bar progress-task"
						role="progressbar"
						style="width: 25%"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					></div>
				</div>
				<div class="row">
					<div class="avatar-sm">
						<img src="" alt="" />
					</div>
          <div class="avatar-sm">
						<img src="" alt="" />
					</div>
          <div class="avatar-sm">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.pill-tab {
	background: #ffffff;
	padding: 10px 50px;
	border-radius: 21px;
	box-shadow: rgba(0, 0, 0, 0.05);
	font-weight: 700;
	font-size: 17px;
	font-style: normal;
	font-weight: 500;
	line-height: 26px;
	text-align: center;
	color: #4461f2;
}
.task-card {
	width: 65%;
	background: #ffffff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	margin-top: 1rem;
}
.progress-task {
	background-color: $color-primary;
}
.progress-text {
	margin-right: 3rem;
	color: black;
}
.avatar-sm {
	vertical-align: middle;
	width: 28px;
	height: 28px;
	border-radius: 5rem;
	background-color: #ded5fb;
	margin-top: -7%;
}
</style>

