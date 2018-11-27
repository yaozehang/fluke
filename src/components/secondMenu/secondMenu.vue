<template>
    <div class="">
        <el-tabs class="tabone" v-model="activeName" type="card">
            <el-tab-pane label="DSX系列" name="DSX">
                <Product></Product>
            </el-tab-pane>
            <el-tab-pane label="DTX系列" name="DTX">
                <Second></Second>
            </el-tab-pane>
            <el-tab-pane label="OptiFiber" name="OptiFiber">
                <Product></Product>
            </el-tab-pane>
            <el-tab-pane label="CertiFiber" name="CertiFiber">
                <Product></Product>
            </el-tab-pane>
            <el-tab-pane label="FI-7000" name="7000">
                <Second></Second>
            </el-tab-pane>
            <el-tab-pane label="DSX-600" name="600">
                <Product></Product>
            </el-tab-pane>
            <el-tab-pane label="MultiFibe" name="MultiFibe">
                <Second></Second>
            </el-tab-pane>
            <el-tab-pane label="SimpliFiber" name="SimpliFiber">
                <Product></Product>
            </el-tab-pane>
            <el-tab-pane label="LinkWare™Live" name="Live">
                <Second></Second>
            </el-tab-pane>
            <el-tab-pane label="LinkWare PC" name="PC" class="aa">
                <Product></Product>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import Product from "@/views/product/product.vue"
    import Second from "@/views/product/second-detail.vue"
    export default {
        components: {
            Product,
            Second
        },
        data() {
            return {
                activeName: "OptiFiber"
            }
        }
    }
</script>

<style lang="scss">
    .tabone {
        text-align: center;
        color: #000;
        font-weight: bold;
    };
    .aa{
        &:hover{
            background: #fff;
            color: #ffd04b;
        }

    }
    .el-tabs__item{
        font-weight: bold;
        &:hover{
            color: #000
        }
    }
    
     .el-tabs__item.is-active{
        background: #fff;
        color: #ffd04b;
        font-weight: bold;
    }
    
</style>