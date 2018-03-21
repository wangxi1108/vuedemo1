<template>
    <div class="login-form">
      <form action="">
        <div class="form-line">
          <label for="">用户名：</label>
          <div class="input-box">
            <input type="text" v-model="userName" placeholder="输入用户名">
            <!--userError是函数-->
            <span class="notice">{{userError.errorText}}</span>
          </div>
        </div>
        <div class="form-line">
          <label for="">密码：</label>
          <div class="input-box">
            <input type="password" v-model="password" placeholder="输入密码">
            <span class="notice">{{passwordError.errorText}}</span>
          </div>
        </div>
        <div class="form-line">
          <label for=""></label>
          <div class="form-btn">
            <a class="login-btn" @click="loginBtn">登录</a>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "login-form",
      computed:{
        userError(){ //输入的正则判断
          let errorText,errorStatus;
          if(!/@/g.test(this.userName)){
            errorText = '';
            errorStatus = true;
          }
          else{
            errorText = '包含了@';
            errorStatus = false;
          }
          return {
            errorText,
            errorStatus
          }
        },
        passwordError(){
          let errorText,errorStatus;
          if(!/^\w{6,12}$/g.test(this.password)){
            errorText = '输入为6~12位';
            errorStatus = false;
          }
          else{
            errorText = '';
            errorStatus = true
          }
          return {
            errorText,
            errorStatus
          }
        }

      },
      data(){
          return{
            userName:'',
            password:''
          }
      },
      methods:{
        loginBtn(){
          if(this.userError.errorStatus || this.password.errorStatus){
            console.log("Ok")
          }else{
            alert("输入格式不对")
          }
          console.log(this.userName,this.password);
        }
      }
    }
</script>

<style scoped>
  .form-line{
    padding: 10px;
  }
  label{
    width: 100px;
  }
  .input-box{
  display: inline-block;
}
  .form-btn{
    display: inline-block;
    padding-top: 10px;
  }
  .login-btn {
    padding: 5px 10px;
    background-color: mediumseagreen;
    color: #fff;
    text-decoration: none;
  }
  .notice{
    font-size: 14px;
    color: red;
  }
</style>
