import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
		meta: {
			title: 'باز یابی رمز عبور',
		},
		component: () => import('@/views/forgetPassword/index.vue'),
	},
	{
		path: '/new-password',
		meta: {
			title: 'رمز عبور جدید',
		},
		component: () => import('@/views/newPassword/index.vue'),
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
					breadcrumbs: [{ title: 'acc', url: 'accounts' }],
				},
				component: () => import('@/views/accounts/index.vue'),
			},
			{
				path: '/market',
				name: 'market',
				meta: {
					title: 'market',
					breadcrumbs: [{ title: 'acc', url: 'market' }],
				},
				component: () => import('@/views/market/index.vue'),
			},
			{
				path: '/market/basket',
				name: 'basket',
				meta: {
					title: 'basket',
					breadcrumbs: [{ title: 'basket', url: 'basket' }],
				},
				component: () => import('@/views/market/basket.vue'),
			},
			{
				path: '/content-cloud',
				name: 'contentCloud',
				meta: {
					title: 'ابر محتوایی',
					breadcrumbs: [{ title: 'ابر محتوایی', url: 'dashboard' }],
				},
				component: () => import('@/views/contentCloud/index.vue'),
			},
			{
				path: '/partners',
				name: 'partners',
				meta: {
					title: 'همکاران',
					breadcrumbs: [{ title: 'همکاران', url: 'partners' }],
				},
				component: () => import('@/views/partners/index.vue'),
			},
			{
				path: '/content-board',
				name: 'content-board',
				meta: {
					title: 'بوم محتوایی',
					breadcrumbs: [{ title: 'بوم محتوایی', url: 'content-board' }],
				},
				component: () => import('@/views/ContentBoard/index.vue'),
			},
			{
				path: '/chat-rooms',
				name: 'chat',
				meta: {
					title: 'chat',
					breadcrumbs: [{ title: 'chat', url: 'chat' }],
				},
				component: () => import('@/views/Chat/index.vue'),
			},
			{
				path: '/payments',
				name: 'payments',
				meta: {
					title: 'تراکنش ها',
				},
				component: () => import('@/views/payments/index.vue'),
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
