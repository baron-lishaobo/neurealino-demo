import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '@/components/layout/index.vue';
import DsmLayout from '@/views/layout/DsmLayout.vue'
export const  router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:DsmLayout,
            redirect:'operations',
            children:[
                {
                    path:'ops',
                    name:'Operation List',
                    component:()=>import('@/views/dsm/Operations.vue')
                },
                {
                    path:'product-label',
                    name:'Product Label',
                    component:()=>import('@/views/dsm/ProductLabel.vue')
                }
                ,{
                    path:'components',
                    name:'Components',
                    component:()=>import('@/views/dsm/Components.vue')
                }
            ]
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