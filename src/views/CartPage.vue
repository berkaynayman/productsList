<template>
    <div>
        <ul>
            <li v-for="(product, index) in $store.state.cartList" :key="index">
                {{product}}
            </li>
        </ul>
        CART PAGE
        
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$store.state.cartList);
    }
}
</script>