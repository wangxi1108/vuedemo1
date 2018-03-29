<template>
    <div class="choose">
      <ul>
        <li v-for="(item,index) in time" class="choose-li" :data="item.val"
        @click="chooseNow(index,item.val)"
        :class="{active:index === nowIndex}">{{item.text}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "choose",
      props:{
        time:{
          type:Array,
          default:[{
            text:'',
            val:0
          }]
        }
      },
      data(){
          return{
            nowIndex:0
          }
      },
      methods:{
        chooseNow(index,val){
          this.nowIndex = index;
          this.$emit('on-change',val); //传当前点击的具体值
          // this.$emit('on-change',this.time[index]); //传time数组里面对应的选中项信息
        }
      }
    }
</script>

<style scoped>
  .choose{
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
  }
</style>
