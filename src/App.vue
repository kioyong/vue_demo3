<template>
  <div id="app">
    <navigationBar></navigationBar>
    <container></container>
  </div>
</template>

<script>
import navigationBar from './components/NavigationBar'
import container from './components/Container'
export default {
  name: 'App',
  components: {
    navigationBar,
    container
  }
}
</script>

<style>
@import '../static/css/dashboard.css';
</style>
