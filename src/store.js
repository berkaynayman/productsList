import {createStore} from "vuex"
import {products} from "./assets/products.js"

const store = createStore({
    state: {
        products,
        productDetail: []
    },
    mutations: {
        setProductDetail(state, product){
            state.productDetail = [...product]
        }
    },
    actions: {
        getProductDetail(context, productId){
            const filterData = context.state.products.filter(item => item.Id == productId )
            context.commit("setProductDetail", filterData)
        }   
    }
});

export default store;