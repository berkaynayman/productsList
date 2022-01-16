<template>
    <div>
        <h1>detail page</h1>
        <h2>{{ $route.params}}</h2>
        <h2>{{ $store.state.productDetail }}</h2>

    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params);
        this.$store.dispatch("getProductDetail", this.$route.params)
    }
}
</script>