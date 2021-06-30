<template>
    <div class="header-container">
        <div class="header-button" @click="changeTabBar">
            <i class="el-icon-s-operation" style="color:white;font-size:24px;line-height:60px;"></i>
        </div>
        <div class="func-container">
            <div @click="idclick"><i class="el-icon-user"></i>{{id}}</div>
            <div @click="logout">
                <i class="el-icon-switch-button"></i>安全退出
            </div>
        </div>
        <p v-show="isMasked && isShow === 2"><ul class="circle"><li>{{id}}</li></ul></p>
    </div>   
</template>

<script>
export default {
    name: 'AdminHomeHeader',
    data(){
        return {
            isShow: 0,
        }
    },
    props:{
        term:String,
        id:String,
        isMasked: Boolean
    },
    methods:{
        logout(){
            this.$router.replace('/login');
            sessionStorage.clear();
        },
        idclick(){
            this.isShow = 2;
            this.$emit('homeheaderclick', 2);
        },
        changeTabBar(){
            this.$store.commit('updateTabBarStatus');     //改变宽度230或65
            this.$emit('showTabBar');
        }
    }
}
</script>

<style scoped>
.header-container{
    position: relative;
    height: 100%;
}
.header-button{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    background-color: transparent;
    height: 100%;
    width:34px;
    text-align: center;
    cursor: pointer;
}
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
    z-index: 11;
}
p:nth-of-type(1){
    left: 984px;
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