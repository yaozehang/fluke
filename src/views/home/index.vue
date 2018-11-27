<template>
  <div>
    <Header></Header>
    <div>
      <div class="block">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img :src="slide.imgUrl">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="select">
        <div class="w1200">
          <div class="select-item fll">
            <img src="/static/img/yulan.png" alt="" class="fll">
            <span  class="fll">预约演示</span>
          </div>
          <div class="select-item fll">
            <img src="/static/img/peixun.png" alt="" class="fll">
            <span  class="fll">申请培训</span>
          </div>
          <div class="select-item fll">
            <img src="/static/img/qian.png" alt="" class="fll">
            <span  class="fll">申请报价</span>
          </div>
          <div class="select-item fll">
            <img src="/static/img/chanpin.png" alt="" class="fll">
            <span  class="fll">产品序列号查询</span>
          </div>
          <div class="select-item fll">
            <img src="/static/img/jingxiaoshang.png" alt="" class="fll">
            <span  class="fll">经销商查询</span>
          </div>
          <div class="select-item fll">
            <img src="/static/img/gongju.png" alt="" class="fll">
            <span  class="fll">Versiv工具包配置</span>
          </div>
        </div>      
      </div>
      <div class="content w1200">
        <div class="con-title"> 
          <span class="title">主要产品</span>
          <span class="line"></span>
        </div>
        <div class="product">
          <div class="clearfix">
            <div class="pro-752s fll">
              <img src="/static/img/725s.png" alt="" class="fll">
              <div class="pro-title">Fluke 725s多功能过程校验仪</div>
              <div class="pro-content">它可以测量和输出毫安、伏特、温度（RTD和热电偶）频路、脉冲、欧姆及压力信号</div>
              <el-button plain class="btn1" @click="$router.push('/detail')">查看详情</el-button>
            </div>
            <div class="pro-729 fll">
              <img src="/static/img/777.png" alt="" style="margin-left:150px; height:220px;">
              <div  class="pro-title2">Fluke 729全自动压力校验仪</div>
              <div  class="pro-content2">对于要求高准确度和可重复的过程工厂，压力仪器校准占其维护工作的很大一部分工作量</div>
              <el-button  plain class="btn2" @click="$router.push('/detail')">查看详情</el-button>
            </div>
          </div>
          <div class="clearfix">
            <div class="pro-729 fll">
              <img src="/static/img/12E.png" alt="" style="margin-left:100px; height:220px;">
              <div class="pro-title2">福禄克万用表fluke 12E+ </div>
              <div class="pro-content2">对于要求高准确度和可重复的过程工厂，压力仪器校准占其维护工作的很大一部分工作量</div>
              <el-button  plain class="btn2" @click="$router.push('/detail')">查看详情</el-button>
            </div>
            <div class="pro-224 fll">
              <img src="/static/img/hongwai.png" alt="" class="fll" width="220" style="margin:60px 0 0 55px;">
              <div class="pro-title">高温红外测温仪</div>
              <div class="pro-content">测量温度范围为 -30 °C 至 900 °C,60:1 的距离光点 比以及双激光瞄准系统，可以快速准确定位目标...</div>
              <el-button  plain class="btn1" @click="$router.push('/detail')">查看详情</el-button>
            </div>
          </div>
        </div>
        <div class="con-title"> 
          <span class="title">Fluke Networks活动</span>
          <span class="line2"></span>
        </div>
        <div class="networks">
          <img src="/static/img/networks.png" alt="" class="net-img fll">
          <el-card class="box-card">
            <div v-for="o in 3" :key="o" class="text item">
              <div class="clearfix" style="margin-top:30px;">
                <div class="fll box">
                  <div class="date">09/18</div>
                  <div class="year">2018</div>
                </div>
                <div class="card-right fll">
                  <div class="card-title">新国家标准详解及最新布线测试知识和技术研讨会--新疆站</div>
                  <div class="card-content">我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临</div>
                  <div class="card-arrows">→</div>
                </div>
              </div>
            </div>
            <el-button plain class="btn3" style="margin-left: 280px; margin-top:30px;" @click="toEdu">查看更多 ></el-button>
          </el-card>
        </div>
        <div class="con-title"> 
          <span class="title">产品演示视频</span>
          <span class="line"></span>
        </div>
        <iframe height=555 width=1200 src="http://player.youku.com/embed/XMTI4MjU5OTA3Mg==" frameborder=0 allowfullscreen></iframe>
        <el-button plain class="btn3" style="margin:20px 0 20px 515px;" >查看更多 ></el-button>
        <div class="con-title"> 
          <span class="title">新闻中心</span>
          <span class="line"></span>
        </div>
        <div class="news clearfix">
          <div class="news-left fll">
            <div class="news-item clearfix">
              <div class="news-date fll">
                <div class="date">11/25</div>
                <div class="year">2019</div>
              </div>
              <div class="news-con fll">
                <div class="title">
                  您的工具包中有几颗星
                </div>
                <div class="content">
                  对于利用福利路康网络的新国家标准详解及最新布线测试知识和技术研讨会--新疆站我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临
                </div>
              </div>
            </div>
            <div class="news-item clearfix">
              <div class="news-date fll">
                <div class="date">11/25</div>
                <div class="year">2019</div>
              </div>
              <div class="news-con fll">
                <div class="title">
                  您的工具包中有几颗星
                </div>
                <div class="content">
                  对于利用福利路康网络的新国家标准详解及最新布线测试知识和技术研讨会--新疆站我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临
                </div>
              </div>
            </div>
            <div class="news-item clearfix">
              <div class="news-date fll">
                <div class="date">11/25</div>
                <div class="year">2019</div>
              </div>
              <div class="news-con fll">
                <div class="title">
                  您的工具包中有几颗星
                </div>
                <div class="content">
                  对于利用福利路康网络的新国家标准详解及最新布线测试知识和技术研讨会--新疆站我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临
                </div>
              </div>
            </div>
          </div>
          <div class="news-right fll">
            <div class="news-item clearfix">
              <div class="news-date fll">
                <div class="date">11/25</div>
                <div class="year">2019</div>
              </div>
              <div class="news-con fll">
                <div class="title">
                  您的工具包中有几颗星
                </div>
                <div class="content">
                  对于利用福利路康网络的新国家标准详解及最新布线测试知识和技术研讨会--新疆站我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临
                </div>
              </div>
            </div>
             <div class="news-item clearfix">
              <div class="news-date fll">
                <div class="date">11/25</div>
                <div class="year">2019</div>
              </div>
              <div class="news-con fll">
                <div class="title">
                  您的工具包中有几颗星
                </div>
                <div class="content">
                  对于利用福利路康网络的新国家标准详解及最新布线测试知识和技术研讨会--新疆站我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临
                </div>
              </div>
            </div>
            <el-button plain class="btn3" style="margin-left:230px;margin-top:120px;" @click="toNews">查看更多 ></el-button>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Bottom from '@/components/Bottom.vue'
  import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components:{
      Header,
      Bottom,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
        },
        swiperSlides: [{imgUrl:'/static/img/swiper.png'}]
      }
    },
    methods:{
      toNews(){
        this.$router.push('/about/news')
      },
      toEdu(){
        this.$router.push('/education')
      }
    }
  }
</script>

<style scoped lang="scss">
  .select {
    width: 100%;
    height: 50px;
    background-color: rgb(252,200,0);
    .select-item {
      margin-left: 60px;
      padding-top: 10px;
      font-size: 16px;
      font-family: "PingFang";
      color: rgb( 33, 33, 33 );
      img {
        padding-top: 6px;
        width: 20px;
        height: 20px;
      }
      span {
        line-height:2;
        margin-left:5px;
      }
    }
  }
  .content {
    .con-title {
      height: 160px;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      .title {
        display: inline-block;
        padding-top: 50px;
        padding-bottom: 15px;
      }
      .line {
        display: block;
        margin: 0 auto;
        width: 60px;
        border-top: 6px solid #000;
      }
      .line2 {
        display: block;
        margin: 0 auto;
        width: 120px;
        border-top: 6px solid #000;
      }
    }
  }

  .product {
    .pro-752s {
      width: 750px;
      height: 390px;
      background-color: rgb(239,239,239);
      .pro-title {
        font-size: 30px;
        padding-top:80px;
        font-family: "PingFang";
        color: rgb( 15, 15, 15 );
        font-weight: bold;
      }
      .pro-content {
        font-size: 18px;
        line-height:1.5;
        padding-top:30px;
      }
    }
    .pro-729 {
      width: 450px;
      height: 390px;
      background-color: #fff;
      .pro-title2 {
        font-size: 24px;
        margin-left:45px;
        font-family: "PingFang";
        color: rgb( 15, 15, 15 );
        font-weight: bold;
      }
      .pro-content2 {
        font-size: 14px;
        line-height:1.5;
        padding-top:15px;
        margin-left:45px;
        width:350px;
        font-family: "PingFang";
        color: rgb( 15, 15, 15 );
      }
    }
    .pro-224 {
      width: 750px;
      height: 390px;
      background-color: rgb(224,224,224);
      .pro-title {
        font-size: 30px;
        padding-top:80px;
        font-family: "PingFang";
        color: rgb( 15, 15, 15 );
        font-weight: bold;
      }
      .pro-content {
        font-size: 18px;
        line-height:1.5;
        padding-top:30px;
      }
    }
  }

  .btn1 {
    margin-top:60px; 
    width:150px; 
    height:50px;
    font-size:18px;
  }
  .btn2 {
    margin-top:30px; 
    margin-left:45px; 
    width:120px; 
    height:40px;
    font-size:16px;
    background:rgb(239,239,239)
  }

  .networks {
    height: 580px;
    .net-img {
      position: relative;
      z-index: 996;
      width: 450px;
      height: 450px;
    }

    .box-card {
      width: 870px;
      height: 540px;
      position: relative;
      top: -410px;
      left: 330px;
      .text {
        padding-left: 180px;
      }
      .card-right {
        width: 525px;
        padding-left: 30px;
      }
      .card-title {
        font-weight: 600;
        font-size: 18px;
      }
      .card-content {
        font-size: 16px;
        color: #999;
        padding: 15px 0;
      }
      .card-arrows {
        font-size: 24px;
        color: #999;
      }
      .box {
        margin-top: 20px;
        .date {
          font-size: 24px;
          font-family: "PingFang";
          color: rgb( 33, 33, 33 );
          font-weight: bold;
        }
        .year {
          font-size: 18px;
          font-family: "PingFang";
          color: rgb( 33, 33, 33 );
        }
      }
    }
  }

  .news {
    height: 625px;
    margin-bottom: 40px;
    background: #fff;
    .news-item {
      width: 440px;
      margin-left: 90px;
      padding-top: 50px;
      cursor: pointer;
    }
    .news-con {
      width: 340px;
      padding:0 15px;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        font-weight: 600;
        padding: 15px 0;
      }
      .content {
        padding-bottom: 15px;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
      }
    }
    .news-date {
      padding: 15px;
      background-color: rgb(239,239,239);
      border-radius: 6px;
    }
  }
  .news-item:hover {
    .news-date {
      background-color: rgb(252,200,0);
    }
    .news-con {
      background: rgb(239,239,239);
      border-radius: 6px;
    }
  }

  .btn3 {
    width: 165px;
    height: 45px;
    border: 1px solid #000;
    border-radius: 0;
  }
</style>