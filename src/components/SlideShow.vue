<template>
    <div class="slideShow">
      <div class="slide-imgs">
        <a :href="slides[nowIndex].href">
          <img :src="slides[nowIndex].src" alt="">
        </a>
      </div>
      <h2>{{slides[nowIndex].title}}</h2>
      <div class="slide-bar"></div>
        <ul class="pages-ul">
          <li @click="goto(prevIndex)">&lt;</li>
          <li v-for="(item,index) in slides" @click="goto(index)">
            <!--<a href="">{{index +1}}</a>-->
            <span :class="{liang:index == nowIndex}">{{index +1}}</span>
          </li>
          <li @click="goto(nextIndex)">&gt;</li>
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
        }
      },
      data(){
          return{
            nowIndex:0
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
        goto(index){
          this.nowIndex = index;
        }
      },
      mounted(){
        console.log(this.slides);
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

</style>
