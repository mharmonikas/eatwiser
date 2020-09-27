import Vue from "vue";
import Router from "vue-router";
// import Head from 'vue-head'
import Home from "@/views/Home";
import DietDetails from "@/components/DietDetails";
import Cart from "@/components/Cart";

Vue.use(Router);
// Vue.use(Head, { complement: process.env.VUE_APP_TITLE })

const routes = [
  { path: "/", name: "home", component: Home, meta: { authRequired: false } },
  {
    path: "/diet-details/:id",
    name: "diet-details",
    component: DietDetails
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  },
  { path: "*", redirect: "/" }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
