<template>
  <div id="courseManage">
    <div class="tableTitle">课程管理</div>
    <div class="btnContainer">
      <el-button @click="funcChange(1)" size="small" :class="{'active': chooseWay == 1}">修改课程</el-button>
      <el-button @click="funcChange(2)" size="small" :class="{'active': chooseWay == 2}">添加课程</el-button>
      <el-button @click="funcChange(3)" size="small" :class="{'active': chooseWay == 3}">删除课程</el-button>
    </div>
    <course-modify v-if="chooseWay == 1"></course-modify>
    <course-add v-if="chooseWay == 2"></course-add>
    <course-delete v-if="chooseWay == 3"></course-delete>
  </div>
</template>

<script>
import CourseModify from '../../components/CourseManage/courseModify'
import CourseAdd from '../../components/CourseManage/courseAdd'
import CourseDelete from '../../components/CourseManage/courseDelete'
export default {
  name: "courseManage",
  data() {
    return {
      chooseWay: 1,
    };
  },
  methods:{
    funcChange(v){
      this.chooseWay = v;
    }
  },
  components:{
    CourseModify,
    CourseAdd,
    CourseDelete
  }
};
</script>

<style scoped>
#courseManage {
  border: 2px solid #69b2e6;
  padding: 5px;
  font-size: 14px;
}
.tableTitle {
  font-weight: bold;
  color: #69b2e6;
  padding: 5px;
}
.btnContainer{
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.active{
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>