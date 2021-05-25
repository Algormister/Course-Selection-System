<template>
  <div id="passedCourses">
    <div class="tableTitle">完成学分情况：</div>
    <grade-table :lessonInfo="lessonInfo" :title="`${passedTotalCredit}/${totalCredit}`"></grade-table>
    
  </div>
</template>

<script>
import gradeTable from '../../components/GradeQuery/gradeTable'
export default {
    name: 'passedCourses',
    components:{
      gradeTable
    },
    data(){
        return {
            lessonInfo: this.$store.state.lessonInfo,
            totalCredit: '25'
        }
    },
    computed: {
      passedTotalCredit(){
          if (this.lessonInfo){
              let totalCredit = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                if (Number(this.lessonInfo[i].result) >= 60){
                  totalCredit += Number(this.lessonInfo[i].credit);
                }
              }
              return totalCredit;
          }
          else return 0;
      }
    }
}
</script>

<style scoped>
#passedCourses{
  border: 2px solid #69b2e6;
}
.tableTitle{
  font-weight:bold;
  color: #69b2e6;
  padding: 5px;
}
</style>