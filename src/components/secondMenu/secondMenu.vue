<template>
    <div class="">
        <!-- <el-tabs class="tabone" v-model="activeName" type="card">
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
        </el-tabs> -->
        <div class="menu-next clearfix">
            <router-link to="/dsx">
                <div class="secondMenu" current>DSX系列</div>
            </router-link>
            <router-link to="/product/cert">
                <div class="secondMenu">DTX系列</div>
            </router-link>
            <router-link to="/dsx">
                <div class="secondMenu">OptiFiber</div>
            </router-link>
            <router-link to="/product/cert">
                <div class="secondMenu">CertiFiber</div>
            </router-link>
            <router-link to="/dsx">
                <div class="secondMenu">FI-7000</div>
            </router-link>
            <router-link to="/product/cert">
                <div class="secondMenu">DSX-600</div>
            </router-link>
            <router-link to="/dsx">
                <div class="secondMenu">MultiFibe</div>
            </router-link>
            <router-link to="/product/cert">
                <div class="secondMenu">LinkWare™Live</div>
            </router-link>
            <router-link to="/dsx">
                <div class="secondMenu">LinkWare PC</div>
            </router-link>
        </div>
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
    .secondMenu{
        float: left;
        width: 150px;
        height: 30px;
        &:active{
            color: #ffd04b
        }
    }
    .router-link-active {
        color: #ffd04b
    }
    
</style>