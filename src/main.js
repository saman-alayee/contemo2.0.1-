import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import PATH from '@/utils/applicationPath';
import store from './store';
import GlobalComponents from '@/utils/globalComponents';
import '@/utils/globalLibraries';

Vue.config.productionTip = false;
Vue.prototype.$PATH = PATH;
Vue.use(GlobalComponents);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
