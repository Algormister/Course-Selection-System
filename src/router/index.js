import { createRouter, createWebHashHistory } from 'vue-router'
const Home = ()=>import('../views/home')
const HomePage = ()=>import('../views/homepage')
const Login = ()=>import('../views/login')
const ChooseLessons = ()=>import('../views/student/chooselessons')
const ChooseTerm = ()=>import('../views/chooseterm')
const SelectTimeTable = ()=>import('../views/student/selectTimeTable')
const DropCourses = ()=>import('../views/student/dropcourses')
const SelectDropedCourses = ()=>import('../views/student/selectDropedCourses')
// const SelectRank =()=>import('../views/student/selectRank')
const SelectTeachingCourses = ()=>import('../views/teacher/selectTeachingCourses')
const UsualResults = ()=>import('../views/teacher/usualResults')
const FinalExam = ()=>import('../views/teacher/finalExam')
const SelectStudent = ()=>import('../views/teacher/selectStudent')
const GradeQuery = ()=>import('../views/student/gradeQuery')
const PassedCourses = ()=>import('../views/student/passedCourses')

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
        path: 'gradeQuery',
        component: GradeQuery
      },
      {
        path: 'passedCourses',
        component: PassedCourses
      },
      // {
      //   path: 'selectRank',
      //   component: SelectRank
      // }
      {
        path: 'selectTeachingCourses',
        component: SelectTeachingCourses,
        children: [
          {
            path: ':courseId',
            component: SelectStudent
          }
        ]
      },
      {
        path: 'usualResults',
        component: UsualResults
      },
      {
        path: 'finalExam',
        component: FinalExam
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
