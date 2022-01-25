<template>
  <div class="container">
    <ul class="nav justify-content-start bg-light">
      <li class="nav-item bg-info">
        <router-link class="nav-link active" aria-current="page" to="/">
          Products
        </router-link>
      </li>
      <li class="nav-item bg-info">
        <router-link class="nav-link" to="/cart">
          Cart
        </router-link>
      </li>
    </ul>
    
    
    <router-view />

    <p class="text-end">End aligned text on all viewport sizes.</p>
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
