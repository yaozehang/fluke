<template>
  <div>
    <Header></Header>
    <div class="w1200">
      <div class="bread">
        <span>当前位置：</span>
        <router-link :to="{ path: '/about/call' }">关于福禄克网络 > </router-link>
        <span>联系我们</span>
      </div>
      <div class="call clearfix">
        <div class="navbar fll">
          <ul>
            <li class="nav-item">• 公司概况</li>
            <router-link to="/about/news">
              <li class="nav-item">• 新闻中心</li>
            </router-link>
            <router-link to="/about/call">
            <li class="nav-item">• 联系我们</li>
            </router-link>
            <li class="nav-img">
              <img src="/static/img/rexian.png" alt="" width="110" height="85">
              <div>客户服务热线</div>
              <div class="nav-phone">400-810-3435</div>
            </li>
          </ul>
        </div>
        <div class="call-center fll">
          <div class="call-top">联系我们</div>
          <div id="container"></div>
          <div class="call-black">
            <ul>
              <li class="title">联系我们</li>
              <li class="content">公司全称：美国福禄克网络公司</li>
              <li class="content">福禄克测试仪器（上海）有限公司北京办事处</li>
              <li class="content">地址：北京市朝阳区建国门外大街22号赛特大厦20层</li>
              <li class="content">邮编：100004</li>
              <li class="content">电话：010-5734-1446</li>
              <li class="content">邮箱：china-marketing@flukenetworks.com</li>
            </ul>
          </div>
          <div class="people">
            福禄克公司 | 销售人员
          </div>
          <div class="phone-card clearfix">
            <div class="card-item fll">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
            <div class="card-item card-center fll">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
            <div class="card-item flr">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
          </div>
          <div class="phone-card clearfix">
            <div class="card-item fll">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
            <div class="card-item card-center fll">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
            <div class="card-item flr">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <div class="name">
                <span style="font-size:18px;">齐志仕</span> 
                <span style="font-size:13px;">(销售)</span>
              </div>
              <div style="color:#666; font-size:15px;">
                <div class="phone clearfix">
                  <img src="/static/img/xiaophone.png" alt="" class="phone-img fll">
                  <span class="phone-num fll">电话：13700020781</span>
                </div>
                <div class="email clearfix">
                  <img src="/static/img/email.png" alt="" class="email-img fll">
                  <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
                </div>
                <div class="local clearfix">
                  <img src="/static/img/local.png" alt="" class="local-img fll">
                  <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
                </div>
              </div>
            </div>
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

  export default {
    components:{
      Header,
      Bottom,
    },
      methods:{
        map(){
          var map = new BMap.Map("container");          // 创建地图实例  
          var point = new BMap.Point(116.447362,39.912681);  // 创建点坐标  
          var pointB = new BMap.Point(116.457089,39.914223);
          map.centerAndZoom(pointB, 16);                 // 初始化地图，设置中心点坐标和地图级别  
          var marker = new BMap.Marker(point);        // 创建标注    
          map.addOverlay(marker);                     // 将标注添加到地图中 

          // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

           var opts1 = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(10, -40)    //设置文本偏移量
          }
          var label1 = new BMap.Label("美国福禄克网络公司 电话：010-5735-1446", opts1);  // 创建文本标注对象
          label1.setStyle({
            color : "black",
            fontSize : "12px",
            height : "20px",
            lineHeight : "20px",
            fontFamily:"微软雅黑"
          });
        map.addOverlay(label1); 
          }
        },
      mounted(){
        this.map()
      }
  }
</script>

<style scoped lang="scss">
.call-item {
  padding-top: 30px;
}
.call {
  margin-bottom: 40px;
  background-color: #fff;
  .navbar {
    width: 150px;
    border-top: solid 10px #000;
    .nav-item {
      margin:0 13px;
      padding:30px 0;
      border-bottom:solid 1px #ebdddd;;
      text-align: center;
      cursor: pointer;
    }
    .nav-item:hover {
      color: rgb(252, 200, 0);
    } 
    .nav-img {
      margin-top: 20px;
      background-color: rgb(252, 200, 0);
      img {
        padding: 20px;
      }
      div {
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb( 33, 33, 33 );
        text-align: center;
      }
      .nav-phone {
        padding-top: 15px;
        padding-bottom: 25px;
      }
    }
  }
  .call-center {
    position: relative;
    width: 1050px;
    padding: 30px;
    box-sizing: border-box;
    .call-top {
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb( 33, 33, 33 );
      font-weight: bold;
      padding-bottom: 20px;
      border-bottom: solid 4px #000;
    }
    .call-date {
      text-align: center;
      padding:0 30px 0 20px; 
      box-sizing: border-box;
      .date{
        font-size: 28px;
        font-family: "PingFang";
        color: rgb( 102, 102, 102 );
        font-weight: bold;
        padding: 10px 0;
      }
      .year {
        font-size: 16px;
        font-family: "PingFang";
        color: rgb( 153, 153, 153 );
      }
    }
    .call-text {
      width: 875px;
      .call-title {
        font-size: 16px;
        font-family: "PingFang";
        color: rgb( 33, 33, 33 );
        font-weight: bold;
        text-align: left;
        padding-bottom: 20px;
      }
      .call-content {
        font-size: 14px;
        font-family: "PingFang";
        color: #999;
        line-height: 1.5;
        padding-bottom: 30px;
        border-bottom: solid 1px #ebdddd;
      }
    }
    #container {
      height: 355px;
      width: 990px;
      margin-top: 25px;
    }
    .call-black {
      width: 420px;
      height: 300px;
      background-color: rgb(44,44,44);
      padding: 20px;
      box-sizing: border-box;
      position: absolute;
      z-index: 998;
      top:  210px;
      left: 600px;
      .title {
        color: #fff;
        font-size: 24px;
        font-family: "PingFang";
        font-weight: bold;
        padding-bottom: 15px;
      }
      .content {
        font-size: 16px;
        font-family: "PingFang";
        color: rgb( 255, 255, 255 );
        line-height: 2.25;
      }
    }
    .people {
      margin-top: 30px;
      font-size: 24px;
      font-family: "PingFang";
      color: rgb( 44, 44, 44 );
      font-weight: bold;
    }
    .phone-card {
      margin-top: 85px;
      .card-item {
        position: relative;
        width: 300px;
        height: 280px;
        background-color: rgb(247,247,247);
        .card-img {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          background-color: #f1f1f1;
          position: absolute;
          top: -40px;
          left: 30px;
        }
        .name {
          margin-left: 130px;
          padding-top:10px; 
        }
      }
      .card-center {
        margin: 0 45px;
      }
    }
  }
}

.phone {
  margin-top: 30px;
  .phone-img {
    margin:0 20px;
  }
  .phone-num {
    margin-top: 10px;
  }
}
.email {
  margin-top: 20px;
  .email-img {
    margin:0 20px;
  }
  .email-num {
    margin-top: 10px;
  }
}
.local {
  margin-top: 20px;
  .local-img {
    margin:0 20px;
  }
  .local-num {
    width: 220px;
    margin-top: 10px;
  }
}
.router-link-active {
  color: rgb(252, 200, 0);
} 

.page-bar {
  text-align: center;
  padding-top: 40px;
}


.bread {
  padding:20px 0;
  font-size: 14px;
  font-family: "PingFang";
  color: rgb( 153, 153, 153 );
  font-weight: bold;
    a{
      color: rgb( 153, 153, 153 );
    } 
}
</style>