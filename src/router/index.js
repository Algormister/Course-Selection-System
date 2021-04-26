import { createRouter, createWebHashHistory } from 'vue-router'
const Home = ()=>import('../views/home')
const HomePage = ()=>import('../views/homepage')
const Login = ()=>import('../views/login')
const ChooseLessons = ()=>import('../views/chooselessons')
const ChooseTerm = ()=>import('../views/chooseterm')
const SelectTimeTable = ()=>import('../views/selectTimeTable')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/chooseterm',
    name: 'ChooseTerm',
    component: ChooseTerm
  },
  {
    path:'/home',
    component: Home,
    name: 'Home',
    children:[
      {
        path: '',
        component: HomePage
      },
      {
        path:'chooseLessons',
        component: ChooseLessons
      },
      {
        path: 'selectTimeTable',
        component: SelectTimeTable
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
