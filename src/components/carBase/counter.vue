<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model = "number" @keyup="restNumber">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
export default {
  props:{
    max:{
      type:Number,
      default:100
    },
    min:{
      type:Number,
      default:1
    }
  },
  data(){
    return{
      number:this.min
    }
  },
  methods:{
    minus(){
      if(this.number <= this.min){
        return
      }
      this.number--
    },
    add(){
      if(this.number >= this.max){
        return
      }
      this.number++
    },
    //输入数字处理
    restNumber(){
      let fix;
      if(typeof this.number === "string"){ //这个重要，否则会报错
        fix = this.number.replace(/\D/g, '');
      }

      if(this.number > this.max || this.number < this.min){
        fix = this.min
      }
        this.number = fix;

    }
  },
  watch:{
    number(){
      this.$emit('on-change',this.number);
    }
  }
}

</script>

<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width: 40px;
    outline: none;
    text-align: center;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
