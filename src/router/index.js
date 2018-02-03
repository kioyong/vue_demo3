import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/fluid/overview/Overview'
import Itadmin from '@/components/fluid/itadmin/Itadmin'
import Reports from '@/components/fluid/Reports'
import Analytics from '@/components/fluid/Analytics'
import Export from '@/components/fluid/Export'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Itadmin',
      name: 'Itadmin',
      component: Itadmin
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/Analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/Export',
      name: 'Export',
      component: Export
    }
  ]
})
