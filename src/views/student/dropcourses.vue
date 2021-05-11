<template>
  <div id="dropcourses">
    tuike
    <div class="tableContainer">
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
  </div>
</template>

<script>
export default {
  name: "dropCourses",
  data() {
    return {
      list: this.$store.state.lessonInfo,
      listChecked: []
    };
  },
};
</script>

<style scoped>
.tableTitle {
  font-weight: bold;
  color: #69b2e6;
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
</style>