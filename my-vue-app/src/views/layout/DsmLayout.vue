<template>
    <q-layout>
        <q-page-container>
          <q-header elevated>
        <q-toolbar>
          <q-btn @click="drawerLeft=!drawerLeft" flat round dense icon="menu" class="q-mr-sm" />
          <q-toolbar-title>Manual Tracebility Operation</q-toolbar-title>
          <q-avatar flat round dense>
            <img src="@/assets/logo.png">
          </q-avatar>
        </q-toolbar>
      </q-header>
      <q-page-container>
            <router-view/>
        </q-page-container>
              <q-drawer
        v-model="drawerLeft"
        :width="260"
        show-if-above
        class="bg-grey-3 text-grey-7"
        bordered
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list>
        <q-item clickable class="GPLAY__drawer-link bg-grey-10 text-grey-3">
          <q-item-section avatar class="text-grey-1">
            <q-avatar flat round dense>
                <img src="@/assets/logo.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-grey-3">
            <q-item-label>Hermes Reply</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--apps">
          <q-item-section avatar class="bg-green-7 text-grey-1 text-center">
            <q-icon name="android" />
          </q-item-section>
          <q-item-section class="apps-text">
            <!-- <q-item-label>Apps</q-item-label> -->
            <router-link to="/">Operations</router-link>
          </q-item-section>
        </q-item>
        
        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--movies">
          <q-item-section avatar class="movies-icon bg-red-7 text-grey-1 text-center">
            <q-icon name="local_movies" />
          </q-item-section>
          <q-item-section class="movies-text">
            <router-link to="/product-label">Product Label</router-link>
          </q-item-section>
        </q-item>
              <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--music">
          <q-item-section avatar class="music-icon bg-orange-7 text-grey-1 text-center">
            <q-avatar size="22px" color="white" text-color="orange-7" icon="music_note" />
          </q-item-section>
          <q-item-section class="music-text">
            <router-link  to="/components">Components</router-link>
          </q-item-section>
        </q-item>
            </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue';
 const drawerLeft= ref(false);
</script>


<style lang="sass" scoped>
.GPLAY
  &__toolbar
    height: 60px
  &__logo
    width: 183px
    height: 39px
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%
  &__drawer-link
    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px
    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300
    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      border-bottom:2px solid yellow
      margin-top:15px
      &:hover
        color: #eee !important
    &--apps:hover
      background: #43a047!important
    &--movies:hover
      background: #e53935!important
    &--music:hover
      background: #fb8c00!important
    &--books:hover
      background: #1e88e5!important
    &--devices:hover
      background: #546e7a!important
  &__drawer-item
    padding: 6px 12px 6px 23px
  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)
  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px
  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc
</style>