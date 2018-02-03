<template>
  <div class="container-fluid">
    <div class="row">
      <sideBar></sideBar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- <router-view/> -->
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from './SideBar'
export default {
  name: 'container',
  components: {
    sideBar
  }
}
</script>
<style>
</style>
