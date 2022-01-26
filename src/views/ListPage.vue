<template>
    <div class="cards">
        <Card v-for="product in $store.state.products"
            :key="product.Id"
            :product="product"
            :updateCartList="updateCartList"
            :goToDetails="goToDetails"
        />
    </div>
</template>

<script>
import {mapActions} from "vuex"
import Card from "../components/Card.vue"

export default {
    components:{
        Card
    },
    methods:{
        ...mapActions([
            'updateCartList'
        ]),
        goToDetails(id){
            this.$router.push(`/product/detail/${id}`)
        }
    },

}
</script>

<style scoped>
.cards{
    display: flex;
    flex-wrap: wrap;
}
</style>