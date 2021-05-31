<template>
  <div id="gradeQuery">
    <grade-table :lessonInfo="lessonInfo" title="期末成绩查询"></grade-table>
    <div style="font-size:14px;padding:5px;">总学分:{{totalCredit}} 平均绩点:{{avgGrade?avgGrade:0}}</div>
  </div>
</template>

<script>
import gradeTable from '../../components/GradeQuery/gradeTable'
import {getGpa} from '../../network/student/student'
import {gpa} from '../../util/gpa'
export default {
    name: 'gradeQuery',
    components:{
      gradeTable
    },
    created(){
        let info = {
            studentId:this.$store.state.userid,
            term: this.$store.state.term.term
        }
        getGpa(info).then(res =>{
            console.log(res);
        })
    },
    data(){
        return {
            lessonInfo: this.$store.state.lessonInfo,
            gpa: undefined
        }
    },
    computed:{
      totalCredit(){
          if (this.lessonInfo){
              let totalCredit = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                  totalCredit += Number(this.lessonInfo[i].course.credit);
              }
              return totalCredit;
          }
          else return 0;
      },
      avgGrade(){
          if (this.lessonInfo.length != 0){
              let ans = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                  ans += gpa(Number(this.lessonInfo[i].overallScore)) * Number(this.lessonInfo[i].course.credit);
              }
              return (ans / this.totalCredit).toFixed(2);
          }
          else{
              return 0;
          }
      }
    }
}
</script>

<style>
#gradeQuery{
    border: 2px solid #69b2e6;
}
</style>