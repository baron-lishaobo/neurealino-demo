import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '@/components/layout/index.vue';
import DsmLayout from '@/views/layout/DsmLayout.vue'
export const  router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:DsmLayout,
            meta:{
                title:'Home Page'
            },
            redirect:'operations',
            children:[
                {
                    path:'operations',
                    meta:{
                        title:'Operations'
                    },
                    name:'Operation List',
                    component:()=>import('@/views/dsm/Operations.vue')
                },
                {
                    path:'product-label',
                    name:'Product Label',
                    meta:{
                        title:'Product Label'
                    },
                    component:()=>import('@/views/dsm/ProductLabel.vue')
                }
                ,{
                    path:'components',
                    name:'Components',
                    meta:{
                        title:'Components'
                    },
                    component:()=>import('@/views/dsm/Components.vue')
                }
            ]
        },
        {
            path:"/:catchAll(.*)",
            component:()=>import('@/views/exceptions/404.vue')
        },
       {
        path:'/ops',
        component:Layout,
        children:[
            {
                path:'ops',
                name:'Op Selection',
                component:()=>import('@/components/traceability/OpSelection.vue'),
            },
            {
                path:'productLabel',
                name:'Scan Product Label',
                component:()=>import('@/components/traceability/ScanProLabel.vue'),
            },
            {
                path:'component',
                name:'Scan Component',
                component:()=>import('@/components/traceability/ScanComponent.vue'),
            }
        ]
       },
       {
        path:'/page',
        name:'Page',
        component:()=>import('../views/Page.vue')
       },
       {
        path:'/test',
        name:'Test',
        component:()=>import('../views/Test.vue')
       }
    ]
})