<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li @click="goMenu(menu)" :class="{'active': menu.id === sidebarId}" v-for="(menu,index) in menus" :key="index">
        <a >
          {{menu.name}} <span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
  </div>
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
      this.$router.push({name: name})
    }
  },
  methods: {
    goMenu (mark) {
      this.sidebarId = mark.id
      this.sidebarName = mark.name
    }
  },
  created () {
    this.$router.push({ name: 'Overview', params: { name: this.menus[0].name } })
  }
}
</script>
<style>

</style>
