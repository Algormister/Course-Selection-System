<template>
  <div id="dropcourses">
    <div class="tableContainer">
      <div class="tableRow">
        <div class="tableTitle">退课</div>
      </div>
      <div class="tableRow">
        <div class="tableHead" style="flex: 1"></div>
        <div class="tableHead" style="flex: 3">课程号</div>
        <div class="tableHead" style="flex: 4">课程名称</div>
        <div class="tableHead" style="flex: 1">学分</div>
        <div class="tableHead" style="flex: 2">教师号</div>
        <div class="tableHead" style="flex: 2">教师姓名</div>
        <div class="tableHead" style="flex: 5">上课时间</div>
        <div class="tableHead" style="flex: 2">上课地点</div>
        <div class="tableHead" style="flex: 2">容量</div>
        <div class="tableHead" style="flex: 2">人数</div>
        <div class="tableHead" style="flex: 2">选课限制</div>
        <div class="tableHead" style="flex: 2">答疑时间</div>
        <div class="tableHead" style="flex: 2">答疑地点</div>
        <div class="tableHead" style="flex: 1">校区</div>
      </div>
      <div class="tableRow" v-for="(item, index) in list" :key="index" :class="{'active': listChecked.indexOf(item.lessonId) > -1}">
        <div class="tableText" style="flex: 1">
          <input
            type="checkbox"
            name="list"
            :value="item.lessonId"
            style="margin-right: 0"
            v-model="listChecked"
          />
        </div>
        <div class="tableText" style="flex: 3">{{ item.lessonId }}</div>
        <div class="tableText" style="flex: 4">{{ item.lessonName }}</div>
        <div class="tableText" style="flex: 1">{{ item.credit }}</div>
        <div class="tableText" style="flex: 2">{{ item.tId }}</div>
        <div class="tableText" style="flex: 2">{{ item.tName }}</div>
        <div class="tableText" style="flex: 5">{{ item.time }}</div>
        <div class="tableText" style="flex: 2">{{ item.place }}</div>
        <div class="tableText" style="flex: 2">{{ item.volume }}</div>
        <div class="tableText" style="flex: 2">{{ item.students }}</div>
        <div class="tableText" style="flex: 2">{{ item.limit }}</div>
        <div class="tableText" style="flex: 2">{{ item.resolveTime }}</div>
        <div class="tableText" style="flex: 2">{{ item.resolvePlace }}</div>
        <div class="tableText" style="flex: 1">{{ item.school }}</div>
      </div>
    </div>
    <el-button type="primary" class="btn" @click="submit">确认</el-button>
    <div class="tableContainer" style="margin: 0; margin-top: 50px;">
      <div class="tableRow">
        <div class="tableText" style="padding:5px;text-align:start;flex: 1;font-size:16px; font-weight:bold;">合计学分: {{credit}}</div> 
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
  </div>
</template>

<script>
export default {
  name: "dropCourses",
  data() {
    return {
      list: this.$store.state.lessonInfo,
      listChecked: [],
      lessonTableInfo: this.$store.state.lessonTableInfo,
      credit: this.$store.getters.credit
    }
  },
  methods:{
    submit(){
      console.log(this.listChecked);
    }
  }
};
</script>

<style scoped>
#dropcourses{
  position: relative;
  border: 2px solid #69b2e6
}
.tableTitle {
  font-weight: bold;
  color: #69b2e6;
  padding: 5px;
}
.tableContainer {
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
  margin-bottom: 10px;
}
.tableRow {
  display: flex;
  align-items: center;
}
.tableHead,
.tableText {
  padding: 2px 0;
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
.active{
  background-color: #69b2e6;
}
.btn{
    position: absolute;
    right: 2%;
    width: 80px;
    height: 30px;
    min-height: 0;
    line-height: 0.4;
}
</style>