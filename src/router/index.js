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
const Article = () => import('./../views/Article/Article')
const Community = () => import('./../views/Community/Community')
const LosePsw = () => import('./../views/LosePsw/LosePsw')
const Position = () => import('./../views/Position/Position')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/position',
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
          path: 'article',
          component: Article
        },
        {
          path: 'position',
          component: Position
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
    }
  ]
})
