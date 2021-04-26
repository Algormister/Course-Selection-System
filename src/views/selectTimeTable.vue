<template>
  <div id="selectTimeTable">
    <div class="tableTitle" style="margin-bottom: 10px">{{term}} 课程表</div>
    <div class="tableContainer" style="margin-bottom: 20px;">
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
      <div class="tableRow" v-for="(item, index) in lesssonInfo" :key="index">
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
    <div class="tableContainer">
      <div class="tableRow">
        <div class="tableHead" style="flex: 1">#</div>
        <div class="tableHead" style="flex: 3">上课时间</div>
        <div class="tableHead" style="flex: 5">一</div>
        <div class="tableHead" style="flex: 5">二</div>
        <div class="tableHead" style="flex: 5">三</div>
        <div class="tableHead" style="flex: 5">四</div>
        <div class="tableHead" style="flex: 5">五</div>
        <div class="tableHead" style="flex: 5">六</div>
        <div class="tableHead" style="flex: 5">日</div>
      </div>
      <div class="tableRow" v-for="(item, index) in lessonTableInfo" :key="index">
        <div class="tableText" style="flex: 1">{{item[0]}}</div>
        <div class="tableText" style="flex: 3">{{item[1]}}</div>
        <div class="tableText" style="flex: 5">{{item[2]}}</div>
        <div class="tableText" style="flex: 5">{{item[3]}}</div>
        <div class="tableText" style="flex: 5">{{item[4]}}</div>
        <div class="tableText" style="flex: 5">{{item[5]}}</div>
        <div class="tableText" style="flex: 5">{{item[6]}}</div>
        <div class="tableText" style="flex: 5">{{item[7]}}</div>
        <div class="tableText" style="flex: 5">{{item[8]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'selectTimeTable',
    data(){
    //for test
    return {
      term: this.$store.state.term,
      lesssonInfo:[{lessonName: '数据结构', lessonId: '01', tName: 'sj', place: 'C101', time:'一1-3, 三1-2',credit: 5, tId: 1001, resolveTime:'五1-2', resolvePlace: 'D101', school: '宝山'},
      {lessonName: '数据库原理', lessonId: '02', tName: 'lwq', place: 'C102', time:'二1-3,四1-2',credit: 4, tId: 1002, resolveTime:'五3-4', resolvePlace: 'D102', school: '延长'}],
      lessonTableInfo: [[1, '8:00 ~ 8:45', 'A', 'B', 'A', 'B', '', '', ''],
                        [2, '8:55 ~ 9:40', 'A', 'B', 'A', 'B', '', '', ''],
                        [3, '10:00 ~ 10:45', 'A', 'B', '', '', '', '', ''],
                        [4, '10:55 ~ 11:40', '', '', '', '', '', '', ''],
                        [5, '12:10 ~ 12:55', '', '', '', '', '', '', ''],
                        [6, '13:05 ~ 13:50', '', '', '', '', '', '', ''],
                        [7, '14:10 ~ 14:55', '', '', '', '', '', '', ''],
                        [8, '15:05 ~ 15:50', '', '', '', '', '', '', ''],
                        [9, '16:00 ~ 16:45', '', '', '', '', '', '', ''],
                        [10, '16:55 ~ 17:40', '', '', '', '', '', '', ''],
                        [11, '18:00 ~ 18:45', '', '', '', '', '', '', ''],
                        [12, '18:55 ~ 19:40', '', '', '', '', '', '', ''],
                        [13, '19:50 ~ 20:35', '', '', '', '', '', '', '']]
    }
  },
  methods:{
    
  }
}
</script>

<style>
#selectTimeTable{
  width: 95%;
  margin: 10px auto;
  border: 2px solid #69b2e6;
  padding: 0;
}
.tableTitle{
  font-weight:bold;
  color: #69b2e6;
}
.tableContainer{
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
}
.tableRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tableHead,.tableText{
  padding: 5px 0;
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  text-align: center;
  height: 24px;
  line-height: 24px;
}
.tableHead{
  font-weight: bold;
}
.tableText{
  font-size: 14px;
}
</style>