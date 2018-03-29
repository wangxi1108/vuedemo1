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
          <v-counter></v-counter>
        </li>
        <li>
          <span class="li-span">产品类型：</span>
          <select v-model="buyTypeSelect" @on-change="select()">
            <option value="" disabled>请选择</option>
            <option v-for="option in buyType" :value="option.value">{{option.text}}</option>
          </select>
        </li>
        <li>
          <span class="li-span">有效时间：</span>
          <v-choose :time="rangeTime" @on-change="chooseTime"></v-choose>
        </li>
        <li><span class="li-span">总价：</span><span>500元</span></li>
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

    export default {
      name: "analysis",
      components: {vCounter,vChoose},
      data() {
        return {
          buyType: [
            {text: '入门版', value: 0},
            {text: '中级版', value: 1},
            {text: '高级版', value: 2}
          ],
          buyTypeSelect: '',
          rangeTime:[
            {text:'半年',val:0},
            {text:'1年',val:1},
            {text:'2年',val:2}
          ]
        }
      },
      computed: {
        selects() {
          // console.log(11111, this.buyTypeSelect);
          return this.buyTypeSelect
        }
      },
      methods: {
        select() {
          // console.log(222, this.buyTypeSelect);
          console.log(this.selects);
        },
        chooseTime(val){
          console.log(1122,val);
        }
      },
      mounted(){
        // this.select();
      }
    }
</script>

<style scoped>

</style>
