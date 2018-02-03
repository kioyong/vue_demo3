<template>
    <div>
      <navigationBar></navigationBar>
        <div class="container-fluid">
        <div class="row">
          <sideBar></sideBar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </main>
        </div>
      </div>
    </div>

  <!-- <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{{msg}}</a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav> -->
</template>

<script>
import navigationBar from './NavigationBar'
import sideBar from './SideBar'
export default {
  name: 'Management',
  components: {
    navigationBar,
    sideBar
  },
  created () {
    this.$router.push('overview')
  }
}
</script>

<style scoped>
@import '../../static/css/dashboard.css';
</style>
