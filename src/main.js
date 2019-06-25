import Vue from 'vue';
import App from './App';
import axios from 'axios';

Vue.config.productionTip = false;

// 将axios添加至Vue的原型中
axios.defaults.baseURL = '/api';
Vue.prototype.axios = axios;

new Vue({
	el : '#app'
	,render : h => h(App)
});