<template>
<div id="tab-bar-header">
  <div class="tab-bar-title">上海大学本硕博一体化选课系统</div>
  <div class="tab-bar-info">
      <div style="font-weight:bold;">学生信息</div>
      <div class="detail">
          <div style="margin-top: 5px">学号：{{id}}</div>
          <div>姓名：{{name}}</div>
          <div>英语等级：{{enGrade}}</div>
          <div>上学期平均绩点：{{lastTermGrade}}</div>
          <div class="logout">
              <div>完成选课后请点击</div>
              <div @click="logout" style="cursor:pointer;">[安全退出]</div>
          </div>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
    name: 'TabBarHeader',
    props: {
        id: String,
        name: String,
        enGrade: String,
        lastTermGrade: String
    },
    methods:{
        logout(){
            this.$router.replace('/login')
            this.$store.commit('updateUserid', '')
            this.$store.commit('updateTerm', '')
        }
    }
}
</script>

<style>
.tab-bar-title{
    background-color: #367fa9;
    color: white;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.tab-bar-info{
    background-color: #8ac3f0;
    padding: 5px;
    font-size: 14px;
}
.tab-bar-info .detail div{
    font-size: 100%;
    line-height: 23px;
    height: 23px;
}
.tab-bar-info .detail .logout{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
    font-weight: 700;
}
</style>