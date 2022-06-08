import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import ProfilView from '../views/ProfilView'
import Login from '../components/Login'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: ProfilView
  },
  {
    path: '/',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to) => {
//  if(isLoginValid(to)){
//    return router.push("/login")
//  }
// })
// function isLoginValid(to){
//   if(!isPrivatePage(to)) return false
// // if(!isTokenInCache()) return true
// // return false
// }

// function isPrivatePage(to){
//   const privatePages = ["/login", "/signup"]
//   return !privatePages.includes(to.path)
// }

// function isTokenInCache(){
// return localStorage.getItem("token") != null
// }

export default router
