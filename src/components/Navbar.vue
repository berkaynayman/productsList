<template>
<nav class="navbar navbar-expand-lg navbar-light bg-info display-6">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link text-white" aria-current="page" to="/">
                        Products
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" aria-current="page" to="/cart">
                        Cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        ({{ $store.state.cartList.length }})
                    </router-link>
                </li>
            </ul>
            <form class="d-flex">
                <!-- v-model="search" @keyup="filteredProducts(search)" -->
                <input v-model="search" class="form-control me-2"  id="inputGroup-sizing-lg" placeholder="Search...">
            </form>
        </div>
    </div>
</nav>
</template>

<script>
import {mapActions} from "vuex"

export default{
    data(){
        return{
            search: ""
        }
    },
    watch:{
        search(newsearch) {
            this.filteredProducts(newsearch)
        }
    },
    methods:{
        ...mapActions([
            "filteredProducts"
        ]),
        filtered: function(){
            return console.log("search", this.search);
        }
    }
}
</script>
