<template>
  <div>
    <router-link to="/">
      Products
    </router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
