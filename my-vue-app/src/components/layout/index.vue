<template>
    <a-layout class="layout">
        <a-layout-header class="header">
            <div class="header-content">
            <a-row tyep="flex" justify="center" align="middle">
                <a-col class="title" :span="20">Manual Traceability Operation</a-col>
                <a-col class="date" :span="4"><DigitalClock/></a-col>
                <!-- <a-col class="logo" :span="2"><div>logo</div></a-col> -->
            </a-row>
            <a-row class="menus" type="flex"  justify="center" align="middle">
                <a-col :span="6"><router-link to='/'><a ref="op" class="op" @click="actived">Op Selection</a></router-link></a-col>
                <a-col :span="2"><a-divider type="vertical" style="height:42px;width:3px;background-color:greenyellow"></a-divider></a-col>
                <a-col :span="6"><router-link to='/productLabel'><a ref="pl" class="pl"  @click="actived">Scan Product Label</a></router-link></a-col>
                <a-col :span="2"><a-divider type="vertical" style="height:42px;width:3px; background-color:greenyellow"></a-divider></a-col>
                <a-col :span="6"><router-link to='/component'><a ref="cp" class="cp"  @click="actived">Scan Component</a></router-link></a-col>
            </a-row>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <router-view/>
        </a-layout-content>
        <a-layout-footer class="footer">
            <div class="platform">
                {{$q.platform.userAgent}}
            </div>
        </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
 import { ref } from 'vue';
 import { useRoute,useRouter } from 'vue-router';
 import DigitalClock from '../clock/DigitalClock.vue'
 import { useQuasar } from 'quasar';
const route=useRoute();
const router=useRouter();
const op=ref(null);
const pl=ref(null);
const cp=ref(null);
const $q=useQuasar();
function go(path:string){
    router.push(path);
}
function actived(event){
    if(event){
        const aClass= event.target.className;
        console.log('clssName',aClass);
        switch(aClass){
            case 'op':
                op.value.className='checked';
                pl.value.className='pl';
                cp.value.className='cp';
                break;
             case 'pl':
                op.value.className='op';
                pl.value.className='checked';
                cp.value.className='cp';
                break;
             case 'cp':
                op.value.className='op';
                pl.value.className='pl';
                cp.value.className='checked';
                break;
            default:
                break;
        }
    }
     
}
</script>
<style scoped>
.layout{
}
.title{
    font-size: 32px;
    /* background-color: rgb(21, 244, 9); */
background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 5px;
    margin-top: 10px;
    color: #fff;
}
.header{
    height: 160px;
    background-color: #fff;
}
.content{
    background-color: aqua;
    margin: auto 50px;
    border-radius: 5px;
    height: 560px;
    min-height: 560px;
    max-height: 100%;
}
.footer{
    background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
}
.menus{
    font-size: 32px;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px #07f3c4;
}
a{
    padding: 5px;;
     color: rgb(0, 0, 0);
}

a:hover{
  background: #fff;
  
  box-shadow: 0px 2px 10px 5px #f30707;
  border-radius: 5px;
  color: rgb(250, 254, 131);
}

a:active{
  opacity: 1;
  transition: 0.6s;
  color: rgb(21, 0, 255);
}
a:after{
  opacity: 0;
  transition: all 1s;
}
.op{
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px #1abc9c;
}
.pl{
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px #1abc9c;
}
.cp{
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px #1abc9c;
}

.checked{
 color: rgb(210, 20, 163);
  box-shadow: 0px 2px 10px 5px #f30707;
  border-radius: 5px;
}
</style>