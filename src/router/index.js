import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Categories from "@/views/Categories.vue";
import Discounts from "@/views/Discounts.vue"
import Discount from "@/components/discounts/Discount.vue"

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
    component: Register
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: Discounts
  },
  {
    path: "/discounts/:id",
    name: "Discount",
    component: Discount
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
