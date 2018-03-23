<template>
    <div class="detail">
      <div class="detail-container">
        <div class="detail-left">
          <img src="../../static/imgs/images/1.png" alt="">
          <ul>
            <li v-for="item in products">{{item.name}}</li>
          </ul>
        </div>
        <div class="detail-right">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
      data(){
          return{
            products:[
              {
                name:'数据统计',
                path:'count',
                active:false
              },
              {
                name: '数据预测',
                path: 'forecast',
                active: false
              },
              {
                name: '流量分析',
                path: 'analysis',
                active: false
              },
              {
                name: '广告发布',
                path: 'publish',
                active: false
              }
            ]

          }
      }
    }
</script>

<style scoped>
.detail-container{
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
}
.detail-left{
  width: 200px;
  height: 250px;
  background-color: #fff;
  float: left;
  text-align: center;
}
.detail-left img{
  margin: 10px 0;
}
.detail-left ul li{
  text-align: left;
  margin-bottom: 16px;
  padding-left: 10px;
}



</style>
