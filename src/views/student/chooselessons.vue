<template>
  <div id="chooselessons">
    <div class="btnContainer">
      <el-button @click="quickchoose" size="small" :class="{'active': chooseWay == 1}">快速选课</el-button>
      <el-button @click="fuzzyquery" size="small" :class="{'active': chooseWay == 2}">模糊查询</el-button>
    </div>
    <quick-choose v-if="chooseWay == 1"></quick-choose>
    <fuzzy-query v-if="chooseWay == 2"></fuzzy-query>
    <div class="Container">
      <div class="tableContainer" style="flex: 2">
        <div class="tableRow" style="border-top: 2px solid #ccc;">
          <div class="tableTitle">{{ term.name }} 课程表</div>
        </div>
        <div class="tableRow">
          <div class="tableHead" style="flex: 1">序号</div>
          <div class="tableHead" style="flex: 3">课程号</div>
          <div class="tableHead" style="flex: 3">课程名称</div>
          <div class="tableHead" style="flex: 1">学分</div>
          <div class="tableHead" style="flex: 3">教师姓名</div>
          <div class="tableHead" style="flex: 1">校区</div>
        </div>
        <div class="tableRow" v-for="(item, index) in lessonInfo" :key="index">
          <div class="tableText" style="flex: 1">
            {{ String.fromCodePoint(index + 65) }}
          </div>
          <div class="tableText" style="flex: 3">{{ item.lessonId }}</div>
          <div class="tableText" style="flex: 3">{{ item.lessonName }}</div>
          <div class="tableText" style="flex: 1">{{ item.credit }}</div>
          <div class="tableText" style="flex: 3">{{ item.tName }}</div>
          <div class="tableText" style="flex: 1">{{ item.school }}</div>
        </div>
      </div>
      <div class="tableContainer" style="flex: 3">
        <div class="tableRow" style="border-top: 2px solid #ccc;">
          <div class="tableTitle">合计学分: {{ credit }}</div>
        </div>
        <div class="tableRow">
          <div class="tableHead" style="flex: 1">#</div>
          <div class="tableHead" style="flex: 3">上课时间</div>
          <div class="tableHead" style="flex: 2">一</div>
          <div class="tableHead" style="flex: 2">二</div>
          <div class="tableHead" style="flex: 2">三</div>
          <div class="tableHead" style="flex: 2">四</div>
          <div class="tableHead" style="flex: 2">五</div>
          <div class="tableHead" style="flex: 2">六</div>
          <div class="tableHead" style="flex: 2">日</div>
        </div>
        <div
          class="tableRow"
          v-for="(item, index) in lessonTableInfo"
          :key="index"
        >
          <div class="tableText" style="flex: 1">{{ item[0] }}</div>
          <div class="tableText" style="flex: 3">{{ item[1] }}</div>
          <div class="tableText" style="flex: 2">{{ item[2] }}</div>
          <div class="tableText" style="flex: 2">{{ item[3] }}</div>
          <div class="tableText" style="flex: 2">{{ item[4] }}</div>
          <div class="tableText" style="flex: 2">{{ item[5] }}</div>
          <div class="tableText" style="flex: 2">{{ item[6] }}</div>
          <div class="tableText" style="flex: 2">{{ item[7] }}</div>
          <div class="tableText" style="flex: 2">{{ item[8] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuickChoose from '../../components/ChooseLessons/QuickChoose'
import FuzzyQuery from '../../components/ChooseLessons/FuzzyQuery'
export default {
  name: "ChooseLesssons",
  data() {
    return {
      term: this.$store.state.term,
      credit: this.$store.getters.credit,
      lessonInfo: this.$store.state.lessonInfo,
      lessonTableInfo: this.$store.getters.lessonTableInfo,
      chooseWay: 1
    };
  },
  components:{
    QuickChoose,
    FuzzyQuery
  },
  methods:{
    quickchoose(){
      this.chooseWay = 1;
    },
    fuzzyquery(){
      this.chooseWay = 2;
    }
  }
};
</script>

<style scoped>
.Container{
  display: flex;
}
.btnContainer{
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.active{
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.tableTitle {
  font-weight: bold;
  color: #69b2e6;
  padding: 5px;
}
.tableContainer {
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
}
.tableRow {
  display: flex;
  align-items: center;
}
.tableHead,
.tableText {
  padding: 1px 0;
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  text-align: center;
  height: 24px;
  line-height: 24px;
}
.tableHead {
  font-weight: bold;
  font-size: 16px;
}
.tableText {
  font-size: 14px;
}
.tableContainer:nth-of-type(1) .tableRow:nth-last-of-type(1){
  border-bottom: 2px solid #ccc;
}
.tableContainer:nth-of-type(1) .tableHead:nth-last-of-type(1){
  border-right: 0;
}
.tableContainer:nth-of-type(1) .tableText:nth-last-of-type(1){
  border-right: 0;
}
</style>