import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: "ListPage",
        path: "/",
        component : () => import("./views/ListPage.vue")
    },
    {
        name: "DetailPage",
        path: "/product/detail/:id",
        component : () => import("./views/DetailPage.vue")
    },
    {
        name: "CartPage",
        path: "/cart",
        component : () => import("./views/CartPage.vue")
    }  
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;