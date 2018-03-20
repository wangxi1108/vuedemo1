<template>
    <div class="slideShow"  @mouseover="clearInv" @mouseout="runInv" :time="invTime">
      <div class="slide-imgs">
        <a :href="slides[nowIndex].href">
          <transition name="slide-move">
            <img v-if="isShow" :src="slides[nowIndex].src" alt="">
          </transition>
          <transition name="slide-move-old">
            <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
          </transition>
        </a>
      </div>
      <h2>{{slides[nowIndex].title}}</h2>
      <div class="slide-bar"></div>
        <ul class="pages-ul">
          <li @click="goTo(prevIndex)">&lt;</li>
          <li v-for="(item,index) in slides" @click="goTo(index)">
            <!--<a href="">{{index +1}}</a>-->
            <span :class="{liang:index == nowIndex}">{{index +1}}</span>
          </li>
          <li @click="goTo(nextIndex)">&gt;</li>
        </ul>


    </div>
</template>

<script>
    export default {
      name: "slide-show",
      props:{
        slides:{
          type:Array,
          default:[]
        },
        invTime:{
          type:Number,
          default:1000
        }
      },
      data(){
          return{
            nowIndex:0,
            isShow:true
          }
      },
      computed:{
        //轮播翻页
        prevIndex()
        {
          if (this.nowIndex === 0) {
            return this.slides.length - 1
          } else {
            return this.nowIndex - 1
          }
        },
        nextIndex()
        {
          if(this.nowIndex === this.slides.length-1){
            return 0
          }else{
            return this.nowIndex+1
          }

        }
      },
      methods:{
        goTo(index){
          this.nowIndex = index;
          this.isShow = false;
          setTimeout(()=>{
            this.isShow = true;
            this.nowIndex = index;
            //自组件向父组件传递值用函数。(函数名，变化值)
            this.$emit('onChange',{param:index})
            // this.$emit('onChange',index)
          },10)
        },
      //  循环播放
        runInv(){
          this.invId= setInterval(()=>{
            this.goTo(this.nextIndex)
            this.isShow = false;
          },this.invTime)
        },
      //  鼠标进入暂停
        clearInv(){
          clearInterval(this.invId)
        }
      },
      mounted(){
        this.runInv();
      }
    }
</script>

<style scoped>
  .slideShow{
    width: 880px;
    height: 480px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    left: 0;
    top: 0;
    margin-bottom: 10px;
  }
  .slide-imgs{
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-imgs a,.slide-imgs img{
    width: 100%;
    height: 100%;
  }
  .slide-bar{
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    background-color:#000;
    opacity: 0.5;
  }
  .pages-ul{
    position: absolute;
    z-index: 300;
    right: 0;
    bottom: 0;
    /*width: 100px;*/
    height: 50px;
    overflow: hidden;
    line-height: 50px;
  }
  .pages-ul li{
    color: #fff;
    display: inline-block;
    padding: 0 5px;
  }
  .liang{
    color: yellow;
  }

  .pages-ul li a{
    color: #fff;
    text-decoration: none;
  }

  .slideShow h2{
    position: absolute;
    z-index: 30;
    left: 10px;
    bottom: 0;
    line-height: 50px;
    color: #fff;
  }

  .slide-move-enter{
    transform: translateX(900px);
  }
  .slide-move-enter-active{
    transition: all .5s;
  }
  .slide-move-old-leave-active{
    transition:all .5s;
    transform:translate(-900px);
  }
  .slide-move-old{

  }

</style>
