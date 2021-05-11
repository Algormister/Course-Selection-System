import { createRouter, createWebHashHistory } from 'vue-router'
const Home = ()=>import('../views/home')
const HomePage = ()=>import('../views/student/homepage')
const Login = ()=>import('../views/login')
const ChooseLessons = ()=>import('../views/student/chooselessons')
const ChooseTerm = ()=>import('../views/chooseterm')
const SelectTimeTable = ()=>import('../views/student/selectTimeTable')
const DropCourses = ()=>import('../views/student/dropcourses')
const SelectDropedCourses = ()=>import('../views/student/selectDropedCourses')
const SelectRank =()=>import('../views/student/selectRank')

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
      },
      {
        path: 'dropCourses',
        component: DropCourses
      },
      {
        path: 'selectDropedCourses',
        component: SelectDropedCourses
      },
      {
        path: 'selectRank',
        component: SelectRank
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
