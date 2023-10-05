import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function () {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import("../views/Login.vue");
    },
  },
  {
    path: "/register",
    name: "Register",
    component: function () {
      return import("../views/Register.vue");
    },
  },
  {
    path: "/baskets",
    name: "ProductShop",
    component: function () {
      return import("../views/ProductShop.vue");
    },
  },
  {
    path: "/contacts",
    name: "Contact",
    component: function () {
      return import("../views/Contacts.vue");
    },
  },
  {
    path: "/favorites",
    name: "ProductFavorite",
    component: function () {
      return import("../views/ProductFavorite.vue");
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: function () {
      return import("../views/Shop.vue");
    },
  },
  {
    path: "/products/:id/:title",
    name: "ProductDetails",
    component: function () {
      return import("../views/ProductDetails.vue");
    },
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "navbar-active",
  linkExactActiveClass: "navbar-active",
});

export default router;
