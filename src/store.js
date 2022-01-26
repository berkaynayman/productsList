import {createStore} from "vuex"
import {products} from "./assets/products.js"

const store = createStore({
    state: {
        productsList: products,
        cartList: [],
        filtered: []
    },
    getters:{
        getProductDetail: (state) => (id) => {
            return state.productsList.find(p => p.Id === id)
        }
    },
    mutations:{
        updateCartList(state, product){
            console.log(product);
            state.cartList.push(product)
        },
        filteredProducts(state, item) {
            if(item){
                state.filtered = products.filter((product) => product.Title.toUpperCase().includes(item.toUpperCase()))
                console.log(state.filtered);
            }
            if(state.filtered){
                console.log("state.filtered.lenght", state.filtered.lenght);
                state.productsList = [...state.filtered]
            }
        }
    },
    actions:{
        updateCartList (context, product){
            context.commit('updateCartList', product)
        },
        filteredProducts (context, item){
            context.commit('filteredProducts', item)
        }
    }
});

export default store;