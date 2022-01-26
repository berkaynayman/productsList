<script>
import {mapGetters, mapActions} from 'vuex'

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
    methods:{
      ...mapActions([
        'updateCartList'
      ])
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
    <div class="mt-5s">
        <CardDetail :product="getProductDetail(this.id)" :updateCartList="updateCartList" :key="i" />
    </div>
</template>