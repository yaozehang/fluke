<template>
  <div class="call">
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
    <div class="people">福禄克公司 | 销售人员</div>
    <div class="phone-card clearfix">
      <div class="card-item fll" v-for="o in 6" :key="o">
        <div class="card-img">
          <img src alt>
        </div>
        <div class="name">
          <span style="font-size:18px;">齐志仕</span>
          <span style="font-size:13px;">(销售)</span>
        </div>
        <div style="color:#666; font-size:15px;">
          <div class="phone clearfix">
            <img src="/static/img/xiaophone.png" alt class="phone-img fll">
            <span class="phone-num fll">电话：13700020781</span>
          </div>
          <div class="email clearfix">
            <img src="/static/img/email.png" alt class="email-img fll">
            <span class="email-num fll">邮箱：zhishiqi@fluke.com</span>
          </div>
          <div class="local clearfix">
            <img src="/static/img/local.png" alt class="local-img fll">
            <span class="local-num fll">负责区域：北京（交通/科研、军工/政府/质检/其他）、陕西、宁夏、甘肃、青海、新疆，暂代（广东、广西、福建、海南）</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    map() {
      var map = new BMap.Map("container"); // 创建地图实例
      var point = new BMap.Point(116.447362, 39.912681); // 创建点坐标
      var pointB = new BMap.Point(116.457089, 39.914223);
      map.centerAndZoom(pointB, 16); // 初始化地图，设置中心点坐标和地图级别
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中

      // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

      var opts1 = {
        position: point, // 指定文本标注所在的地理位置
        offset: new BMap.Size(10, -40) //设置文本偏移量
      };
      var label1 = new BMap.Label(
        "美国福禄克网络公司 电话：010-5735-1446",
        opts1
      ); // 创建文本标注对象
      label1.setStyle({
        color: "black",
        fontSize: "12px",
        height: "20px",
        lineHeight: "20px",
        fontFamily: "微软雅黑"
      });
      map.addOverlay(label1);
    }
  },
  mounted() {
    this.map();
  }
};
</script>

<style scoped lang="scss" src="./call.scss">
</style>