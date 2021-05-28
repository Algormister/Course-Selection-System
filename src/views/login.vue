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
import {login,getterm,getStuInfo, getTeacherInfo} from '../network/login'
export default {
    name: 'login',
    data(){
        return {
            id: '',
            pw: ''
        }
    },
    created(){
        getterm().then(res =>{
            this.$store.commit('updataTermInfo', res.o);
            console.log(this.$store.state.termInfo);
        })
        window.sessionStorage.clear();
    },
    methods:{
        login(){
            //axios
            let info = {
                username: this.id,
                password: this.pw
            }
            login(info).then(res =>{
                if(res.msg != '登陆成功'){
                    alert(res.msg)
                }
                else{
                    this.$store.commit('updateShowAlert', false);
                    this.$store.commit('updateStatus', res.o)
                    this.$store.commit('updateUserid', this.id);
                    if(res.o!='admin') {
                        if(res.o == 'student'){
                            let info = {
                                studentId: this.id
                            }
                            getStuInfo(info).then(res =>{
                                this.$store.commit('updateName', res.o.name);
                                this.$store.commit('updateEnGrade', res.o.englishLevel);
                                this.$store.commit('updateLastTermGrade', res.o.gpa);
                                console.log(res);
                            })
                        }
                        else if(res.o == 'teacher'){
                            let info = {
                                teacherId: this.id
                            }
                            getTeacherInfo(info).then(res =>{
                                this.$store.commit('updateName', res.o.name);
                                console.log(res);
                            })
                        }
                        this.$router.replace('./chooseterm');
                    }
                    else {
                        this.$store.commit('updateName', 'admin')
                        this.$router.replace('./home');
                    }
                }
            })
        },
        reset(){
            this.id = ''
            this.pw = ''
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