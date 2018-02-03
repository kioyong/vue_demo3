<template>
  <div>
    <!-- <dashboard :class="{'active': overviewModular.dashboard}"></dashboard>
    <newjoiner :title="newjoinerTitle" :employees="employees" :class="{'active': overviewModular.newjoiner}"></newjoiner> -->
    <!-- TODO 由ItAdmin 控制展示哪一些fluid -->
    <dashboard></dashboard>
    <newjoiner :title="newjoinerTitle" :employees="employees"></newjoiner>
  </div>
</template>

<script>
import dashboard from './Dashboard'
import newjoiner from './NewJoiner'
import {employees} from '@/mock/data/employeeList'
import {overviewModular} from '@/mock/data/overviewModular'
export default {
  name: 'Overview',
  components: {
    dashboard,
    newjoiner
  },
  data () {
    return {
      newjoinerTitle: 'Latest 10 newJoiner',
      employees: employees,
      overviewModular: overviewModular
    }
  }
}
</script>
<style>
.active {
  display: none;
}
</style>
