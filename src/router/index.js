import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: '',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		meta: {
			title: 'home',
		},
		component: () => import('@/views/Home/index.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
