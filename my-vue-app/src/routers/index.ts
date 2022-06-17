import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '../components/layout/index.vue';
export const  router=createRouter({
    history:createWebHashHistory(),
    routes:[
       {
        path:'/',
        redirect:'ops',
        component:Layout,
        children:[
            {
                path:'ops',
                name:'Op Selection',
                component:()=>import('../components/traceability/OpSelection.vue'),
            },
            {
                path:'productLabel',
                name:'Scan Product Label',
                component:()=>import('../components/traceability/ScanProLabel.vue'),
            },
            {
                path:'component',
                name:'Scan Component',
                component:()=>import('../components/traceability/ScanComponent.vue'),
            }
        ]
       }
    ]
})