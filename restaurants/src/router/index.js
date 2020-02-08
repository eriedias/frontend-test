import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    base: __dirname,
    mode: 'history',

    routes: [
        { 
            path: "/",
            component: () => import('../modules/list/ListView.vue'),
        },
        { 
            path: "/:title/:id",
            component: () => import('../modules/details/DetailsView.vue'),
        }
    ]
})

export default router