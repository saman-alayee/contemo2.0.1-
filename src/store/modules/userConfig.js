export const userConfig = {
	namespaced: true,
	state: {
		accessToken: '',
		refreshToken: '',
		otpId: '',
		loginTempToken: '',
		userPhoneNumber: '',
		userInfo: null,
	},
	mutations: {
		setAccessToken(state, payload) {
			state.accessToken = payload;
		},
		setRefreshToken(state, payload) {
			state.refreshToken = payload;
		},
		setOtpId(state, payload) {
			state.otpId = payload;
		},
		setLoginTempToken(state, payload) {
			state.loginTempToken = payload;
		},
		setUserPhoneNumber(state, payload) {
			state.userPhoneNumber = payload;
		},
		setUserInfo(state, payload) {
			state.userInfo = payload;
		},
		clearAllConfigs(state) {
			state.accessToken = undefined;
			state.refreshToken = undefined;
			state.userPhoneNumber = undefined;
		},
	},
};
