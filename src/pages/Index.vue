<template>
  <div id="index">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="index-left">
            <div class="left-com">
              <h3>全部产品</h3>
              <template v-for="product in productList">
                <!--一层一层循环下去-->
                <dl>
                  <dt>{{product.title}}</dt>
                  <dd v-for="item in product.list">
                    <a :href="item.url">{{item.name}}</a><span class="hot" v-if="item.hot">Hot</span>
                  </dd>
                </dl>
                <div class="hr" v-if="!product.last"></div>
              </template>

              <h3>最新消息</h3>
              <dl>
                <dt></dt>
                <dd v-for="itm in newsList">
                  <a :href="itm.url">{{itm.name}}</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="index-right">
fdgdgg
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            newsList:[
              {
                name: '数据统计1',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测2',
                url: 'http://warcraft.com',
                hot:true
              },
              {
                name: '流量分析3',
                url: 'http://overwatch.com'
              },
              {
                name: '广告发布4',
                url: 'http://hearstone.com'
              }
            ],
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
            }
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
    background-color: green;
    color:#fff;
    padding: 10px 0;
    padding-left: 10px;
  }
  dl{
    background-color: #fff;
    padding-left: 10px;
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
  dl dt{
    font-weight: bold;
    padding: 14px 0;
  }
  dl dd{
    padding: 5px;
  }
</style>
