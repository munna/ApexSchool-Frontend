
<template>
  <div id="app">
    <AppHeader />
    <flash-message class="myCustomClass"></flash-message>
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/core/Components/Layout/AppHeader'
import AppFooter from '@/core/Components/Layout/AppFooter'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/css/custom.scss'
require('vue-flash-message/dist/vue-flash-message.min.css')

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style></style>
