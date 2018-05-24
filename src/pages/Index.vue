<template>
  <div id="index">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="index-left">
            <div class="left-com">
              <h3 @click="wai()">全部产品</h3>
              <template v-for="product in productList">
                <!--一层一层循环下去-->
                <dl>
                  <dt>{{product.title}}</dt>
                  <dd v-for="(item,index) in product.list" :key="index">
                    <a :href="item.url">{{item.name}}</a><span class="hot" v-if="item.hot">Hot</span>
                  </dd>
                </dl>
                <div class="hr" v-show="!product.last"></div>
              </template>

              <h3 class="mt20">最新消息</h3>
              <dl class="newDl">
                <dt></dt>
                <dd v-for="(itm,idx) in newsList" :key="idx">
                  <a :href="itm.url" class="new-item">{{itm.title}}</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="index-right">
            <!--轮播组件-->
            <slide-show :slides="slides" :invTime="slideTime" @onChange="ziTofu"></slide-show>

            <div class="board-list">
              <div class="board-item" v-for="(item,index) in boardList" :class="{'ml20' : index % 2}" :key="index">
                <img :src="item.src" alt="">
                <div class="item-right">
                  <h4>{{item.title}}</h4>
                  <p>{{item.description}}</p>
                  <div class="btn-box">
                    <!--<a href="" class="btn btn-info btn-sm" role="button">立即购买</a>-->
                    <!--也可以把路径写在属性里，href等于它。-->
                    <router-link class="btn btn-info btn-sm" :to="{path:'/detail/'+item.toKey}">
                      立即购买
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '@/components/SlideShow'

    export default {
      name: "index",
      components:{
          slideShow
      },
      created() {
          //问题1：post请求数据中没有id会报错？？？？


        //注意路径是配置好的。而不是内容里面的。
        //路径写在 ：  webpack.dev.conf.js 文件里面。
        this.$http.get('/api/goodNewslist')
          .then((res) => {
            // console.log(111,res.data);
          this.newsList = res.data.data //把请求到的数据给newsList
        },(err) => {
          console.log(err);

        })
      },
      data(){
          return {
            slideTime:3000,
            slides:[
              {
                src:require('../../static/imgs/slideShow/pic1.jpg'),
                title:'pic1',
                href:'http://www.baidu.com'
              },
              {
                src:require('../../static/imgs/slideShow/pic2.jpg'),
                title:'pic2',
                href:'http://www.baidu.com2'
              },
              {
                src:require('../../static/imgs/slideShow/pic3.jpg'),
                title:'pic3',
                href:'http://www.baidu.com3'
              },
              {
                src:require('../../static/imgs/slideShow/pic4.jpg'),
                title:'pic4',
                href:'http://www.baidu.com4'
              }
            ],
            newsList:[],
            productList: {
              pc: {
                title: 'PC产品',
                list: [
                  {
                    name: '数据统计',
                    url: 'http://starcraft.com'
                  },
                  {
                    name: '数据预测',
                    url: 'http://warcraft.com',
                    hot:true
                  },
                  {
                    name: '流量分析',
                    url: 'http://overwatch.com'
                  },
                  {
                    name: '广告发布',
                    url: 'http://hearstone.com'
                  }
                ]
              },
              app: {
                title: '手机应用类',
                last: true,
                list: [
                  {
                    name: '91助手',
                    url: 'http://weixin.com',
                    hot:true
                  },
                  {
                    name: '产品助手',
                    url: 'http://twitter.com'
                  },
                  {
                    name: '智能地图',
                    url: 'http://maps.com'
                  },
                  {
                    name: '团队语音',
                    url: 'http://phone.com'
                  }
                ]
              }
            },
            boardList: [
              {
                title: '开放产品',
                description: '开放产品是一款开放产品',
                id: 'car',
                toKey: 'DataStatistics', //路由的位置！
                saleout: false,
                src:require('../../static/imgs/images/1.png')
              },
              {
                title: '品牌营销',
                description: '品牌营销帮助你的产品更好地找到定位',
                id: 'earth',
                toKey: 'DataYuCe',
                saleout: false,
                src:require('../../static/imgs/images/2.png')
              },
              {
                title: '使命必达',
                description: '使命必达快速迭代永远保持最前端的速度',
                id: 'loud',
                toKey: 'Analysis',
                saleout: true,
                src:require('../../static/imgs/images/3.png')
              },
              {
                title: '勇攀高峰',
                description: '帮你勇闯高峰，到达事业的顶峰',
                id: 'hill',
                toKey: 'Advertising',
                saleout: false,
                src:require('../../static/imgs/images/4.png')
              }
            ],
          }
        },
      methods:{
        //自己测写1：
        wai(){    // /api/services/app/yunTrackPc/GetYunTrackList
          this.$http.get('')
            .then((res) => {
              console.log(res.data);
            },(err) => {
              console.log(err);

            })
        },
        ziTofu(index){
          //此index为子组件传过来的参数对象。{param:2}
          // console.log("自组件slide的index发生变化，父组件响应就打印一次。",index);
        }
      }


  }
</script>

<style scoped>
  .index-left{
    width: 200px;
    min-height: 20px;
    margin-right: 20px;

  }
  h3{
    background-color: #76f584;;
    color:#fff;
    padding: 10px 0;
    padding-left: 10px;
    font-weight: bold;
  }
  dl{
    background-color: #fff;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .newDl{
    min-height: 300px;
  }
  .hr{
    width: 100%;
    border-bottom: 1px solid #9d9d9d;
  }
  .hot{
    color:#fff;
    background:red;
    display: inline-block;
    border-radius: 3px;
  }
  .new-item{
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  dl dt{
    font-weight: bold;
    padding: 14px 0;
  }
  dl dd{
    padding: 5px;
  }

  .index-right{
    /*width: 880px;*/
    padding-left: 20px;
    min-height: 500px;
    overflow: hidden;
  }
  .board-list{
    width: 100%;
    min-height: 10px;
  }

  .board-list .board-item{
    width: 430px;
    height: 160px;
    background: #fff;
    padding: 20px;
    float: left;
    margin-bottom: 20px;
  }

  .board-item img{
    float: left;
    margin-right: 10px;
  }
  .board-item p{
    line-height: 30px;
    font-size: 14px;
  }
  .board-item h4{
    font-weight: bold;
    line-height: 30px;
    font-size: 18px;
  }
  .item-right a{
    margin-top: 6px;
  }

</style>
