<template>
    <q-layout>
        <q-page>
          <q-header elevated>
        <q-toolbar>
          <q-btn @click="drawerLeft=!drawerLeft" flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Manual Tracebility Operation</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
                <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Toolbar" />
          </q-breadcrumbs>
        </q-toolbar>
      </q-header>
      <q-page-container>
            <router-view></router-view>
        </q-page-container>
              <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            
          </div>
        </q-scroll-area>
      </q-drawer>
        </q-page>
  
    </q-layout>
</template>

<script setup>
import { ref } from 'vue';
 const drawerLeft= ref(false);
</script>