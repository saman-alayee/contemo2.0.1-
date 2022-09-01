<template>
	<div class="cl-dtp" :style="theme">
		<div class="cl-dtp-container">
			<div class="cl-dtp-months-wrapper">
				<div class="single-month-container">
					<!--   the container that shows the current month and year ====>>>>> 'آبان 1398'  -->
					<div class="cl-dtp-month-selection">
						<div class="prev-month" @click="parsePreviousMonth">
							<span></span>
						</div>
						<div class="current-month">
							{{
								this.formattedFirstYearAndMonth == null
									? thisMonth
									: this.formattedFirstYearAndMonth
							}}
						</div>
						<div class="next-month" @click="parseNextMonth">
							<span></span>
						</div>
					</div>
					<!--   the container that shows days of week    -->
					<div class="days-of-week-container">
						<div class="days-of-week" v-for="day in daysOfWeek" :key="day">
							{{ day }}
						</div>
					</div>
					<!--   the container that shows the current days of month   -->
					<div class="days-container">
						<div
							class="day mock-day"
							v-for="(mockDay, mockDayIndex) in firstDayOfFirstMonthInWeek"
							:key="'mock-' + mockDayIndex"
						></div>
						<div
							class="day"
							v-for="day of this.datetimePickerObj.monthsArray.firstMonth.days"
							@click="selectDate(day)"
							:key="day.internalDateId"
							:class="{
								'day-disabled': day.disabled,
								today: day.internalDateId === today.internalDateId,
							}"
						>
							<div
								class="day-cell"
								:class="{
									'selected-date': day.internalDateId === selectedInternalDateId,
									'selected-in-range': day.isActivatedInRange === true,
								}"
							>
								{{ day.date[2] }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PersianDate from 'persian-date';

export default {
	name: 'ManexDateTimePicker',
	props: {
		// used to create v-model
		value: {},
		label: {
			required: false,
			type: String,
		},
		// the format of returned date
		format: {
			default: '',
		},
		// custom input element which be bound to date picker
		elem: {
			type: String,
		},
		// minimum date to select ====>>>> 1398/3/16
		min: {
			type: String,
		},
		// maximum date to select ====>>>> 1398/3/16
		max: {
			type: String,
		},
		// The option that allows user to select time for each selected date in range
		time: {
			type: Boolean,
		},
		themeColor: {
			type: String,
			default: '#007BFF',
		},
		emitUnixTimestamp: {
			type: Boolean,
		},
	},
	data() {
		return {
			// check whether the dialog is open or not
			isOpen: false,
			// the main object that stores the content of datepicker
			datetimePickerObj: {
				monthsArray: {
					firstMonth: {
						month: [],
						days: [],
					},
					secondMonth: {
						month: [],
						days: [],
					},
				},
			},
			daysOfWeek: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
			selectedDateArray: [],
			// [1398, 4, 23]
			currentMonthArray: [],
			// [1398, 4]
			formattedFirstYearAndMonth: null,
			// the content of the month navigator ====>>>> 'آبان 1398'
			formattedSecondYearAndMonth: null,
			// the content of the next month navigator ====>>>> 'آبان 1398'
			formattedDayOfWeek: null,
			// the content of the header of datepicker ====>>>> 'سه شنبه, ۲۱ آبان'
			formattedRangeOfDates: [],
			// the content of the header of datepicker
			selectedInternalDateId: null,
			// "cl-dtp-1398-12-23" => used to style selected date in `non range` mode
			rangeDateArray: [],
			// array of first and second selected element
			// that has been clicked to form a range of dates
			selectedDatesInRangeArray: [],
			// the array that stores dates which in the range of `rangeDateArray`
			minDateInMilliseconds: null,
			// this.min converted to milliseconds
			maxDateInMilliseconds: null,
			// this.max converted to milliseconds
			// to select year and month, used in 'year-month-selection-wrapper'
			currentSelectedTime: { hour: 0, minute: 0 },
			// The object that contains drafted time which user selected
			yearSelectionArray: [],
			//The Array contains 16 months to select ====>>>> [1398, 1399, 1400, ... , 1412, 1413]
			// used in 'year-month-selection-wrapper'
			monthsOfYearSelectionArray: [
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
			// The Array of months that used for month selection, used in 'year-month-selection-wrapper'
			monthYearSelectionArray: [],
			// user selected year and month, used in 'year-month-selection-wrapper'
			activeYear: null,
			// current year, used in 'year-month-selection-wrapper'
			today: null,
			thisMonth: null,
			nextMonth: null,
		};
	},
	created() {
		this.today = this.createDateObjectUnit(new PersianDate());
		this.thisMonth = new PersianDate().format('MMMM YYYY');
		this.nextMonth = new PersianDate().add('M', 1).format('MMMM YYYY');
		if (this.value) {
			// set default value for date
			let selectedDateInstance = this.parseStringToValidDate(this.value);
			// let selectedNextMonthInstance = new PersianDate(this.value).add("m", 1);
			let addedDateObject = this.createDateObjectUnit(selectedDateInstance);

			this.currentMonthArray = addedDateObject.date;
			// sets the month to initial value month
			this.populateAndRenderMonthsArray(selectedDateInstance);
			// generate month's days based on initial date value
			this.selectDate(addedDateObject);
			// selects date
			this.generateYearSelectionArray('');
			this.emitDateRanges();
		} else {
			this.populateAndRenderMonthsArray();
			this.generateYearSelectionArray('');
		}
	},
	mounted() {
		// bound passed element (with specific id), to date range picker
		if (this.elem) {
			document.getElementById(this.elem).addEventListener('click', () => {
				this.isOpen = !this.isOpen;
			});
		}
	},
	methods: {
		onInputSelect() {
			this.isOpen = !this.isOpen;
		},
		populateAndRenderMonthsArray(date) {
			let currentDateArray = [];
			let firstDayOfMonth = [];
			let firstDayOfNextMonth = [];
			let currentDate;

			// check if persisted date has been passed
			if (date) {
				currentDate = new PersianDate(date);
			} else {
				currentDate = new PersianDate();
			}

			// make current date in an array
			currentDateArray = this.createRawDateArray(currentDate);

			this.currentMonthArray = currentDateArray;
			this.activeYear = this.currentMonthArray[0];

			// store current month and next month
			firstDayOfMonth = [currentDateArray[0], currentDateArray[1], 1];
			if (currentDateArray[1] === 12) {
				firstDayOfNextMonth = [currentDateArray[0] + 1, 1, 1];
			} else {
				firstDayOfNextMonth = [currentDateArray[0], currentDateArray[1] + 1, 1];
			}

			this.datetimePickerObj.monthsArray.firstMonth.days =
				this.makeDaysOfMonth(firstDayOfMonth);
			this.datetimePickerObj.monthsArray.firstMonth.month = [
				currentDateArray[0],
				currentDateArray[1],
			];
			this.datetimePickerObj.monthsArray.secondMonth.days =
				this.makeDaysOfMonth(firstDayOfNextMonth);

			if (currentDateArray[1] === 12) {
				this.datetimePickerObj.monthsArray.secondMonth.month = [currentDateArray[0] + 1, 1];
			} else {
				this.datetimePickerObj.monthsArray.secondMonth.month = [
					currentDateArray[0],
					currentDateArray[1] + 1,
				];
			}

			// remove default value before selected date by user(default value is چهارشنبه، 01 فروردین)
			if (date === !undefined) {
				this.formatYearAndMonth();
			}
		},
		convertToPersianNumber(str) {
			const persianNumberArr = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
			const arabicNumberArr = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
			if (typeof str === 'string') {
				let i = 0;
				for (; i < 10; i++) {
					str = str.replace(persianNumberArr[i], i).replace(arabicNumberArr[i], i);
				}
			}
			return str;
		},
		convertToEnglishNumber(str) {
			const persianNumberArr = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

			// if (typeof str === "string") {
			let i = 0;
			for (; i < 10; i++) {
				str = str.replace(persianNumberArr[i], i);
			}
			// }

			return str;
		},
		makeDaysOfMonth(startDate) {
			const isLeapYear = new PersianDate(startDate).isLeapYear();
			// check if year is leap year
			let daysOfMonth = this.getDaysOfMonth(startDate[1], isLeapYear);
			// get count of days in the month
			let monthArray = [];

			for (let i = 1; i <= daysOfMonth; i++) {
				let dateObject = {};
				dateObject.isHoliday = false;
				dateObject.date = [startDate[0], startDate[1], i];
				dateObject.dayOfWeek = this.convertToPersianNumber(
					new PersianDate(dateObject.date).format('d'),
				);
				dateObject.internalDateId = this.internalDateIdGenerator(dateObject.date);

				// if we have range and have 2 range dates in array, generate
				if (this.range && this.rangeDateArray.length === 2) {
					let isDateObjectInRange = this.selectedDatesInRangeArray.find(
						(p) => p.internalDateId === dateObject.internalDateId,
					);

					if (isDateObjectInRange) {
						dateObject.isActivatedInRange = true;
						dateObject.isFirstDay = isDateObjectInRange.isFirstDay;
						dateObject.isLastDay = isDateObjectInRange.isLastDay;
					}
				}

				let isDayDisable = this.checkDayDisableByMinAndMax(dateObject);

				if (isDayDisable) {
					dateObject.disabled = true;
				}

				monthArray.push(dateObject);
			}

			return monthArray;
		},
		// factory function that returns day count of month
		getDaysOfMonth(month, isLeapYear) {
			if (month < 7) {
				return 31;
			} else {
				if (month === 12) {
					if (isLeapYear) {
						return 30;
					} else {
						return 29;
					}
				} else {
					return 30;
				}
			}
		},
		parseNextMonth() {
			// Push `this.datetimePickerObj.monthsArray` one month forward
			let newlyCreatedDate = this.datetimePickerObj.monthsArray.secondMonth.month;
			newlyCreatedDate.push(1);

			// re-render months by new `monthsArray` object object
			this.populateAndRenderMonthsArray(newlyCreatedDate);

			let nextMonth = new PersianDate(newlyCreatedDate);
			let secondCalenderNext = nextMonth.add('M', 1);
			this.formattedFirstYearAndMonth = nextMonth.format('MMMM YYYY');
			this.formattedSecondYearAndMonth = secondCalenderNext.format('MMMM YYYY');
		},
		parsePreviousMonth() {
			let newlyCreatedDate = this.datetimePickerObj.monthsArray.firstMonth.month;
			// Push `this.datetimePickerObj.monthsArray` one month backward
			if (newlyCreatedDate[1] === 1) {
				newlyCreatedDate[1] = 12;
				newlyCreatedDate[0] = newlyCreatedDate[0] - 1;
			} else {
				newlyCreatedDate[1] = newlyCreatedDate[1] - 1;
			}

			newlyCreatedDate.push(1);

			// re-render months by new `monthsArray` object object
			this.populateAndRenderMonthsArray(newlyCreatedDate);

			//change the title of month by clicking prev
			let prevMonth = new PersianDate(newlyCreatedDate);
			let secondCalenderPrev = prevMonth.add('M', 1);
			this.formattedFirstYearAndMonth = prevMonth.format('MMMM YYYY');
			this.formattedSecondYearAndMonth = secondCalenderPrev.format('MMMM YYYY');
		},
		// format year and month header in single date selection
		formatYearAndMonth() {
			// when there is no selected date
			if (!this.selectedDateArray) {
				return;
			}

			let selectedMonth = new PersianDate(this.currentMonthArray);
			let selectedDate = new PersianDate(this.selectedDateArray);
			let nextSelectedMonth = selectedMonth.add('M', 1);
			this.formattedDayOfWeek = selectedDate.format('dddd, DD MMMM');
			this.formattedFirstYearAndMonth = selectedMonth.format('MMMM YYYY');
			this.formattedSecondYearAndMonth = nextSelectedMonth.format('MMMM YYYY');
		},
		// format year and month header in range date selection
		formatRangeOfDates() {
			let selectedMonth = new PersianDate(this.currentMonthArray);
			let nextSelectedMonth = selectedMonth.add('M', 1);
			this.formattedFirstYearAndMonth = selectedMonth.format('MMMM YYYY');
			this.formattedSecondYearAndMonth = nextSelectedMonth.format('MMMM YYYY');

			let timeHeaderFormat = this.time ? 'dddd, DD MMMM YYYY, HH:mm' : 'dddd, DD MMMM YYYY';

			if (this.rangeDateArray[0]) {
				// because if the range is selected, the next click that removes the range,
				// should remove the second `formattedRangeOfDates`
				this.formattedRangeOfDates[1] = this.formattedRangeOfDates[1]
					? null
					: this.formattedRangeOfDates[1];

				this.formattedRangeOfDates[0] = new PersianDate(this.rangeDateArray[0].date).format(
					timeHeaderFormat,
				);
			}

			if (this.rangeDateArray[1]) {
				this.formattedRangeOfDates[1] = new PersianDate(this.rangeDateArray[1].date).format(
					timeHeaderFormat,
				);
			}
		},
		// 'internalDateId' generator for each date ====>>>> [1398, 12,23] => cl-dtp-1398-12-23
		internalDateIdGenerator(dateArray) {
			return 'cl-dtp' + '-' + dateArray[0] + '-' + dateArray[1] + '-' + dateArray[2];
		},
		selectDate(dayObj) {
			// creates a new day object instance each time, because if the 2 selected dates
			// is in 1 day, the reference of 2 selected date objects link to each other,
			// that cause some bugs, specially  in time-selection
			let dayObject = this.createDateObjectUnit(new PersianDate(dayObj.date));

			this.selectedInternalDateId = dayObj.internalDateId;

			// check for range is enabled
			if (this.range) {
				switch (this.rangeDateArray.length) {
					// reset range date array
					case 2: {
						this.rangeDateArray = [];
						this.rangeDateArray.push(dayObject);
						// clear `isActivatedInRange` for date items
						this.clearDateRanges();
						break;
					}
					// populate range dates
					case 1: {
						this.rangeDateArray.push(dayObject);
						this.populateDateRanges();
						break;
					}
					// in case that user clicked the first date for the FIRST TIME
					case 0: {
						this.rangeDateArray = [];
						this.rangeDateArray.push(dayObject);
						break;
					}
					default:
						'salam';
				}

				this.formatRangeOfDates();
			} else {
				// used for non range mode
				this.selectedDateArray = dayObject.date;
				this.formatYearAndMonth();
			}
		},
		// emit data of ranges
		emitDateRanges() {
			const persianDateList = this.rangeDateArray.map(
				(rangeDate) => new PersianDate(rangeDate.date),
			);
			const formattedDateList = persianDateList.map((persianDate) =>
				this.convertToEnglishNumber(persianDate.format(this.format)),
			);
			const unixTimestampList = persianDateList.map((persianDate) => persianDate.format('X'));

			Object.defineProperty(unixTimestampList, 'realUnixTimestampList', {
				configurable: true,
				writable: true,
				enumerable: false,
				value: persianDateList.map((persianDate) => persianDate.valueOf().toString()),
			});

			this.$emit('input', formattedDateList.join(' - '));
			this.$emit('onDateSelected', formattedDateList);
			this.$emit('onEmitUnixTimestamp', unixTimestampList);
		},
		emitSingleDate() {
			const selectedPersianDate = new PersianDate(this.selectedDateArray);
			const selectedDate = this.convertToEnglishNumber(
				selectedPersianDate.format(this.format),
			);
			const selectedUnixList = [selectedPersianDate.format('X')];

			Object.defineProperty(selectedUnixList, 'realUnixTimestampList', {
				configurable: true,
				writable: true,
				enumerable: false,
				value: [selectedPersianDate.valueOf().toString()],
			});

			this.$emit('input', selectedDate);
			this.$emit('onDateSelected', [selectedDate]);
			this.$emit('onEmitUnixTimestamp', selectedUnixList);
		},
		createDateObjectUnit(dateInstance) {
			// make current date in an array
			let currentDateArray = this.createRawDateArray(dateInstance);

			let dateObject = {};
			dateObject.date = currentDateArray;
			dateObject.isFirstDay = false;
			dateObject.isLastDay = false;
			dateObject.internalDateId = this.internalDateIdGenerator(dateObject.date);

			return dateObject;
		},
		// example output: [1398, 3, 16]
		createRawDateArray(dateInstance) {
			let dateArray = [];
			// make date in an array
			dateArray[2] = parseInt(this.convertToPersianNumber(dateInstance.format('D')));
			dateArray[1] = parseInt(this.convertToPersianNumber(dateInstance.format('M')));
			dateArray[0] = parseInt(this.convertToPersianNumber(dateInstance.format('YYYY')));

			return dateArray;
			// example output: [1398, 3, 16]
		},
		populateDateRanges() {
			this.sortRangeDate();
			this.clearDateRanges();

			let firstDay = this.rangeDateArray[0];
			let secondDay = this.rangeDateArray[1];

			let firstDayDate = new PersianDate(firstDay.date);
			let secondDayDate = new PersianDate(secondDay.date);

			let daysDiff = secondDayDate.diff(firstDayDate, 'days');

			for (let i = 0; i < daysDiff; i++) {
				let addedDateInstance = firstDayDate.add('d', i);
				let addedDateObject = this.createDateObjectUnit(addedDateInstance);

				// determine which object is first day in range
				if (i === 0) {
					addedDateObject.isFirstDay = true;
				}

				// determine which object is last day in range
				if (i + 1 === daysDiff) {
					addedDateObject.isLastDay = true;
				}

				this.selectedDatesInRangeArray.push(addedDateObject);
			}

			this.populateAndRenderMonthsArray(
				this.datetimePickerObj.monthsArray.firstMonth.days[0].date,
			);
		},
		sortRangeDate() {
			let dateOne = new PersianDate(this.rangeDateArray[0].date).format('X');
			let dateTwo = new PersianDate(this.rangeDateArray[1].date).format('X');

			if (dateOne > dateTwo) {
				this.rangeDateArray = this.rangeDateArray.reverse();
			}

			// if (this.time) {
			this.rangeDateArray[0].date[3] = 0;
			this.rangeDateArray[0].date[4] = 0;

			this.rangeDateArray[1].date[3] = 23;
			this.rangeDateArray[1].date[4] = 59;
			// }
		},
		clearDateRanges() {
			this.selectedDatesInRangeArray = [];
			this.datetimePickerObj.monthsArray.firstMonth.days.forEach((item) => {
				item.isActivatedInRange = false;
				item.isFirstDay = false;
				item.isLastDay = false;
			});
			this.datetimePickerObj.monthsArray.secondMonth.days.forEach((item) => {
				item.isActivatedInRange = false;
				item.isFirstDay = false;
				item.isLastDay = false;
			});
		},

		confirmDateSelection() {
			if (this.range) {
				this.emitDateRanges();
			} else {
				this.emitSingleDate();
			}
		},
		parseStringToValidDate(stringDate) {
			let splittedDate = stringDate.split('/');

			splittedDate[2] = parseInt(splittedDate[2]);
			splittedDate[1] = parseInt(splittedDate[1]);
			splittedDate[0] = parseInt(splittedDate[0]);

			return new PersianDate(splittedDate);
		},
		compareDateToMinAndMaxDate(date, type) {
			const dateInstance = new PersianDate(date.date).format('X');

			if (type === 'min') {
				let isLowerThanMin = false;
				this.minDateInMilliseconds = this.parseStringToValidDate(this.min).format('X');

				isLowerThanMin = dateInstance < this.minDateInMilliseconds;
				return isLowerThanMin;
			}

			if (type === 'max') {
				let isHigherThanMax = false;
				this.maxDateInMilliseconds = this.parseStringToValidDate(this.max).format('X');

				isHigherThanMax = dateInstance > this.maxDateInMilliseconds;
				return isHigherThanMax;
			}
		},
		checkDayDisableByMinAndMax(dateObject) {
			let lessThanMin = false;
			let moreThanMax = false;
			if (this.min) {
				lessThanMin = this.compareDateToMinAndMaxDate(dateObject, 'min');
			}
			if (this.max) {
				moreThanMax = this.compareDateToMinAndMaxDate(dateObject, 'max');
			}

			return lessThanMin || moreThanMax;
		},
		setManualTimeForDateRange(rangeDateIndex) {
			const selectedDate = this.rangeDateArray[rangeDateIndex];
			this.selectedDateIndexForTimeSelection = rangeDateIndex;

			this.currentSelectedTime.hour = selectedDate.date[3];
			this.currentSelectedTime.minute = selectedDate.date[4];
		},
		setTimeForDate() {
			this.rangeDateArray[this.selectedDateIndexForTimeSelection].date[3] =
				this.currentSelectedTime.hour;
			this.rangeDateArray[this.selectedDateIndexForTimeSelection].date[4] =
				this.currentSelectedTime.minute;

			this.emitDateRanges();
			this.formatRangeOfDates();
		},
		timeIterator(action, type) {
			if (action === 'increase') {
				if (type === 'hour') {
					if (this.currentSelectedTime.hour === 23) {
						this.currentSelectedTime.hour = 0;
					} else {
						this.currentSelectedTime.hour++;
					}
				} else if (type === 'minute') {
					if (this.currentSelectedTime.minute === 59) {
						this.currentSelectedTime.minute = 0;
					} else {
						this.currentSelectedTime.minute++;
					}
				}
			} else if (action === 'decrease') {
				if (type === 'hour') {
					if (this.currentSelectedTime.hour === 0) {
						this.currentSelectedTime.hour = 23;
					} else {
						this.currentSelectedTime.hour--;
					}
				} else if (type === 'minute') {
					if (this.currentSelectedTime.minute === 0) {
						this.currentSelectedTime.minute = 59;
					} else {
						this.currentSelectedTime.minute--;
					}
				}
			}
		},
		generateYearSelectionArray(type = '+') {
			let year = this.yearSelectionArray[0] || this.currentMonthArray[0];

			if (type === '-') {
				year -= 16;
			} else if (type === '+') {
				year += 16;
			}

			this.yearSelectionArray = [];
			year--;
			for (let i = 0; i <= 15; i++) {
				year++;
				this.yearSelectionArray.push(year);
			}
		},
	},
	computed: {
		firstDayOfFirstMonthInWeek: function () {
			return parseInt(this.datetimePickerObj.monthsArray.firstMonth.days[0].dayOfWeek) - 1;
		},
		firstDayOfSecondMonthInWeek: function () {
			return parseInt(this.datetimePickerObj.monthsArray.secondMonth.days[0].dayOfWeek) - 1;
		},
		theme: function () {
			return {
				'--main-color': this.themeColor,
				'--secondary-color': this.themeColor + 'B3',
				'--hover-color': this.themeColor + '80',
			};
		},
	},
	filters: {
		prependZeroToTime: function (value) {
			value = value.toString();

			if (value.length === 2) {
				return value;
			}
			return '0' + value;
		},
	},
};
</script>

<style scoped lang="scss">
*,
*::after,
*::before {
	box-sizing: border-box;

	&:hover {
		transition: 0.2s;
	}
}

*::selection {
	background-color: transparent;
	color: inherit;
}

.disabled {
	opacity: 0.5;
	pointer-events: none;
}

.cl-dtp {
	transition: 0.3s;
	direction: rtl;

	.cl-dtp-container {
		width: 330px;
		height: auto;
		background-color: white;
		border-radius: 30px;
		box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
		padding: 16px;
		.double-month-container,
		.single-month-container {
			div {
				max-width: 377px;
			}
		}

		&.range-is-enabled {
			width: auto;
		}

		.cl-dtp-header {
			color: #fff;
			padding: 20px 20px;
			background-color: var(--main-color);
			font-size: 25px;

			&.range-header {
				display: flex;
				justify-content: space-between;

				.header-options {
					width: 30%;
				}

				.month-container {
					font-size: 20px;
					text-align: right;

					&:nth-child(1) {
						padding-bottom: 15px;
					}

					span {
						font-size: 12px;
						margin-right: 10px;
						border: 1px solid white;
						border-radius: 5px;
						padding: 5px 5px 2px 5px;
						cursor: pointer;
						transition: 0.3s;
						display: inline-block;

						&:hover {
							background-color: rgba(255, 255, 255, 0.13);
						}
					}
				}
			}

			.year-container {
				padding-bottom: 15px;
			}
		}

		.cl-dtp-month-selection {
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 40px;
			align-items: center;
			padding: 14px 14px;
			margin-bottom: 5px;

			div {
				cursor: pointer;
				color: #3c4858;

				span {
					background-image: url('../../../assets/img/icon/arrow-right.png');
					display: inline-block;
					width: 20px;
					height: 100%;
					background-size: contain;
					background-repeat: no-repeat;
					opacity: 0.7;
				}
			}

			.prev-month {
				height: 100%;
				width: 30px;
				display: flex;
				justify-content: flex-start;
			}
			.next-month {
				height: 100%;
				width: 30px;
				display: flex;
				justify-content: flex-end;

				span {
					transform: rotate(180deg);
				}
			}
		}

		.days-container {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			font-size: 14px;
			padding: 0 14px 0 14px;

			.day {
				width: 14.285%;
				height: 40px;
				text-align: center;
				line-height: 40px;
				margin-bottom: 10px;
				padding: 4px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				border-radius: 30px;

				&.selected-date {
					color: white;
					background-color: var(--main-color);
					border-radius: 30px;
				}

				&.selected-in-range {
					border-radius: 0;

					&.today {
						border-radius: 0;
					}

					&.is-first-day {
						background-color: var(--secondary-color);
						border-radius: 0 30px 30px 0;

						&:hover {
							border-radius: 0 30px 30px 0;
						}
					}
					&.is-last-day {
						background-color: var(--secondary-color);
						border-radius: 30px 0 0 30px;

						&:hover {
							border-radius: 30px 0 0 30px;
						}
					}
					&.is-first-day.is-last-day {
						border-radius: 30px;
					}

					color: black;
					background-color: var(--hover-color);

					&:hover {
						background-color: var(--secondary-color);
						border-radius: 0;
					}
				}

				.day-cell {
					/*background-color: #0a6ebd;*/
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					width: 36px;
					height: 36px;
					color: black;
					padding-top: 6px;

					&.selected-date {
						color: white;
						background-color: var(--main-color);
					}

					&.selected-in-range {
						color: black;
						background-color: var(--hover-color);
						border: 2px solid var(--main-color);
					}
				}

				&.mock-day {
					background-color: transparent;
					cursor: auto;

					&:hover {
						background-color: transparent;
					}
				}

				&.day-disabled {
					pointer-events: none;
					opacity: 0.3;
				}

				&.today {
					border: 1px solid var(--main-color);
					border-radius: 30px;
				}

				&:hover {
					color: white;
					background-color: var(--hover-color);
					border-radius: 30px;
				}
			}
		}
		.days-of-week-container {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			font-size: 12px;
			padding: 0 14px 0 14px;
			line-height: 20px;
			color: #b9b9b9;
			margin-bottom: 20px;
			height: 20px;

			.days-of-week {
				width: 14.285%;
				text-align: center;
			}
		}

		.double-month-container {
			display: flex;
		}

		.close-btn {
			position: absolute;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			border: 1px solid var(--main-color);
			color: var(--main-color);
			text-align: center;
			line-height: 36px;
			left: 10px;
			top: 10px;
			opacity: 0.5;
			transition: 0.3s;
			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}

		.time-picker-container {
			position: relative;
			width: 100%;
			height: 385px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.time-selection-container {
				display: flex;
				flex-direction: row;

				.minute-container,
				.hour-container {
					display: flex;
					align-items: center;
					flex-direction: column;

					.top-arrow,
					.bottom-arrow {
						height: 50px;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 25px;
						line-height: 50px;
						cursor: pointer;
						background-image: url('../../../assets/img/icon/arrow-right.png');
						background-size: contain;
						width: 30px;
						background-repeat: no-repeat;
						background-position: center;

						&::selection {
							background-color: transparent;
							color: inherit;
						}
					}

					.top-arrow {
						transform: rotate(-90deg);
					}
					.bottom-arrow {
						transform: rotate(90deg);
					}

					.time-shower {
						height: 120px;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 80px;
						width: 80px;
						border-radius: 10px;
						padding-top: 40px;
					}
				}

				.two-dots {
					display: flex;
					align-items: center;
					font-size: 80px;
					width: 80px;
					justify-content: center;
					padding-top: 30px;
				}
			}
			.confirm-button-container {
				padding-top: 20px;

				.confirm {
					font-size: 18px;
					margin-right: 10px;
					border: 1px solid var(--main-color);
					color: var(--main-color);
					border-radius: 5px;
					padding: 15px 10px 10px 10px;
					cursor: pointer;
					-webkit-transition: 0.3s;
					transition: 0.3s;
					background-color: white;
					width: 70px;
				}
				.cancel {
					color: var(--main-color);
					font-size: 18px;
					margin-right: 10px;
					border: 1px solid var(--main-color);
					background-color: white;
					border-radius: 5px;
					padding: 15px 10px 10px 10px;
					cursor: pointer;
					-webkit-transition: 0.3s;
					transition: 0.3s;
					width: 70px;
				}

				button:hover {
					color: #fff;
					background-color: var(--main-color);
					outline: none;
				}
			}
		}

		.year-month-selection-wrapper {
			width: 100%;
			position: relative;
			padding-top: 36px;

			.year-month-navigation-bar {
				width: 100%;
				display: flex;
				justify-content: space-between;
				height: 40px;
				align-items: center;
				padding: 14px 14px;
				margin-bottom: 5px;

				div {
					cursor: pointer;
					color: #3c4858;

					span {
						background-image: url('../../../assets/img/icon/arrow-right.png');
						display: inline-block;
						width: 20px;
						height: 100%;
						background-size: contain;
						background-repeat: no-repeat;
						opacity: 0.7;
					}
				}

				.prev-month {
					height: 100%;
					width: 30px;
					display: flex;
					justify-content: flex-start;
				}
				.next-month {
					height: 100%;
					width: 30px;
					display: flex;
					justify-content: flex-end;

					span {
						transform: rotate(180deg);
					}
				}
			}
			.year-selection-wrapper {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
				padding: 10px 15px;

				.year {
					width: 23%;
					height: 50px;
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 15px;
					margin-right: 10px;
					border-radius: 5px;
					padding: 7px 5px 2px 5px;
					cursor: pointer;
					-webkit-transition: 0.3s;
					transition: 0.3s;
					border: 1px solid var(--main-color);

					&.current-active-year {
						border: 4px double var(--main-color);
					}

					&:hover {
						background-color: var(--main-color);
						color: white;
					}
				}
			}
			.month-selection-wrapper {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
				padding: 10px 15px;

				.month {
					width: 23%;
					height: 50px;
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 15px;
					margin-right: 10px;
					border-radius: 5px;
					padding: 7px 5px 2px 5px;
					cursor: pointer;
					-webkit-transition: 0.3s;
					transition: 0.3s;
					border: 1px solid var(--main-color);

					&:hover {
						background-color: var(--main-color);
						color: white;
					}
				}
			}
		}

		.action-bar-container {
			display: flex;
			justify-content: flex-start;
			padding: 16px;
			button {
				border: 1px solid var(--main-color);
				color: var(--main-color);
				background-color: transparent;
				font-size: 16px;
				margin-right: 10px;
				border-radius: 5px;
				font-weight: bold;
				cursor: pointer;
				-webkit-transition: 0.3s;
				transition: 0.3s;
				display: inline-block;
				line-height: 25px;
				height: 45px;
				min-width: 80px;
				padding: 12px 8px 8px;
				opacity: 1;

				&.disable {
					opacity: 0.5;
					pointer-events: none;
				}

				&:hover {
					background-color: var(--main-color);
					color: white;
				}
			}
		}
	}
	.cl-dtp-mask {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 10000;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 768px) {
	.cl-dtp {
		.cl-dtp-container {
			top: 50px;

			.double-month-container {
				.second-month {
					display: none;
				}
			}
		}
	}
}
</style>
