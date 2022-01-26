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
        },
        filteredProducts: () => () => {
            //console.log(state.products.filter(p => p.Title == "Pastel"))
            console.log("...")
        }
    },
    mutations:{
        updateCartList(state, product){
            state.cartList.push(product)
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