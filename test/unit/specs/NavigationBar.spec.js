import Vue from 'vue'
import navigationBar from '@/components/NavigationBar'

describe('NavigationBar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(navigationBar)
    const vm = new Constructor().$mount()
    debugger
    expect('Welcome to Your Vue.js App')
      .toEqual('Welcome to Your Vue.js App')
  })
})
