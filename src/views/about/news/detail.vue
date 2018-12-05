<template>
    <div class="w1200">
      <div class="bread">
        <span>当前位置：</span>
        <router-link :to="{ path: '/about/news' }">新闻中心 > </router-link>
        <span>新闻详情</span>
      </div>
      <div class="news">
        <div class="news-title"> 
          了解您的SYSTIMAX损耗目标，防患于未然！ 
        </div>
        <div class="news-date">
          发布时间：2011-12-23 
        </div>
        <div class="news-content clearfix">
          <div>我们已经在过去的大量博客中介绍了光纤插入损耗，因此您现在已经知道损耗是信号沿电缆链路传播时产生的信号损失量，还知道插入损耗与电缆长度直接相关---电缆越长损耗越大---并且链路上的任何连接点(连接器、接头、分光器等）都会导致损耗增加。</div>
          <div style="padding-top:30px;">我们已经在过去的大量博客中介绍了光纤插入损耗，因此您现在已经知道损耗是信号沿电缆链路传播时产生的信号损失量，还知道插入损耗与电缆长度直接相关---电缆越长损耗越大---并且链路上的任何连接点(连接器、接头、分光器等）都会导致损耗增加。</div>
          <div style="padding-top:30px;">简单相加</div>
          <img src="/static/img/phone.png" alt="" class="fll con-img1">
          <img src="/static/img/phone2.png" alt="" class="fll"> 
          <div style="padding-top:30px;" class="fll">为帮助客户准确确定高性能SYSTIMAX光纤链路的损耗目标，康普公司(CommScope)开发了一款插入损耗计算器，用户只需输为帮助客户准确确定高性能SYSTIMAX光纤链路的为帮助客户准确确定高性能SYSTIMAX光纤链路的</div>
          <div style="padding-top:30px;" class="fll">为帮助客户准确确定高性能SYSTIMAX光纤链路的损耗目标，康普公司(CommScope)开发了一款插入损耗计算器，用户只需输为帮助客户准确确定高性能SYSTIMAX光纤链路的为帮助客户准确确定高性能SYSTIMAX光纤链路的</div>
          <div style="padding-top:30px;" class="fll">为帮助客户准确确定高性能SYSTIMAX光纤链路的损耗目标，康普公司(CommScope)开发了一款插入损耗计算器，用户只需输为帮助客户准确确定高性能SYSTIMAX光纤链路的为帮助客户准确确定高性能SYSTIMAX光纤链路的</div>
        </div>
      </div>
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
  }
</script>

<style scoped lang="scss">
.news {
  margin-bottom: 45px;
  background-color: #fff;
  padding: 0 30px;
  .news-title {
    padding:40px 0 20px 0;
    text-align: center;
    font-size: 24px;
    color: rgb( 33, 33, 33 );
    line-height: 1.5;
 }
 .news-date {
   color: #999;
   text-align: center;
   padding-bottom: 40px;
   border-bottom: solid 1px #f1f1f1;
 }
 .news-content {
  font-size: 14px;
  color: rgb( 51, 51, 51 );
  line-height: 1.5;
  padding: 20px 0;
  .con-img1 {
    display: block;
    padding-top: 40px;
    padding-left: 235px;
    padding-right: 215px;
  }
 }
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