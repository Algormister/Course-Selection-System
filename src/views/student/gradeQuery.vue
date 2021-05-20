<template>
  <div id="gradeQuery">
    <grade-table :lessonInfo="lessonInfo" title="期末成绩查询"></grade-table>
    <div style="font-size:14px;padding:5px;">总学分:{{totalCredit}} 平均绩点:{{avgGrade}}</div>
  </div>
</template>

<script>
import gradeTable from '../../components/GradeQuery/gradeTable'
export default {
    name: 'gradeQuery',
    components:{
      gradeTable
    },
    data(){
        return {
            lessonInfo: this.$store.state.lessonInfo
        }
    },
    computed:{
      totalCredit(){
          if (this.lessonInfo){
              let totalCredit = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                  totalCredit += Number(this.lessonInfo[i].credit);
              }
              return totalCredit;
          }
          else return 0;
      },
      avgGrade(){
          if (this.lessonInfo){
              let ans = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                  ans += Number(this.lessonInfo[i].grade) * Number(this.lessonInfo[i].credit);
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