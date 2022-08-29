import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

//length validator
extend('length', (value, param) => {
	if (value.length === parseInt(param['0'])) {
		return true;
	}

	return formatErrorMessage('طول [1] باید [2] باشد ', 0, param);
});
//max length validator
extend('maxLength', {
	params: ['max'],
	validate(value, { max }) {
		return value.length <= max;
	},
	message: 'این فیلد باید از {max} کمتر باشد',
});

//max value validator
extend('maxValue', {
	params: ['max'],
	validate(value, { max }) {
		if (typeof value === 'string') {
			value = parseInt(value);
		}

		return value <= max;
	},
	message: 'این فیلد باید از {max} کمتر باشد',
});

//max value validator
extend('minValue', {
	params: ['min'],
	validate(value, { min }) {
		if (typeof value === 'string') {
			value = parseInt(value);
		}

		return value >= min;
	},
	message: 'این فیلد باید از {min} بیشتر باشد',
});

//min length validator
extend('minLength', {
	params: ['min'],
	validate(value, { min }) {
		return value.length >= min;
	},
	message: 'این فیلد باید از {min} بیشتر باشد',
});

//required validator
extend('required', {
	...required,
	message: formatErrorMessage('[1] لازم است.', 0, null),
});
extend('email', {
	...email,
	message: formatErrorMessage('فرمت [1] صحیح نیست', 0, null),
});
//startwith validator
extend('startwith', (value, param) => {
	if (value.substring(0, 1) === param[0]) {
		return true;
	}

	return formatErrorMessage('[1] باید با [2] شروع شود', 0, param);
});

extend('key', (value, param) => {
	console.log(value, param);
	return true;
});

//regex validator
extend('regex', (value, param) => {
	let pattern = new RegExp(param[0], 'g');

	value = typeof value === 'number' ? value.toString() : value;

	if (value.match(pattern)) {
		return true;
	}

	return formatErrorMessage('الگوی [1] اشتباه است.', 0, null);
});

// The method that format the message received from the server
// with the message that valid for 'vee-validate'
function formatErrorMessage(message, indexOfTitle, params) {
	//An array which contains all dynamic placeholder that received
	// from the server('[1] or [2] or ...')
	let dynamicErrorParameters = message.match(/\[.*?]/g);

	// The variable that holds how many 'params'(received as parameters above)
	// replaced with dynamic placeholders
	let paramsCalculated = 0;

	// The loop that replaces all dynamic placeholders with 'params'
	dynamicErrorParameters.forEach((item, index) => {
		// replace placeholder with has to be the title of error
		// like 'نام کاربری' or 'شماره تلفن'
		if (index === indexOfTitle) {
			message = message.replace(item, '{_field_}');
		} else {
			message = message.replace(item, '' + params[paramsCalculated] + '');

			paramsCalculated++;
		}
	});

	return message;
}
