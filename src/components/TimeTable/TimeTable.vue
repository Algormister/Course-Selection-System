<template>
  <div class="tableContainer">
      <div class="tableRow">
        <div class="tableText" style="padding:5px;text-align:start;flex: 1;font-size:16px;font-weight:bold;">合计学分: {{credit}}</div> 
      </div>
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
</template>

<script>
export default {
    name: 'TimeTable',
    props:{
        credit: Number,
        lessonTableInfo: Array
    }
}
</script>

<style scoped>
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
