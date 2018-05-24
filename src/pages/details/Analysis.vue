<template>
  <div class="tong-ji">
    <div class="detail-com-top">
      <h3 class="detail-title">流量分析</h3>
      <div class="title-explain">
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <ul class="buy-details">
        <li>
          <span class="li-span">购买数量：</span>
          <v-counter @on-change="selectParams('buyNum',$event)"></v-counter>{{buyNum}}
        </li>
        <li>
          <span class="li-span">产品类型：</span>
          <select v-model="buyTypeSelect" @change="getPrice">
            <option value="" disabled>请选择</option>
            <option v-for="(option,index) in buyType" :value="option.text" :key=index>{{option.text}}</option>
          </select>{{buyTypeSelect}}
        </li>
        <li>
          <span class="li-span">产品版本：</span>
          <v-choose-more :typeData="useType" @on-change="selectParams('buyVersions',$event)"></v-choose-more>{{buyVersions}}
        </li>
        <li>
          <span class="li-span">有效时间：</span>
          <v-choose :time="rangeTime" @on-change="selectParams('buyActiveTime',$event)"></v-choose>{{buyActiveTime}}
        </li>
        <li><span class="li-span">总价：</span><span>{{price}}元</span></li>
        <li><span class="li-span"></span>
          <a class="buy-btn"> 立即购买</a>
        </li>

      </ul>
    </div>
    <div class="detail-bottom">
      <h3 class="detail-title">产品说明</h3>
      <div class="title-des">
        <p>des分析分析分析分析历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <div class="goods-type">
        电子电工  安工文件 礼品 生活服务
      </div>
    </div>

  </div>
</template>

<script>
  import vCounter from '@/components/carBase/counter'
  import vChoose from '@/components/carBase/choose'
  import vChooseMore from '@/components/carBase/chooseMore'

    export default {
      name: "analysis",
      components: {vCounter,vChoose,vChooseMore},
      data() {
        return {
          buyNum:1,
          buyTypeSelect: '入门版',
          buyVersions:['客户版'],
          buyActiveTime:"半年",
          price:0,
          buyType: [
            {text: '入门版', value: 0},
            {text: '中级版', value: 1},
            {text: '高级版', value: 2}
          ],

          rangeTime:[
            {text:'半年',val:0},
            {text:'1年',val:1},
            {text:'2年',val:2}
          ],
          useType:[
            {text:'客户版',val:0},
            {text:'代理版',val:1},
            {text:'专业版',val:2},
            {text:'其他版',val:3}
          ]
        }
      },
      computed: {
        // selects() {
        //   // console.log(11111, this.buyTypeSelect);
        //   return this.buyTypeSelect
        // }
      },
      methods: {
        selectParams(attr,val){
          this[attr]=val;
          this.getPrice();
        },
        getPrice(){
          let par={
            aa:this.buyNum,
            bb:this.buyTypeSelect,
            cc:this.buyVersions,
            dd:this.buyActiveTime
          };
          console.log('par',par);
          // this.$http.post('/api/getPrice',par).then((res)=>{
          //   console.log('res',res);
          // });

          this.$http.get('/api/getPrice')
          .then((res) => {
            console.log('res',res);
          },(err) => {
            console.log(err);

          })

        },
        shopNum(num){
          this.buyVersions = num;
        },
        select() {
          // console.log('产品类型', this.buyTypeSelect);
        },
        chooseTime(val){
          this.buyActiveTime = val;
        }
      },
      mounted(){
        // this.select();
      }
    }
</script>


