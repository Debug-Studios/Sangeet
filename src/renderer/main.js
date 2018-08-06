import Vue from 'vue';
import axios from 'axios';

// Element UI http://element.eleme.io/#/en-US
import ElementUI from 'element-ui';
import './assets/element-variables.scss';

import App from './App';
import router from './router';

import db from '../main/db/dataStore';
import uriCreator from '../main/db/uriCreator';

Vue.prototype.$db = db;
Vue.prototype.$uriCreator = uriCreator;

Vue.use(ElementUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
