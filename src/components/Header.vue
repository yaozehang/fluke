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
          <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容"  class="input-with-select">
            <el-select  slot="prepend" placeholder="请选择" value="">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          </div>
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
    color: rgb( 255, 255, 255 );
    line-height: 1.25;
    text-align: left;
    .item {
      cursor: pointer;
      padding: 30px 25px;
    }
  }

  .menu-item:hover {
    background: rgb(247,191,32);
    color: #000;
  }

  .search {
    width: 240px;
  }

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
