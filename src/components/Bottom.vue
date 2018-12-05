<template>
  <div class="bottom">
    <div class="w1200">
      <div class="bot-header clearfix">
        <div class="bot-item fll">
          <ul>
            <li class="title">市场及促销活动</li>
            <li class="first">促销活动</li>
            <li class="item">现场研讨会</li>
            <li class="item">线上研讨会</li>
          </ul>
        </div>
        <div class="bot-item fll" style="padding-left:80px;">
          <ul>
            <li class="title">产品</li>
            <li class="first">布线认证</li>
            <li class="item">铜缆测试与认证</li>
            <li class="item">光缆测试与认证</li>
            <li class="item">数据通信安装工具</li>
            <li class="item">查看所有产品</li>
          </ul>
        </div>
        <div class="bot-item fll" style="padding-left:80px;">
          <ul>
            <li class="title">支持</li>
            <li class="first">授权经销商查询</li>
            <li class="item">产品序列号查询</li>
            <li class="item">产品目录</li>
            <li class="item">应用文章</li>
            <li class="item">用户手册</li>
            <li class="item">软件下载与更新</li>
          </ul>
        </div>
        <div class="bot-item fll" style="padding-left:80px;">
          <ul>
            <li class="title">服务与新闻</li>
            <li class="first">购买渠道</li>
            <li class="item">校准与维护服务</li>
            <li class="item">售后服务</li>
            <li class="item">预约演示</li>
            <li class="item">申请培训</li>
            <li class="item">申请报价</li>
            <li class="item">新闻中心</li>
          </ul>
        </div>
        <div class="bot-item fll" style="padding-left:74px;">
          <div class="title">关于福禄克网络</div>
          <div class="code">
              <img src="/static/img/youku.png" alt="">
              <img src="/static/img/weibo.png" alt="" style="padding:0 30px;">
              <img src="/static/img/weixin.png" alt="">
              <div class="code-title">
               <span>优酷</span>
               <span style="padding:0 115px;">微博</span>
               <span>微信</span>
              </div>
          </div>
        </div>
      </div>
      <div class="bot-bottom">
        <div class="bot clearfix">
          <div class="fll item">遵守诚信程序</div>
          <div class="fll item">隐私条款</div>
          <div class="fll item">使用条款</div>
          <div class="fll item">站点地图</div>
          <div class="fll item" style="border:none">站长统计</div>
          <div class="fll item" style="border:none">© 2006-2018 Fluke Corporation。保留所有权利。</div>
        </div>
        <div class="company">
          <div class="fll">
            福禄克测试仪器(上海)有限公司
          </div>
          <div class="fll" style="margin-left:25px;">
            沪ICP备11037028号-15
          </div>
          <img src="/static/img/guohui.png" alt="" width="18px" class="fll" style="margin-left:5px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
ul{
  margin:0;
  padding:0;
  }
  li{
    list-style: none;
  }
.bottom {
  width: 100%;
  background-color: rgb(43,43,43);
  color: #fff;

  .bot-header {
    border-bottom: solid 1px #666;
  }

  .bot-item {
    padding-bottom: 60px;
    .code {
      img {
        display: inline-block;
        width: 110px;
        height: 110px;
        padding-top: 50px;
      }
      .code-title {
        padding-top: 5px;
        font-size: 14px;
        text-align: center;
      }
    }
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    padding-top: 50px;
  }
  .first {
    padding-top: 30px;
  }
  .item {
    padding-top: 15px;
  }
}

.bot-bottom {
  padding: 30px 0 20px 0;
  font-size: 14px;
  .bot {
    margin-left: 230px;
  }
  .item {
    padding:0 15px;
    border-right: solid 2px #fff;
  }
}

.company {
  padding: 15px 0;
  margin-left: 400px;
}



</style>