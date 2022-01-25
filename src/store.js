import {createStore} from "vuex"
import {products} from "./assets/products.js"

const store = createStore({
    state: {
        products,
        cartList: []
    },
    getters:{
        getProductDetail: (state) => (id) => {
            return state.products.find(p => p.Id === id)
        }
    },
    mutations:{
        updateCartList(state, product){
            state.cartList.push(product)
            console.log("mutaions log");
            console.log(state.cartList);
        }
    },
    actions:{
        updateCartList (context, product){
            context.commit('updateCartList', product)
        }
    }
});

export default store;