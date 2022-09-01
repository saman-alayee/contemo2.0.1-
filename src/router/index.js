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
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'ورود',
		},
		component: () => import('@/views/login/index.vue'),
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: 'عضویت',
		},
		component: () => import('@/views/register/index.vue'),
	},
	{
		path: '/forget-password',
		name: 'foregtpassword',
		meta: {
			title: 'باز یابی رمز عبور',
		},
		component: () => import('@/views/forgetpassword/index.vue'),
	},
	{
		path: '/verify',
		name: 'verify',
		meta: {
			title: 'اعتبار سنجی ',
		},
		component: () => import('@/views/verify/index.vue'),
	},
	{
		path: '/',
		name: '/layout',
		redirect: '/dashboard',
		component: () => import('@/layout/Layout.vue'),
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				meta: {
					title: 'داشبورد',
					breadcrumbs: [{ title: 'داشبورد', url: 'dashboard' }],
				},
				component: () => import('@/views/dashbaord/index.vue'),
			},
			{
				path: '/accounts',
				name: 'accounts',
				meta: {
					title: 'acc',
					breadcrumbs: [{ title: 'acc', url: 'dashboard' }],
				},
				component: () => import('@/views/accounts/index.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
