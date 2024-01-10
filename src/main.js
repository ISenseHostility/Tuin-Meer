import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './assets/styles/global.sass';
import Home from "@/components/Home";
import VueAgile from "vue-agile";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faEnvelope, faPhone, faLandmark, faChevronLeft, faChevronRight, faInstagram)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAgile)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const routes = [
  { path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

