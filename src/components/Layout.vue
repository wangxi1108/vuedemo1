<template>
  <div id="layout">
    <div class="app-header">
      <div class="head-content">
        <img class="logo" src="static/imgs/logo1.jpg" alt="">
        <div class="head-nav">
          <ul>
            <li>登录</li>
            <li class="shu">|</li>
            <li>注册</li>
            <li class="shu">|</li>
            <li>关于</li>
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
        <span>2018-vueproject-stand</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style>
  html,body{
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif
  }
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


 body{
   background-color: #e7e7e7;
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

  /*底部*/
  .app-footer{
    width: 100%;
    height: 50px;
    background-color: #ccc;
    position: fixed;
    bottom: 0;
    line-height: 50px;
    text-align: center;
  }


</style>
