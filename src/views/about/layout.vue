<template>
  <div class="w1200">
    <div class="bread">
        <span>当前位置：</span>
        <router-link :to="{ path: '/about/call' }">关于福禄克网络 > </router-link>
        <span>{{$route.meta.title}}</span>
    </div>
    <div class="about clearfix">
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
        <div class="about-center fll">
         <router-view></router-view>
        </div>
      </div>  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss" src="./layout.scss">

</style>