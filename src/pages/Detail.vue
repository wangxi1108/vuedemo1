<template>
    <div class="detail">
      <div class="detail-container">
        <div class="detail-left">
          <img :src="detailImg" alt="">
          <ul>
            <!--<li v-for="item in products">{{item.name}}</li>-->
            <router-link v-for="(item,index) in products" :to="{ path: item.path }" active-class="active" tag="li" :key="index">
              {{item.name}}
            </router-link>
          </ul>
        </div>
        <div class="detail-right">
          <keep-alive>
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
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
                path:'DataStatistics',
                active:false
              },
              {
                name: '数据预测',
                path: 'DataYuCe',
                active: false
              },
              {
                name: '流量分析',
                path: 'Analysis',
                active: false
              },
              {
                name: '广告发布',
                path: 'Advertising',
                active: false
              }
            ],
            imgMap:{
              '/detail/DataStatistics':require("../../static/imgs/images/1.png"),
              '/detail/DataYuCe':require("../../static/imgs/images/2.png"),
              '/detail/Analysis':require("../../static/imgs/images/3.png"),
              '/detail/Advertising':require("../../static/imgs/images/4.png")
            }

          }
      },
      computed:{
          //根据当前可以拿到的路由路径来映射当前detail的图标。
          detailImg(){
            // console.log(this.$route.path);
            return this.imgMap[this.$route.path]
          }
      }
    }
</script>

<style>
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
  padding: 8px 0;
  padding-left: 10px;
}

.active{
  background-color: mediumseagreen;
  color: #fff;
}

.detail-right{
  float: right;
  width: 970px;
  overflow: hidden;
}

/*公共detail样式*/
.detail-com-top{
  background: #fff;
}
.detail-title{
  color: red;
  font-size: 20px;
  padding: 10px;
}
.title-explain{
  margin-top: 20px;
  background:#d8f8ff;
}
.buy-details{
  padding: 10px;
  padding-bottom: 30px;
}
.buy-details li{
  padding: 6px 0;
}
.li-span{
  display: inline-block;
  width: 100px;
}
.buy-btn{
  display: inline-block;
  padding: 5px 10px;
  background-color: mediumseagreen;
  color: #fff;
  text-decoration: none;
}

.detail-bottom{
  margin-top: 20px;
  background: #fff;
  padding: 10px;
  padding-bottom: 30px;
}

</style>
