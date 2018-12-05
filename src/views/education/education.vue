<template>
  <div class="warp">
    <div class="container-warp">
      <div class="container-content">
        <div separator-class="el-icon-arrow-right" class="bread">
          <router-link :to="{ path: '/product'}">当前位置：关于福禄克网络 > </router-link>
          <span>市场及促销活动 > </span>
          <span>线下活动</span>
        </div>
        <div class="content clearfix">
          <div v-for="o in 10" :key="o" class="item fll">
            <router-link to="/about/news/newsDetail">
             <div class="clearfix" style="margin-top:20px;">
                <div class="fll box">
                  <div class="date">09/18</div>
                  <div class="year">2018</div>
                </div>
                <div class="card-right fll">
                  <div class="card-title">新国家标准详解及最新布线测试知识和技术研讨会</div>
                  <div class="card-content">我们诚挚的邀请您参加福禄克公司举办的2018福禄克新标准详情和最新布线测试技术研讨会。期待您的光临</div>
                  <div class="card-arrows">→</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="page">
          <el-pagination
            background
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped src="./education.scss">
</style>