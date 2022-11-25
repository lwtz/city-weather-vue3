<template>
  <HomePageCity />
</template>

<script>
import HomePageCity from './pages/HomePageCity.vue'
import './css/index.css'

export default {
  name: 'App',
  components: {
    HomePageCity,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
