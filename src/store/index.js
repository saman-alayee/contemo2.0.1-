import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { appConfig } from './modules/appConfig';
import { userConfig } from './modules/userConfig';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	key: 'cp-seller-panel',
	storage: window.localStorage,
	reducer: (state) => ({
		userConfig: state.userConfig,
		appConfig: state.appConfig,
	}),
});

export default new Vuex.Store({
	modules: { appConfig, userConfig },
	plugins: [vuexLocal.plugin],
});
