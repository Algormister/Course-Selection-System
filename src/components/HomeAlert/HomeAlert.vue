<template>
  <div id="homealert">
      <div class="homealertcontainer">
          <strong style="font-size: 20px;"><i class="el-icon-warning-outline" style="margin-right: 20px;font-weight: bold"></i>{{message}}</strong>
          <el-button type="warning" class="alertbutton" @click="confirm">确定</el-button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeAlert',
    props:{
        message: String,
        func: Function
    },
    methods:{
        confirm(){
            this.func();
            this.$emit('alertConfirm');
        }
    }
}
</script>

<style>
#homealert{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    z-index: 10;
}
.homealertcontainer{
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    border: 3px solid #ccc;
    border-radius: 20px;
    background-color: #fdf6ec;
    color: #E6A23C;
    padding: 0 30px;
}
.alertbutton{
    align-self: flex-end;
}
</style>