<template>
<div>
  <div>
    <h1 class="page-header">Itadmin</h1>
    <div class="sub-header row">
      <div class="col-xs-3">
        <form>
          <input type="text" class="form-control" placeholder="Search...">
        </form>
      </div>
      <button type="button" class="btn btn-primary">Search</button>
      <button type="button" class="btn btn-primary ">Refresh</button>
    </div>

    <div class="sub-header">
      <table class="table table-striped">
        <thead><tr><th>Name</th></tr></thead>
        <tbody>
          <tr v-for="(tableName,index) in tableNames" :key="index">
            <td><a>{{tableName}}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
</template>
<script>
export default {
  name: 'itadmin',
  data () {
    return {
      tableNames: [
        'OverviewModular',
        'Employees',
        'Department',
        'Location'
      ]
    }
  }
}
</script>
<style scoped>
.itadmincss {
    margin-top: 0
}
</style>
