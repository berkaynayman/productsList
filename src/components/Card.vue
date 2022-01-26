<template>
    <div class="card mt-3" style="width: 25rem;">
      <img :src="product.img" :alt="product.Id">
      <div class="card-body">
        <h5 class="card-title">{{product.Title}}</h5>
        <div class="d-flex justify-content-between w-100">
          <a @click="updateCartList" class="btn btn-success w-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12"
            x2="19" y2="12"></line></svg>
            Add
          </a>
          <a @click="goToDetails(product.Id)" class="btn btn-info text-white w-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
            </path><circle cx="12" cy="12" r="3"></circle></svg>
            Detail
          </a>
        </div>
      </div>
  </div>
</template>

<script> 
export default {
    name: "Card",
    props:{
        product: Object,
        goToDetails: Object,
        updateCartList: Object
    }
}
</script>

<style scoped>
img{
  width:100%;
  height: 18rem;
  object-fit: cover;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: arial;
}
.card-title{
    white-space: nowrap; 
    overflow: hidden;
}
.price {
  color: grey;
  font-size: 22px;
}

.card button:hover {
  opacity: 0.7;
}
</style>