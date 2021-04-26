<template>
  <div id="login">
      <div class="loginContainer">
          <h1>选课系统</h1>
          <div>
             <div class="loginInput">
                <div style="margin-right: 5px;">学号:</div>
                <input v-model="id" type="text">
            </div>
            <div class="loginInput" style="margin: 20px 0;" @keydown.enter="login">
                <div style="margin-right: 5px;">密码:</div>
                <input v-model="pw" type="password">
            </div> 
          </div>
          <div class="btnContainer">
              <el-button type="primary" @click="reset">重置</el-button>
              <el-button type="primary" @click="login">登录</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            id: '',
            pw: ''
        }
    },
    methods:{
        login(){
            this.$store.commit('updateUserid', this.id)
            // console.log(this.$store.state.userid);
            this.$router.replace('./chooseterm')
        },
        reset(){
            this.id = ''
            this.pw = ''
            this.$store.commit('updateUserid', '')
        }
    }
}
</script>

<style>
#login{
    background-image: linear-gradient(to right, #4568DC, #B06AB3);
    height: 100vh;
}
.loginContainer{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 40px;
    background-color: white;
    height: 50vh;
    border-radius: 20px;
}
.loginContainer input{
    border: 0;
    display: inline-block;
    height: 36px;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    outline: none;
}
.loginInput{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.btnContainer{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.btnContainer .el-button{
    border-radius: 8px;
}
.btnContainer .el-button:focus{
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
}
</style>