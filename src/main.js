import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import PATH from '@/utils/applicationPath';
import store from './store';
import GlobalComponents from '@/utils/globalComponents';
import '@/utils/globalLibraries';
import ApiServiceLayer from './plugins/apiServiceLayer';
import './validators/index';

Vue.config.productionTip = false;
Vue.prototype.$PATH = PATH;
Vue.prototype.$ApiServiceLayer = new ApiServiceLayer();
Vue.use(GlobalComponents);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
