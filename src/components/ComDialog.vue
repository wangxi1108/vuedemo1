<template>
    <div class="com-dialog">
      <div class="dialog-wrap" v-if="show">
        <div class="dialog-cover" @click = "closeMyself"></div>
        <div class="dialog-content">
          <p class="dialog-close" @click = "closeMyself">X</p>
          <slot>empty</slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "comDialog",
      props:{
        show:{
          type:Boolean,
          default:false
        }

      },
      data(){
          return{

          }
      },
      methods:{
        closeMyself(){
          this.$emit('closeDialog')
        }
      }
    }
</script>

<style scoped>

.dialog-wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
.dialog-content{
  width: 50%;
  min-height: 20%;
  border:2px solid #fff;
  background: white;
  position: relative;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  padding: 5px;
  z-index: 30;
}
.dialog-cover{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #000;
  opacity: 0.5;
  z-index: 20;
}
  .dialog-close{
    width: 100%;
    text-align: right;
    color: #5e5e5e;
  }
</style>
