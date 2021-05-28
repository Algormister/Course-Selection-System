<template>
  <div id="gradeTable">
    <div class="tableTitle">{{title}}</div>
    <div class="tableContainer">
      <div class="tableRow">
        <div class="tableHead" style="flex: 1">序号</div>
        <div class="tableHead" style="flex: 3">课程号</div>
        <div class="tableHead" style="flex: 4">课程名称</div>
        <div class="tableHead" style="flex: 1">学分</div>
        <div class="tableHead" style="flex: 2">教师号</div>
        <div class="tableHead" style="flex: 2">教师姓名</div>
        <div class="tableHead" style="flex: 2">成绩</div>
        <div class="tableHead" style="flex: 2">绩点</div>
      </div>
      <div class="tableRow" v-for="(item, index) in lessonInfo" :key="index">
        <div class="tableText" style="flex: 1">{{ index + 1 }}</div>
        <div class="tableText" style="flex: 3">{{ item.course.courseId }}</div>
        <div class="tableText" style="flex: 4">{{ item.course.name }}</div>
        <div class="tableText" style="flex: 1">{{ item.course.credit }}</div>
        <div class="tableText" style="flex: 2">{{ item.course.teacherId }}</div>
        <div class="tableText" style="flex: 2">{{ item.course.teacherName }}</div>
        <div class="tableText" style="flex: 2" v-if="item.overallScore != -1">{{ item.overallScore }}</div>
        <div class="tableText" style="flex: 2" v-else>成绩未出</div>
        <div class="tableText" style="flex: 2" v-if="item.overallScore != -1">{{ showGpa(item.overallScore) }}</div>
        <div class="tableText" style="flex: 2" v-else>绩点未出</div>
      </div>
    </div>
  </div>
</template>

<script>
import {gpa} from '../../util/gpa'
export default {
  name: "gradeTable",
  props:{
      title: String,
      lessonInfo: Array
  },
  created(){
    console.log(this.lessonInfo);
  },
  methods:{
    showGpa(score){
      return gpa(score);
    }
  }
};
</script>

<style scoped>
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
}
</style>