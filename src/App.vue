<template>
  <div class="container my-5">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){
    console.log(this.$store.state.products);
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
