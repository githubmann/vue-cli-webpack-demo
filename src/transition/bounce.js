/**
 * Created by rhb on 2016/10/14.
 */
import Vue from 'vue'

Vue.component('bounce', {
  functional: true,
  render (createElement, { children }) {
    const data = {
      props: {
        name: 'bounce'
      },
      on: {
        beforeEnter (el) {
          el.className = 'bounceInLeft'
        }, // <-- Note hooks use camelCase in JavaScript (same as 1.x)
        afterEnter (el) {
          el.className = 'bounceInRight'
        }
      }
    }
    return createElement('transition', data, children)
  }
})
