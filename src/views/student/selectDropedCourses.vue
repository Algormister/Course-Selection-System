<template>
  <div id="selectdropedcourses">
    <lesson-info title="删除课程查询" :lessonInfo="dropedLessonInfo"></lesson-info>
  </div>
</template>

<script>
import lessonInfo from '../../components/TimeTable/LessonInfo'
export default {
    name:'selectDropedCourses',
    components:{
      lessonInfo
    },
    data(){
      return {
        //axios
        dropedLessonInfo: this.$store.state.lessonInfo
      }
    }
}
</script>

<style>
#selectdropedcourses{
  border: 2px solid #69b2e6;
  min-height: 80vh;
}
</style>