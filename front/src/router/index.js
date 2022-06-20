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



export default router;
