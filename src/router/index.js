import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'
import Result from '@/components/Result'
import Onboarding from '@/components/Onboarding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: Onboarding
    },
    {
      path: '/progress/',
      name: 'Result',
      component: Result
    },
    {
      path: '/quiz/',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
