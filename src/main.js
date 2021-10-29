import Vue from 'vue'
import Router from './Router'
import store from './store'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faArrowRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
  store
}).$mount('#app')
