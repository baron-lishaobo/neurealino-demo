<template>
    <div>
<p>Version:{{version}}</p>
<p>Platform:{{platform}}</p>
<p>Screen:{{screen}}</p>
<div>
      <q-select
    v-model="lang"
    :options="langOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { useQuasar } from 'quasar';
import languages from 'quasar/lang/index.json';
 const $q= useQuasar();
 const version =$q.version;
 const platform=$q.platform;
 const screen=$q.screen;
const lang=ref($q.lang.isoName);
const appLanguage=languages.filter(lang=>['de','en-US','zh-CN','it'].includes(lang.isoName));
const langOptions=appLanguage.map(lang=>({
    label:lang.nativeName,
    value:lang.isoName
}))
watch(lang,val=>{
    import(/* @vite-ignore */'quasar/lang' + val).then(lang=>{
        $q.lang.set(lang.default);
    })
})

</script>

<style lang="scss" scoped>

</style>