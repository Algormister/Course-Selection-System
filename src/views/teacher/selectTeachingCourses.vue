<template>
  <div id="selectTeachingCourses">
    <div class="tableTitle">课程查询</div>
    <div class="tableContainer">
      <div class="tableRow">
          <div class="tableHead" style="flex: 1">序号</div>
          <div class="tableHead" style="flex: 3">课程号</div>
          <div class="tableHead" style="flex: 4">课程名称</div>
          <div class="tableHead" style="flex: 1">学分</div>
          <div class="tableHead" style="flex: 2">教师号</div>
          <div class="tableHead" style="flex: 2">教师姓名</div>
          <div class="tableHead" style="flex: 5">上课时间</div>
          <div class="tableHead" style="flex: 2">上课地点</div>
          <div class="tableHead" style="flex: 2">答疑时间</div>
          <div class="tableHead" style="flex: 2">答疑地点</div>
          <div class="tableHead" style="flex: 1">校区</div>
      </div>
      <div class="tableRow" v-for="(item, index) in lessonInfo" :key="index" @click="selectStudent(item)">
          <div class="tableText" style="flex: 1">{{String.fromCodePoint(index + 65)}}</div>
          <div class="tableText" style="flex: 3">{{item.courseId}}</div>
          <div class="tableText" style="flex: 4">{{item.name}}</div>
          <div class="tableText" style="flex: 1">{{item.credit}}</div>
          <div class="tableText" style="flex: 2">{{item.teacherId}}</div>
          <div class="tableText" style="flex: 2">{{item.teacherName}}</div>
          <div class="tableText" style="flex: 5">{{courseTime(item.courseTimes)}}</div>
          <div class="tableText" style="flex: 2">{{item.sksj}}</div>
          <div class="tableText" style="flex: 2">{{item.dysj}}</div>
          <div class="tableText" style="flex: 2">{{item.dydd}}</div>
          <div class="tableText" style="flex: 1">{{item.campus}}</div>
      </div>
    </div>
    <div :class="{'active': $route.path!='/home/selectTeachingCourses'}"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import {showCourseTime} from '../../util/showCourseTime'
export default {
    name: 'selectTeachingCourses',
    data(){
      return {
        lessonInfo: this.$store.state.teachingInfo,
      }
    },
    methods:{
      selectStudent(item){
        this.$router.push({
          path: `/home/selectTeachingCourses/${item.courseId}`,
          query:{
            courseName: item.name
          }  
        })
      },
      courseTime(time){
        return showCourseTime(time);
      }
    }
}
</script>

<style scoped>
#selectTeachingCourses{
  border: 2px solid #69b2e6;
  padding-bottom: 5px;
}
.tableTitle{
  font-weight:bold;
  color: #69b2e6;
  padding: 5px;
}
.tableContainer{
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
}
.tableRow{
  display: flex;
  align-items: center;
}
.tableHead,.tableText{
  padding: 2px 0;
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  text-align: center;
  height: 24px;
  line-height: 24px;
}
.tableHead{
  font-weight: bold;
  font-size: 16px;
}
.tableText{
  font-size: 14px;
  cursor: pointer;
}
.active{
  margin-top: 25px;
  border-bottom: 2px solid #69b2e6;
}
.tableRow:hover{
  background-color: #69b2e6;
}
.tableRow:nth-of-type(1):hover{
  background-color: white;
}
</style>