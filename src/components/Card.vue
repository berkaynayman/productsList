<template>
    <div class="card" style="width: 18rem;">
      <img :src="product.img" alt="Denim Jeans" style="width:100%">
      <div class="card-body">
        <h5 class="card-title">{{product.Id}}</h5>
        <p class="card-text">{{product.Description}}</p>
        <a @click="goToDetails(product.Id)" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props:{
        product: Object
    },
    methods: {
        goToDetails(id){
            this.$router.push(`/product/detail/${id}`)
        }
    }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>