import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/fluid/Overview'
import Reports from '@/components/fluid/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: Reports
    }
  ]
})
