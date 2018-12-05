<template>
    <div class="container">
        <div class="content">     
            <div class="breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="desc-breadcrumb">
                    <el-breadcrumb-item>当前位置：产品</el-breadcrumb-item>
                    <el-breadcrumb-item>Versiv布线认证系统</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="menu2">
                <Second></Second>  
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Bottom from "@/components/Bottom.vue"    
    import Second from "@/components/secondmenu/secondMenu.vue"
    export default {
        components: {
            Header,    
            Bottom,
            Second
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    .content{
        width: 1200px;
        margin: 0 auto;
    }
    .desc-breadcrumb {
        padding: 25px 0;
    }

    .menu2 {
        color: #000;
        font-weight: bold;
        text-align: left;
    }
</style>