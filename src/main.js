import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// mdb
import * as mdb from 'mdb-ui-kit';

import 'mdb-ui-kit/css/mdb.min.css';

Vue.use(mdb);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
