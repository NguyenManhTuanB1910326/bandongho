import { createRouter, createWebHistory } from "vue-router";
import ProductDetail from "../views/ProductsDetailView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    // meta: {
    //   layout: "default", //Đặt trong route.meta.layout để nó hiểu
    // },
    //Mặc định là meta.layout là deafault
    component: () => import("../views/IndexView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PaymentView.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      layout: "admin", //Đặt trong route.meta.layout để nó hiểu
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
  },
  {
    path: "/bill",
    name: "Bill",
    meta: {
      layout: "admin", //Đặt trong route.meta.layout để nó hiểu
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BillView.vue"),
  },
  {
    path: "/addproduct",
    name: "Add",
    meta: {
      layout: "admin", //Đặt trong route.meta.layout để nó hiểu
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProductsView.vue"),
  },
  {
    path: "/orderhistory",
    name: "OrderHistory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderHistoryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
