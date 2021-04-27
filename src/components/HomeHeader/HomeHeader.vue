<template>
    <div class="header-container">
        <!-- <div class="header-button">
            <i class="el-icon-s-operation" style="color:white;font-size:32px;line-height:60px;"></i>
        </div> -->
        <div class="func-container">
            <div><i class="el-icon-chat-dot-round"></i>选课疑难解答</div>
            <div @click="termclick"><i class="el-icon-date"></i>{{term}}</div>
            <div @click="idclick"><i class="el-icon-user"></i>{{id}}</div>
            <div @click="logout">
                <i class="el-icon-switch-button"></i>安全退出
            </div>
        </div>
        <p v-show="ishidden === 1" @click="changeTerm"><ul class="circle"><li>切换选课学期</li></ul></p>
        <p v-show="ishidden === 2"><ul class="circle"><li>{{id}}</li></ul></p>
    </div>   
</template>

<script>
export default {
    name: 'HomeHeader',
    data(){
        return {
            ishidden: 0,
        }
    },
    props:{
        term:String,
        id:String,
    },
    methods:{
        logout(){
            this.$router.replace('/login')
            this.$store.commit('updateUserid', '')
            this.$store.commit('updateTerm', '')
        },
        termclick(){
            this.ishidden = 1
        },
        idclick(){
            this.ishidden = 2
        },
        changeTerm(){
            this.$store.commit('updateTerm', '')
            this.$router.replace('/chooseterm')
        }
    }
}
</script>

<style>
.header-container{
    position: relative;
    height: 100%;
}
/* .header-button{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    background-color: transparent;
    height: 100%;
    width:34px;
} */
.func-container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    color:white;
}
.func-container>div{
    padding: 0 30px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.func-container>div:hover{
    background-color: rgba(0, 0, 0, .1);
}
p{
    display: block;
    position: absolute;
    top: 60px;
    height: 40px;
    width: 240px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .2);
    margin: 0;
    line-height: 40px;
    cursor: pointer;
}
p:nth-of-type(1){
    left: 721px;
}
p:nth-of-type(2){
    left: 975px;
    width: 200px;
}
.circle{
    list-style-type: circle;
    margin:0;
}
p:hover{
    color:#ccc;
}
</style>