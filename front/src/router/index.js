import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import ProfilView from "../views/ProfilView";
import Login from "../components/Login";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: ProfilView,
  },
  {
    path: "/",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   if (!isPrivatePage(to)) return true;
//   const token = localStorage.getItem("token");
//   return token == null ? {name:"LoginView"} : true;
// });

// function isPrivatePage(to) {
//   const privatePages = ["/login", "/signup"];
//   return privatePages.includes(to.path);
// }

export default router;
