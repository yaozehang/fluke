<template>
    <div class="">
        <Header></Header>
        <div class="container-warp">
            <div class="container-content">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="desc-breadcrumb">
                    <el-breadcrumb-item :to="{ path: '/product'}">当前位置：产品</el-breadcrumb-item>
                    <el-breadcrumb-item>Versiv布线认证系统</el-breadcrumb-item>
                    <el-breadcrumb-item>DSX</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="detail-img clearfix">
                    <img class="fll detail-big" src="/static/images/detail-big.png">
                    <div class="right-desc flr">
                        <p class="title-detail">DSX-5000CH CableAnalyzer™</p>
                        <p class="desc">加速铜缆认证测试过程中的每一个步骤</p>
                        <div>
                            <ul class="desc-detail">
                                <li>Versiv™•的模块化设计支持铜缆认证、光纤损耗、OTDR•测试以及•Wi-Fi•分析</li>
                                <li>Cat*6A、FA·测试速度无法比拟，且符合所有现行标准</li>
                                <li>ProjeX™•系统可管理作业要求以及从项目设定到系统验收的整个流程，进而确保正确完成所有测试任务</li>
                                <li>Taptive™•用户界面可简化设定过程并消除其间可能出现的错误</li>
                                <li>分析测试结果并使用•LinkWare™•管理软件创建专业的测试报告</li>
                                <li>以图形方式显示故障源，包括串扰、回波损耗和屏蔽层的故障，以便更快进行故障排除</li>
                                <li>IEC•V•级•ETL•认证•---•最严苛的精度要求</li>
                                <li>获得了世界范围内布线供应商的认可</li>
                                <li>内置外部干扰•(AxTalk)•测试功能</li>
                                <li>兼容•LinkWare™•Live。Linkware•Link•可轻松的跟踪工作进展、实时访问测试结果以及现场快速修复问题，并可方便地将测试结果从测试仪传输和整合到•LinkWare™•PC•Cable•Test•Management•SoftWare</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in swiperData" :key="index">
                            <img :src="item.imgUrl" class="swiper-img">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev swiper-button-white prev" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="downLoad">
                    <el-button type="info" class="btn-manual" icon="el-icon-download">手册</el-button>
                    <el-button type="info" class="btn-manual" icon="el-icon-download">白皮书</el-button>
                </div>
                <div>
                    <el-tabs type="card" v-model="activeName">
                        <el-tab-pane label="概述" name="first">
                            <img src="/static/images/detail-little.jpg" alt="">
                        </el-tab-pane>
                        <el-tab-pane label="特性" name="second">
                            <img src="/static/images/detail-little2.jpg" alt="">
                        </el-tab-pane>
                        <el-tab-pane label="型号和配件" name="third">
                            <img src="/static/images/detail-little.jpg" alt="">
                        </el-tab-pane>
                        <el-tab-pane label="背书支持" name="fourth">
                            <img src="/static/images/detail-little2.jpg" alt="">
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>
<script>
    import Header from "@/components/Header.vue"
    import Bottom from "@/components/Bottom.vue"
    // 轮播图插件
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            Header,
            Bottom,
            swiper,
            swiperSlide
        },
        data() {
            return {
                activeName: "first",
                swiperOption: {
                    // 显示分页
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true
                    // },
                    // waitForTransition: true,

                    // 设置自动播放速度
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2500
                    },
                    // 开启无限循环
                    loop: true,
                    //设置点击箭头
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                    slidesPerView: 4,
                    //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                    mousewheel: false,
                    //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                    // freeMode:true
                },
                swiperData: [
                    {
                        imgUrl: "/static/images/detail-little.jpg"
                    },
                    {
                        imgUrl: "/static/images/detail-little2.jpg"
                    },
                    {
                        imgUrl: "/static/images/detail-little.jpg"
                    },
                    {
                        imgUrl: "/static/images/detail-little2.jpg"
                    },
                    {
                        imgUrl: "/static/images/detail-little.jpg"
                    },
                    {
                        imgUrl: "/static/images/detail-little2.jpg"
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container-content {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .desc-breadcrumb{
        padding: 10px 0;
    }

    .detail-img {
        margin: 10px 0;
        padding: 20px;
        background: #fff;
    }

    .detail-big {
        width: 400px;
        height: 400px;
    }

    .detail-text {
        margin-right: 50px;
    }

    .downLoad {
        margin: 20px;
        .btn-manual {
            background: #212121;
        }
    }

    .el-menu-demo {
        background: #f7f7f7;
    }

    .swiper {
        width: 430px;
    }

    .swiper-img {
        width: 100px;
        height: 110px;
    }
    
    .right-desc {
        text-align: left;
        padding-top: 10px;
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
            font-size: 14px;
            line-height: 2;

        }
        .desc-detail {
            width: 690px;
            margin-left: 20px;
        }
        .desc-detail li {
            padding-right: 30px;
        }
    } // .active{
    //     background: #ffd04b;
    // }
    // .el-tabs__item.is-active{
    //     background: #ffd04b;
    //     color: #000;
    //     font-weight: bold;
    // }

    // 轮播图左右箭头
    .swiper-button-prev,.swiper-button-next{
        height: 40px;
        width: 10px;
        background-color: rgba($color: #000000, $alpha: 0.2);
        padding: 10px;
    }
</style>