import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import { Tabbar, TabbarItem } from 'vux'
import  { ToastPlugin, LoadingPlugin } from 'vux'

import Home from './components/Home';
import Invest from './components/Invest';
import Detail from './components/Detail';
import Reg from './views/user/Reg';
import Login from './views/user/Login';

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter);

const routes = [
	{
	  path: '/',
	  component: Home,
	},{
	  path: '/invest',
	  component: Invest,
	},{
	  path: '/detail',
	  component: Detail,
	},{
	  path: '/reg',
	  component: Reg,
	},{
	  path: '/login',
	  component: Login,
	}
];

const router = new VueRouter({
  routes,
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');
