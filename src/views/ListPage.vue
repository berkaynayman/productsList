<template>
    <div class="cards">
        <Card v-for="product in $store.state.products"
            :key="product.Id"
            :product="product"
        />
    </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
    components:{
        Card
    }
}
</script>

<style scoped>
.cards{
    display: flex;
}
</style>