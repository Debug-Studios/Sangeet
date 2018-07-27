import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';

// Import Semantic UI
import 'semantic-ui/dist/semantic.min.css';
import 'semantic-ui/dist/semantic.min.js';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
