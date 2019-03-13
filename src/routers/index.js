import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import halls from "@/components/halls";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/halls",
      name: "halls",
      component: halls
    }
  ]
});
