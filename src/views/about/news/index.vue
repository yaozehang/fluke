<template>
  <div>
    <div class="news-top">新闻中心</div>
    <div v-for="o in 6" :key="o">
      <router-link to="/about/news/newsDetail">
        <div class="clearfix news-item">
          <div class="news-date fll">
            <div class="date">17</div>
            <div class="year">2018-06</div>
          </div>
          <div class="news-text fll">
            <div class="news-title">通往200G和400G之路已经铺就</div>
            <div
              class="news-content"
            >为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年实现10G开了解您的SYSTIMAX损耗目标，防患于未然！ 为了支持大数据，对带宽的要求越来越高，这就要求以太网速度不断提高，从2004年</div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="page-bar">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
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
      currentPage4: 4
    };
  }
};
</script>

<style scoped lang="scss">
.news-item {
  padding-top: 30px;
}
.news-top {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb(33, 33, 33);
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: solid 4px #000;
}
.news-date {
  text-align: center;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  .date {
    font-size: 28px;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    font-weight: bold;
    padding: 10px 0;
  }
  .year {
    font-size: 16px;
    font-family: "PingFang";
    color: rgb(153, 153, 153);
  }
}
.news-text {
  width: 875px;
  .news-title {
    font-size: 16px;
    font-family: "PingFang";
    color: rgb(33, 33, 33);
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

.page-bar {
  text-align: center;
  padding-top: 40px;
}
</style>