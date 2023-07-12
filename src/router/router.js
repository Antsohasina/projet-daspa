import Vue from 'vue'
import Router from 'vue-router'
import App from "@/App";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/app',
            name: 'App',
            component: App
        },
    ]
})