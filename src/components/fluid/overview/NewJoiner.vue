<template>
  <div>
    <h2 class="sub-header">{{title}}</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee,index) in employees" :key="index">
            <td>{{employee.id}}</td>
            <td>{{employee.name}}</td>
            <td>{{employee.department}}</td>
            <td>{{employee.address}}</td>
            <td>{{employee.phone}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// TODO 抽取成公共组件,使之能复用
export default {
  name: 'newjoiner',
  props: ['title', 'employees']
}
</script>
