<template>
    <div class="cards d-flex justify-content-between flex-wrap">
        <div class="card mb-3" v-for="(product, index) in $store.state.cartList" :key="index" style="max-width: 49%;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img :src="product.img" class="card-img" :alt="product.id">
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">{{product.Title}}</h5>
                    </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x-square btn-danger" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$store.state.cartList);
    }
}
</script>

<style scoped>
img{
    height:100%;
}
</style>