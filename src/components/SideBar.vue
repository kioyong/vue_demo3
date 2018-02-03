<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li @click="goMenu(menu)" class="nav-item" v-for="(menu,index) in menus" :key="index">
          <a :class="{'active': menu.id === sidebarId}" class="nav-link">
            <span>{{menu.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'sideBar',
  data () {
    return {
      sidebarId: '',
      sidebarName: '',
      menus: [
        {
          id: '1',
          name: 'Overview'
        },
        {
          id: '2',
          name: 'Itadmin'
        },
        {
          id: '3',
          name: 'Analytics'
        },
        {
          id: '4',
          name: 'Export'
        },
        {
          id: '5',
          name: 'Reports'
        }
      ]
    }
  },
  watch: {
    'sidebarName' (name) {
      console.log('trigger sidebarName changed!!' + name)
      this.$router.push(name.toLowerCase())
    }
  },
  methods: {
    goMenu (mark) {
      this.sidebarId = mark.id
      this.sidebarName = mark.name
    }
  },
  created () {
    // this.$router.push({ name: 'Overview', params: { name: this.menus[0].name } })
  }
}
</script>
<style>

</style>
