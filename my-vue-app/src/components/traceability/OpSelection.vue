<template>
    <div class="op-selection-page">
        <a-row type="flex" justify="center" align="middle">
            <a-col class="height-100" :span="11">
                <div class="left">Op Selection Left</div>
            </a-col>
            <a-col class="height-100" :span="1">
             <a-divider type="vertical" style="height:560px;width:5px;border-color: #7cb305" dashed></a-divider>
             </a-col>
            <a-col class="height-100" :span="11">
                <div class="right">Right</div>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.op-selection-page{
    height: 560px;
    
}
.left{
    background-color: blue;
    height: 560px;
}
.right{
    background-color: yellow;
    height: 560px;
}
</style>