<script>
import {mapGetters} from 'vuex'
import CardDetail from '../components/CardDetail.vue'

export default {
    components: { CardDetail },
    data(){
        return{
            id: this.$route.params.id,
            productDetail: {},
            name: this.$store.state.name
        }
    },
    computed:{
        ...mapGetters([
            'getProductDetail'
        ])
    },
    created(){
        console.log(this.id);
        console.log(this.name)
    }
}
</script>

<template>
    <div>
        <h1>detail page</h1>
        <h2>{{ $route.params}}</h2>
        <CardDetail :product="getProductDetail(this.id)" :key="i" />
    </div>
</template>