<script>
export default {
    name: "CardDetail",
    props:{
      product:Object,
      updateCartList: Object
    },
    created(){
      console.log(this.product)
    }
}
</script>

<template>
    <div class="row border m-0">
      <div class="col-lg-5">
        <img :src="product.img" />
      </div>
      <div class="col-lg-7">
        <h1>{{product.Title}}</h1>
        <p>{{product.Description}}</p>
        <p class="display-6">${{product.price}}</p>
        <a @click="updateCartList(this.product)" class="btn btn-success btn-lg">Ekle</a>
      </div>
    </div>
</template>


<style scoped>
img{
  width: 100%;
}
</style>