import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Categories from "@/views/Categories.vue";
import Category from "@/views/Category.vue";

import Discount from "@/components/discounts/Discount.vue";
import AddDiscount from "@/components/discounts/AddDiscount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },
  {
    path: "/discounts/:id",
    name: "Discount",
    component: Discount,
  },
  {
    path: "/add",
    name: "AddDiscount",
    component: AddDiscount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
