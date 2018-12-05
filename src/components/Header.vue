<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="6">
          <router-link to="/home">
            <img src="/static/img/logo.png" alt="" class="fll">
          </router-link>
        </el-col>
        <el-col :span="10">
          <router-link to="/product">
            <div class="menu-item fll">
              <div class="item">产品</div>
            </div>
          </router-link>
          <router-link to="/active">
            <div class="menu-item fll">
              <div class="item">市场及促销活动</div>
            </div>
          </router-link>
          <router-link to="/education">
            <div class="menu-item fll">
              <div class="item">教育与培训</div>
            </div>
          </router-link>
          <div class="menu-item fll">
            <div class="item">支持</div>
          </div>
          <div class="menu-item fll">
            <div class="item">购买与服务</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="search fll">
            <form action="" class="form">
              <select slot="prepend" placeholder="请选择" value="" class="select">
                <option label="新闻" value="1"></option>
                <option label="订单" value="2"></option>
                <option label="用户" value="3"></option>
              </select>
              <input type="text" placeholder="输入关键字" class="input">
              <img src="../../static/images/search.png" alt="" class="search-button">
            </form>
          </div>
          <div class="config fll" style="margin-left:15px;">
            <div class="login fll">
              登录
            </div>
            <div class="mine fll">
              个人中心
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 75px;
    background-color: rgb(33, 33, 33);

    img {
      display: block;
      width: 170px;
      height: 50px;
      margin-left: 100px;
      padding-top: 10px;
    }

    .menu-item {
      height: 75px;
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb( 255, 255, 255);
      line-height: 1.25;
      text-align: left;
      .item {
        cursor: pointer;
        padding: 30px 25px;
      }
    }

    .menu-item:hover {
      background: rgb(247, 191, 32);
      color: #000;
    }
    // 搜索框
    .search{
      height: 40px;
    }
    .form{
      font-size: 14px;
      width: 250px;
      height: 40px;
      background: #fff;
      margin-top: 20px;
      border-radius: 20px;
    }
    .input {
      outline: none;
      border: 0;
      width: 130px;
      height: 30px;
      margin-left: 10px;
    }
    .select {
      outline: none;
      -moz-outline:none;
      border: 0;
      width: 50px;
      margin-left: 15px;
    }
    .search-button {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-left: 0px;
      cursor: pointer;
    } 
    // 个人中心
    .config {
      padding-top: 30px;
      color: #fff;
      font-size: 14px;
      .login {
        padding: 0 10px;
        border-right: solid 2px #fff;
      }
      .mine {
        padding: 0 10px;
      }
    }
  }

</style>