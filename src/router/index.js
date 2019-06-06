import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
const Layout = () => import('./../views/Layout/Layout')
const Index = () => import('./../views/Index/Index')
const Login = () => import('./../views/Login/Login')
const Register = () => import('./../views/Register/Register')
const Tour = () => import('./../views/Tour/Tour')
const News = () => import('./../views/News/News')
const Movie = () => import('./../views/Movie/Movie')
const Activity = () => import('./../views/Activity/Activity')
const Community = () => import('./../views/Community/Community')
const LosePsw = () => import('./../views/LosePsw/LosePsw')

const ArticleItem = () => import('./../views/ArticleItem/ArticleItem')
const AddActivity = () => import('./../views/AddActivity/AddActivity')
const Test = () => import('./../views/Test/Test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/layout/index',
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'tour',
          component: Tour
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'movie',
          component: Movie
        },
        {
          path: 'community',
          component: Community
        },
        {
          path: 'activity',
          component: Activity
        },
        {
          path: 'articleItem',
          name: 'articleItem',
          component: ArticleItem
        },
        {
          path: 'addActivity',
          name: 'addActivity',
          component: AddActivity
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/losePsw',
      component: LosePsw
    },
    {
      path: '/test',
      component: Test
    },
  ]
})
