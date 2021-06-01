<template>
  <div id="passedCourses">
    <div class="tableTitle">完成学分情况：</div>
    <grade-table :lessonInfo="lessonInfo" :title="`${passedTotalCredit}/${totalCredit}`"></grade-table>
  </div>
</template>

<script>
import gradeTable from '../../components/GradeQuery/gradeTable'
import {getAll} from '../../network/student/student'
export default {
    name: 'passedCourses',
    components:{
      gradeTable
    },
    created(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255 , 255, 0.7)'
      });
      let info = {studentId: this.$store.state.userid};
      getAll(info).then(res =>{
        loading.close();
        this.lessonInfo = res.o;
        console.log(res);
      })
    },
    data(){
        return {
            lessonInfo: [],
            totalCredit: this.$store.state.totalCredit
        }
    },
    computed: {
      passedTotalCredit(){
          if (this.lessonInfo){
              let totalCredit = 0;
              for(let i = 0; i < this.lessonInfo.length; i++){
                if (Number(this.lessonInfo[i].overallScore) >= 60){
                  totalCredit += Number(this.lessonInfo[i].course.credit);
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