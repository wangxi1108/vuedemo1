<template>
  <div id="layout">
    <div class="app-header">
      <div class="head-content">
        <img class="logo" src="static/imgs/logo1.jpg" alt="">
        <div class="head-nav">
          <ul>
            <li @click="showLogin">登录</li>
            <li class="shu">|</li>
            <li @click="showRegist">注册</li>
            <li class="shu">|</li>
            <li @click="showAbouteDialog">关于</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
        <span>2018-vue-project-stand</span>
    </div>
    <!--顶部弹窗-->
    <vue-dialog :show="showDialog" @closeDialog="noShow('showDialog')">
      <p>ppp
        <span>
          就放在了插槽里了
        </span>
      </p>
    </vue-dialog>
    <vue-dialog :show="showLoginDialog" @closeDialog="noShow('showLoginDialog')">
      <login-form></login-form>
    </vue-dialog>
    <vue-dialog :show="showRegisterDialog" @closeDialog="noShow('showRegisterDialog')">
      <p>注册dialog</p>
    </vue-dialog>
  </div>
</template>

<script>
  import ComDialog from '@/components/ComDialog'
  import LoginForm from '@/components/LoginForm'
    export default {
      name: "layout",
      components:{vueDialog:ComDialog,LoginForm},
      data(){
          return {
            //记-1：父组件中有子组件时，状态都是由父组件中定义变量来控制。子组件是通过$emit来通过函数来改变变量状态。
            showDialog:false,
            showLoginDialog:false,
            showRegisterDialog:false
          }
      },
      methods:{
        showAbouteDialog(){
          this.showDialog = true;
        },
        showLogin(){
          this.showLoginDialog = true;
        },
        showRegist(){
          this.showRegisterDialog = true;
        },
        noShow(aa){
          this[aa] = false;
        }
      }
    }
</script>

<style>
  html,body{
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color: #e7e7e7;
  }
  /*1.reset.css*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /*2.通用的自定义样式*/
  .ml20{
    margin-left: 20px;
  }
  .mt20{
    margin-top: 20px;
  }




body{
   background-color: #e7e7e7;
   width: 100%;
   height: 100%;
   position: relative;
 }
.app-header{
  width: 100%;
  height: 60px;
  background-color:#3c3b3b;
}
  .head-content{
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }
  .logo{
    width:auto;
    height: 50px;
    margin-top:5px;
  }
  .head-nav{
    float: right;
    height: 100%;
    line-height: 60px;
    color: #fff;
  }
  .head-nav ul{

  }
  .head-nav ul .shu{
    padding: 0 6px;
  }
  .head-nav ul li{
    float: left;
  }

  .app-content{
    width: 1200px;
    min-height: 900px;
    margin: 0 auto;
    overflow: hidden;
  }


  /*底部*/
  .app-footer{
    margin-top: 30px;
    width: 100%;
    min-height: 50px;
    overflow: hidden;
    background-color: #ccc;
    line-height: 50px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
  }


</style>
