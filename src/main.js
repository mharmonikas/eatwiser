import Vue from "vue";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
// import VueSocialSharing from 'vue-social-sharing'
import vuetify from "@/plugins/vuetify";
import App from "./App";
import router from "./router";
// import store from './store'
// import './filters'
// import '@/misc/register-service-worker'
// import '@/misc/handle-network-status'
// import '@/misc/handle-apple-install-prompt'
// import 'pwacompat'
// import './sass/variables.scss'

// Vue.use(VueSocialSharing);

Vue.use(VueMoment, {
  moment
});

Vue.prototype.moment = moment;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
