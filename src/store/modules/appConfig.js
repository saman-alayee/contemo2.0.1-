export const appConfig = {
	namespaced: true,
	state: {
		closeMenu: false,
		error: '',
		mobileMobile: false,
	},
	mutations: {
		changeMenuStatus(state, payload) {
			state.closeMenu = payload;
		},
		openMenuMobile(state, payload) {
			state.mobileMobile = payload;
		},
		setError(state, payload) {
			state.error = payload;
			setTimeout(() => {
				state.error = null;
			}, 3000);
		},
	},
};
