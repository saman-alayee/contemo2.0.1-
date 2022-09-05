export function commafy (number) {
	return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
