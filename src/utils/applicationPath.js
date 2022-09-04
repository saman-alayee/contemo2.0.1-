const PATH = {
	GET_IMAGE_PATH: (path) => {
		return require('@/assets/img' + '/' + path);
		// usage in components : this.$Path.GET_IMAGE_PATH('apple-icon.png')
	},
	RELATIVE_PATH: {
		GET: {
			GET_EXCHANGE: '/api/v1/latest_exchange_rate/',
		},
		POST: {
			PHONE_NUMBER_OTP_REQ: '/api/v1/phone_number//',
			LOGIN: '/api/obtain-token/',
			REGISTER: '/api/auth/users/',
			RESET_PASSWORD: '/api/auth/users/reset_password/',
		},
	},
};

export default PATH;
