import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./auth-guard";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Notifications from "@/views/Notifications.vue";
import Categories from "@/views/Categories.vue";
import Category from "@/views/Category.vue";
import AddDiscount from "@/views/AddDiscount.vue";
import AddCategory from "@/views/AddCategory.vue";

import Discount from "@/components/discounts/Discount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: AuthGuard,
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
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications
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
    path: "/add-discount",
    name: "AddDiscount",
    component: AddDiscount,
  },
  {
    path: "/add-category",
    name: "AddCategory",
    component: AddCategory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
