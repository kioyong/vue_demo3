import Vue from 'vue'
import Router from 'vue-router'
// import Overview from '@/components/fluid/overview/Overview'
// import Itadmin from '@/components/fluid/itadmin/Itadmin'
// import Reports from '@/components/fluid/Reports'
// import Analytics from '@/components/fluid/Analytics'
// import Export from '@/components/fluid/Export'
import Login from '@/components/Login'
import Management from '@/components/Management'
import Analytics from '@/components/fluid/Analytics'
import Export from '@/components/fluid/Export'
import Reports from '@/components/fluid/Reports'
import NewJoiner from '@/components/fluid/overview/NewJoiner'
import Itadmin from '@/components/fluid/itadmin/Itadmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/management',
      component: Management,
      children: [
        {
          path: '/overview',
          component: NewJoiner
        },
        {
          path: '/analytics',
          component: Analytics
        },
        {
          path: '/export',
          component: Export
        },
        {
          path: '/reports',
          component: Reports
        },
        {
          path: '/itadmin',
          component: Itadmin
        }
      ]
    }
  ]
})
