// default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Order from "@/pages/Order";

// Routering
export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
