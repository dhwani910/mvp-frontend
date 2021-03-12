import Vue from 'vue'
import VueRouter from 'vue-router';
// import SignupPage from "../views/Signup.vue";
import LoginPage from "../views/Login.vue";
import FeedPage from "../views/Feed.vue";
import UserProfile from "../views/Profile.vue";
import RatePage from "../views/Rate.vue";
import GamePage from "../views/Game.vue"




Vue.use(VueRouter)

const routes = [
  // {
   
  //   path: '/',
  //   name: 'signup-page',
  //   component: SignupPage
  // },
  {
   
    path: '/login',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/feed',
    name: 'feed-page',
    component: FeedPage
    
  },
  {
    path: '/profile',
    name: 'user-profile',
    component: UserProfile
  },
  {
    path: '/rate',
    name: 'rate-page',
    component: RatePage
  },
  {
    path: '/game',
    name: 'game-page',
    component: GamePage
  },
 
  
]

const router = new VueRouter({
  routes
})

export default router
