<template>
    <div class="card">
        <img :src="product.img" alt="Denim Jeans" style="width:100%">
        <h1>{{product.Id}}</h1>
        <p class="price">${{product.price}}</p>
        <p>{{product.Description}}</p>
        <p><button @click="goToDetails(product.Id)">Product Detail</button>
           <button>Add to Cart</button></p>
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