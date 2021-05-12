<template>
  <div id="selectdropedcourses">
    <div class="tableTitle">删除课程查询</div>
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
      <div class="tableRow" v-for="(item, index) in lessonInfo" :key="index">
        <div class="tableText" style="flex: 1">{{String.fromCodePoint(index + 65)}}</div>
        <div class="tableText" style="flex: 3">{{item.lessonId}}</div>
        <div class="tableText" style="flex: 4">{{item.lessonName}}</div>
        <div class="tableText" style="flex: 1">{{item.credit}}</div>
        <div class="tableText" style="flex: 2">{{item.tId}}</div>
        <div class="tableText" style="flex: 2">{{item.tName}}</div>
        <div class="tableText" style="flex: 5">{{item.time}}</div>
        <div class="tableText" style="flex: 2">{{item.place}}</div>
        <div class="tableText" style="flex: 2">{{item.resolveTime}}</div>
        <div class="tableText" style="flex: 2">{{item.resolvePlace}}</div>
        <div class="tableText" style="flex: 1">{{item.school}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'selectDropedCourses',
    data(){
      return {
        lessonInfo: this.$store.state.lessonInfo
      }
    }
}
</script>

<style scoped>
#selectdropedcourses{
  border: 2px solid #69b2e6;
  min-height: 80vh;
}
.tableTitle{
  font-weight:bold;
  padding: 5px;
  color: #69b2e6;
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