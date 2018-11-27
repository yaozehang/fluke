<template>
  <div>
    <Header></Header>
    <div class="w1200">
      <div class="bread">
        <span>当前位置：</span>
        <router-link :to="{ path: '/about/call' }">关于福禄克网络 > </router-link>
        <span>新闻中心</span>
      </div>
      <div class="news clearfix">
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
        <div class="news-center fll">
          <div class="news-top">新闻中心</div>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <router-link to="/about/news/newsDetail">
          <div class="clearfix news-item">
            <div class="news-date fll">
              <div class="date">17</div>
              <div class="year">2018-06</div>
            </div>
            <div class="news-text fll">
              <div class="news-title">
                通往200G和400G之路已经铺就 
              </div>
              <div class="news-content">
                为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年
              </div>
            </div>
          </div>
          </router-link>
          <div class="page-bar" > 
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
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
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      };
    }
  }
</script>

<style scoped lang="scss">
.news-item {
  padding-top: 30px;
}
.news {
  height: 1030px;
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
  .news-center {
    width: 1050px;
    padding: 30px;
    box-sizing: border-box;
    .news-top {
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb( 33, 33, 33 );
      font-weight: bold;
      padding-bottom: 20px;
      border-bottom: solid 4px #000;
    }
    .news-date {
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
    .news-text {
      width: 875px;
      .news-title {
        font-size: 16px;
        font-family: "PingFang";
        color: rgb( 33, 33, 33 );
        font-weight: bold;
        text-align: left;
        padding-bottom: 20px;
      }
      .news-content {
        font-size: 14px;
        font-family: "PingFang";
        color: #999;
        line-height: 1.5;
        padding-bottom: 30px;
        border-bottom: solid 1px #ebdddd;
      }
    }
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