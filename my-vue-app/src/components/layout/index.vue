<template>
    <a-layout class="layout">
        <a-layout-header class="header">
            <div class="header-content">
            <a-row>
                <a-col class="title" :span="24">Manual Traceability Operation</a-col>
            </a-row>
            <a-row type="flex"  justify="center" align="middle">
                <a-menu class="menus" v-model:selectedKeys="current"  mode="horizontal">
                        <a-col :span="8"><a-menu-item @click="go('/')" key="page1">OPs</a-menu-item></a-col>
                        <a-col :span="8"><a-menu-item @click="go('/productLabel')" key="page2">Scan Product Label</a-menu-item></a-col>
                        <a-col :span="8"><a-menu-item @click="go('/component')" key="page3">Scan Component</a-menu-item></a-col>
                </a-menu>
            </a-row>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <router-view/>
        </a-layout-content>
        <a-layout-footer class="footer">Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 import { useRoute,useRouter } from 'vue-router';

const current:string[] = ref<string[]>(['page1']);
const route=useRoute();
const router=useRouter();
function go(path:string){
    router.push(path);
}
</script>
<style scoped>
.layout{
}
.title{
    font-size: 32px;
    background-color: rgb(51, 239, 13);
    border-radius: 5px;
    margin-top: 10px;
}
.header{

    height: 160px;
    background-color: #fff;
}
.content{
    background-color: aqua;
    margin: auto 50px;
    border-radius: 5px;
}
.footer{
    background-color: blue;
}
.menus{
    font-size: 30px;
    width: 100%;
    text-align: center;
    color: aquamarine;
}
</style>