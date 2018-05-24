<template>
    <div class="choose-more">
      <ul>
        <li class="choose-li" v-for="(itm,idx) in typeData"
        @click="chooseMore(idx)"
        :class="{active:checkActive(idx)}" :key="idx">
          {{itm.text}}
        </li>
      </ul>
    </div>
</template>

<script>
  import _ from 'lodash'
    export default {
        name: "choose-more",
      props: {
        typeData:{
          type:Array
        }
      },
      data(){
          return{
            nowChooseIndex:[0]
          }
      },
      methods:{
        // 可多选，根据数组内有无该选中的index来判断
        chooseMore(index){
          let nowChoosedArray;
          if(this.nowChooseIndex.indexOf(index) === -1){
            this.nowChooseIndex.push(index)
          }else{
            this.nowChooseIndex = _.remove(this.nowChooseIndex,(n)=>{
              return n !== index
            })
          }
          nowChoosedArray = _.map(this.nowChooseIndex,(idx)=>{
            // 可直接把文字传过去。也可以把对象传过去，父组件再处理要得值。
            return this.typeData[idx].text
          })
          this.$emit('on-change',nowChoosedArray);
          // console.log(nowChoosedArray);
        },
        checkActive(index){
          return this.nowChooseIndex.indexOf(index) !== -1
        }
      }
    }
</script>

<style scoped>
  .choose-more{
    display: inline-block;
  }
  .choose-li{
    padding: 2px 4px;
    margin-right: 8px;
    border: 1px solid #8c8c8c;
    display: inline-block;
  }
  .active{
    background: mediumseagreen;
    color: #fff;
    border: none;
    border: 1px solid mediumseagreen;
  }
</style>
