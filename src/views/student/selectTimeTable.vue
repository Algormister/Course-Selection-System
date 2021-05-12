<template>
  <div id="selectTimeTable">
    <lesson-info :title="term+' 课程表'" :lessonInfo="lessonInfo"></lesson-info>
    <time-table :lessonTableInfo="lessonTableInfo" :credit="credit"></time-table>
  </div>
</template>

<script>
import TimeTable from '../../components/TimeTable/TimeTable'
import LessonInfo from '../../components/TimeTable/LessonInfo'
export default {
    name: 'selectTimeTable',
    components:{
      TimeTable,
      LessonInfo
    },
    data(){
      return {
        term: this.$store.state.term,
        credit: this.$store.getters.credit,
        lessonInfo: this.$store.state.lessonInfo,
        lessonTableInfo: this.$store.state.lessonTableInfo
      }
  },
  methods:{
    
  }
}
</script>

<style scoped>
#selectTimeTable{
  width: 100%;
  border: 2px solid #69b2e6;
  padding: 0;
}
</style>