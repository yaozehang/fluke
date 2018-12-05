<template>
    <div class="container">
        <div class="header">
            <div class="row1 clearfix">
                <img class="logo fll" src="/static/img/logo1.png">
                <div class="flr">
                    <el-select v-model="value" placeholder="新闻" class="header-select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    
                    <el-input class="put" placeholder="输入关键字"></el-input>
                    <el-button class="" icon="el-icon-search"></el-button>
                    <div class="userInfo flr">
                        <a href="">登录 |</a><span></span><a href=""> 个人中心</a>
                    </div>                
                </div>
            </div>
            <div class="row2">
                <el-menu class="el-menu-demo" :router="true" mode="horizontal" background-color="#212121" active-text-color="#ffd04b" text-color="#fff">
                    <el-menu-item index="/home" class="shou"> 首页 </el-menu-item>
                    <el-menu-item index="/product">产品</el-menu-item>
                    <el-menu-item index="/active">市场及促销活动</el-menu-item>
                    <el-menu-item index="/education">教育与培训</el-menu-item>
                    <el-menu-item index="/support">支持</el-menu-item>
                    <el-menu-item index="rver">购买与服务</el-menu-item>
                    <el-menu-item index="/about/news">关于福禄克网络</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '新闻1'
                }, {
                    value: '选项2',
                    label: '新闻2'
                },],
                value: '',
                activeIndex2: "1"
            }
        },
    }
</script>

<style scoped lang="scss">
    .container {
        background: #212121;
        height: 140px;

    }
    .header {
        width: 1200px;
        margin: 0 auto;
    }
    .row1 {
        padding: 20px 5px;
        .header-select {
            width: 80px;
        }
        .put {
            border-radius: 100%;
            width: 160px;
        }

    }
    li.el-menu-item{
        width: 140px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }
    .userInfo{
        line-height: 2;
        margin-left: 30px;
    };
    .userInfo a{
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
    }
    
    // /deep/{
    //   .el-menu-demo{
    //     border-bottom:none;
    //   }
    // }
</style>
