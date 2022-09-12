<template>
	<div class="calender-board-component">
		<div class="week-selector">
			<div @click="PrevMonth" class="prev-btn">
				<img :src="this.$PATH.GET_IMAGE_PATH('icon/arrow-right.svg')" alt="" />
			</div>
			<div v-for="month in Months" :key="month.id">
				<template v-for="week in weeks">
					<div
						v-if="month.id === Number(currentMonth) && week.id === currentWeek"
						:key="week.id"
						class="week-title"
					>
						{{ week.name }} {{ month.name }}
					</div>
				</template>
			</div>
			<div @click="nextMonth" class="next-btn">
				<img :src="this.$PATH.GET_IMAGE_PATH('icon/arrow-right.svg')" alt="" />
			</div>
		</div>
		<div class="day-of-weeks">
			<div class="day-title" v-for="day in days" :key="day.id">
				<p>{{ day.name }} + {{ currentDay }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import PersianDate from 'persian-date';
export default {
	name: 'ssC',
	data() {
		return {
			Months: [
				{ id: 1, name: 'فروردین' },
				{ id: 2, name: 'اردیبهشت' },
				{ id: 3, name: 'خرداد' },
				{ id: 4, name: 'تیر' },
				{ id: 5, name: 'مرداد' },
				{ id: 6, name: 'شهریور' },
				{ id: 7, name: 'مهر' },
				{ id: 8, name: 'آبان' },
				{ id: 9, name: 'آذر' },
				{ id: 10, name: 'دی' },
				{ id: 11, name: 'بهمن' },
				{ id: 12, name: 'اسفند' },
			],
			weeks: [
				{ id: 1, name: 'هفته اول' },
				{ id: 2, name: 'هفته دوم' },
				{ id: 3, name: 'هفته سوم' },
				{ id: 4, name: 'هفته چهارم' },
			],
			days: [
				{ id: 1, name: 'شنبه' },
				{ id: 2, name: 'یکشنبه' },
				{ id: 3, name: 'دوشنبه' },
				{ id: 4, name: 'سه شنبه' },
				{ id: 5, name: 'چهارشنبه' },
				{ id: 6, name: 'پنچ شنبه' },
				{ id: 7, name: 'جمعه' },
			],

			currentMonth: null,
			currentWeek: null,
			currentDay: null,
		};
	},
	created() {
		this.currentMonth = this.convertToEnglishNumber(new PersianDate().format('M'));
		this.currentDay = new PersianDate().date();
		this.getCurrentWeek();
	},
	methods: {
		convertToEnglishNumber(str) {
			const persianNumberArr = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

			let i = 0;
			for (; i < 10; i++) {
				str = str.replace(persianNumberArr[i], i);
			}

			return str;
		},
		nextMonth() {
			if (this.currentWeek === 4) {
				this.currentMonth = Number(this.currentMonth) + 1;
				this.currentWeek = 1;
			} else if (this.currentWeek < 4 && this.currentWeek > 0) {
				this.currentWeek = this.currentWeek + 1;
			}
		},
		PrevMonth() {
			if (this.currentWeek === 1) {
				this.currentMonth = Number(this.currentMonth) - 1;
				this.currentWeek = 4;
			} else if (this.currentWeek <= 4 && this.currentWeek > 1) {
				this.currentWeek = this.currentWeek - 1;
			}
		},
		getCurrentWeek() {
			let date = new PersianDate().date();
			if (date > 0 && date < 8) {
				this.currentWeek = 1;
			} else if (date > 7 && date < 15) {
				this.currentWeek = 2;
			} else if (date > 14 && date < 22) {
				this.currentWeek = 3;
			} else {
				this.currentWeek = 4;
			}
		},
	},
	computed: {},
};
</script>

<style lang="scss" scoped>
.week-selector {
	width: 100%;
	height: 56px;
	background-color: #fff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	.week-title {
		margin: 0 56px;
	}
	.prev-btn,
	.next-btn {
		cursor: pointer;
	}
	.next-btn {
		transform: rotate((180deg));
	}
}
</style>
