import velocity from 'velocity-animate';
import Notifications from 'vue-notification';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

const GlobalComponents = {
	// use packages
	install(Vue) {
		Vue.use(Notifications, { velocity });

		Vue.component('ValidationProvider', ValidationProvider);
		Vue.component('ValidationObserver', ValidationObserver);
	},
};

export default GlobalComponents;
