<template>
<div id="tab-bar-header">
  <div class="tab-bar-title" v-show="$store.state.tabBarStatus"><span>上海大学本硕博一体化选课系统</span></div>
  <div class="tab-bar-title" v-show="!$store.state.tabBarStatus"></div>
  <div class="tab-bar-info" :style="{fontSize:$store.state.tabBarStatus?'14px':'8px'}">
      <div style="font-weight:bold;white-space:nowrap;">{{title}}</div>
      <div class="detail">
          <div style="margin-top: 5px;display:inline-block;" v-show="$store.state.tabBarStatus">{{userid}}</div>
          <div style="display:inline-block">{{id}}</div>
          <br>
          <div v-show="$store.state.tabBarStatus" style="display:inline-block">姓名：</div>
          <div style="display:inline-block">{{name}}</div>
          <div v-if="status=='student'" v-show="$store.state.tabBarStatus">英语等级：{{enGrade}}</div>
          <div v-if="status=='student'" v-show="$store.state.tabBarStatus">上学期平均绩点：{{Number(lastTermGrade).toFixed(2)}}</div>
          <div class="logout" v-show="$store.state.tabBarStatus">
              <div @click="logout" style="cursor:pointer;">完成选课后请点击[安全退出]</div>
          </div>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
    name: 'TabBarHeader',
    props:{
        title: String,
        userid: String,
        status: String
    },
    data(){
        return {
            id: this.$store.state.userid,
            name: this.$store.state.name,
            enGrade: this.$store.state.enGrade,
            lastTermGrade: this.$store.state.lastTermGrade
        }
    },
    methods:{
        logout(){
            this.$router.replace('/login')
            console.log(this.name);
            sessionStorage.clear();
        }
    }
}
</script>

<style>
.tab-bar-title{
    background-color: #367fa9;
    color: white;
    height: 60px;
    line-height: 60px;
    /* text-align: center; */
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.tab-bar-info{
    background-color: #8ac3f0;
    padding: 5px;
    overflow: hidden;
}
.tab-bar-info .detail div{
    line-height: 23px;
    height: 23px;
    white-space: nowrap;
}
.tab-bar-info .detail .logout{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
    font-weight: 700;
}
</style>