import velocity from 'velocity-animate';
import Notifications from 'vue-notification';

const GlobalComponents = {
	// use packages
	install(Vue) {
		Vue.use(Notifications, { velocity });
	},
};

export default GlobalComponents;
