import Vue from "vue";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
// import VueSocialSharing from 'vue-social-sharing'
import axios from "axios";
import VueAxios from "vue-axios";
import AxiosPlugin from "vue-axios-cors";
import vuetify from "@/plugins/vuetify";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);
Vue.use(AxiosPlugin);

Vue.use(VueMoment, {
  moment
});

Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
