<template>
  <div id="homepage">
    <p style="margin-bottom: 40px;font-size: 28px;font-weight:bold;">欢迎进入上海大学选课系统</p>
    <div style="display: flex;">
      <a href="http://www.shu.edu.cn">
        上海大学（Shanghai University），简称“上大”，是上海市属、国家“211工程”重点建设的综合性大学，教育部与上海市人民政府共建高校，世界一流学科建设高校，入选国家“111计划”、卓越工程师教育培养计划、卓越新闻传播人才教育培养计划、国家建设高水平大学公派研究生项目、教育部来华留学示范基地、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校
      </a>
      <img src="../assets/images/shu.jpg" alt="" style="width: 300px; height: auto;">
    </div>
    
  </div>
</template>

<script>
import {getCourse} from '../network/teacher/teacher'
import {getLessonInfo} from '../network/student/student'
export default {
  name:'HomePage',
  created(){
    if(this.$store.state.status == 'teacher'){
      let info = {
        teacherId:this.$store.state.userid,
        term: this.$store.state.term.term
      }
      getCourse(info).then(res =>{
        if(res.msg == '查询成功'){
          this.$store.commit('updateTeachingInfo', res.o);
        }
      })
    }
    else if(this.$store.state.status == 'student'){
      let info = {
        studentId: this.$store.state.userid,
        term: this.$store.state.term.term
      }
      getLessonInfo(info).then(res =>{
        if(res.msg == '查询成功'){
          this.$store.commit('updateLessonInfo', res.o);
        }
      })
    }
  }
}
</script>

<style scoped>
#homepage{
  width: 80%;
}
a{
  text-decoration: none; 
  color: #409eff;
  line-height: 2;
  font-size: 18px;
}
a:hover{
  text-decoration: underline;
}
</style>