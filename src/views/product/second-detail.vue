<template>
    <div class="container">
        <img src="/static/images/second.png" alt="">
        <div class="right-detail flr">
            <div class="right-desc">
                <p class="title-detail">FI-500 FiberInspector™ Micro光纤显微摄像机</p>
                <p class="desc">用于检查光纤端面是否被污染或损坏</p>
                <div>
                    <ul class="desc-detail">
                        <li>PortBright™，内置散光灯，用于照亮黑暗区和拥挤的面板</li>
                        <li>自动聚焦，短短数秒就可获取稳定像素</li>
                        <li>大显示屏查看单模和多模光纤端面</li>
                        <li>配备4个UPC端头( LC、SC、1.25mm、2.50mm )。提供APC端头</li>
                    </ul>
                </div>
            </div>
            <div class="btn-detail">
                <el-button class="lookDetail" @click="$router.push('/detail')">
                    查看详情
                </el-button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        background: #fff;
        margin-bottom: 75px;
    }

    .second-detail {
        width: 1200px;
    }

    .right-detail {
        padding: 40px 140px 20px 10px;
    }

    .right-desc {
        text-align: left;
        padding-top: 10px;
    }

    .title-detail {
        font-size: 20px;
        font-weight: 400;
        color: #4a4a4a;
        padding: 20px 0;
    }

    .desc,
    .desc-detail {
        color: #999;
        font-weight: 400;
        line-height: 2;
    }

    .desc-detail {
        margin-left: 20px;
    }

    .btn-detail {
        text-align: left;
    }

    .lookDetail {
        width: 160px;
        height: 50px;
        margin-top: 40px;
        color: #000;
        background: #ffd04b;
    }
</style>