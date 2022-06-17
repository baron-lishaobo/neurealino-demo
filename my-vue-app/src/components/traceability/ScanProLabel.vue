<template>
    <div class="scan-product-label-page">
        <a-row>
            <a-col :span="11">
                <div class="left">Left</div>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="11">
                <div class="right">Right</div>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.scan-product-label-page{
    height: 560px;
}
.left{
    background-color: blue;
}
.right{
    background-color: yellow;
}
</style>