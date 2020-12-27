import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery/dist/jquery.min.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style.css'
import gsap from "gsap"
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 
gsap.registerPlugin(); 

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
