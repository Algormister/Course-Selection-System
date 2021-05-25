<template>
  <div id="courseAdd">
    <div class="tableTitle">学期选择</div>
    <select name="term" id="" style="margin-bottom: 5px">
      <option value="" selected></option>
      <option :value="item.termName" v-for="(item, index) in termInfo" :key="index">{{ item.termName }}</option>
    </select>
    <div class="tableTitle">课程查询</div>
    <div class="coursesInfo">
      <span>课程号：</span><input type="text" v-model="courseId" />
      <span>课程名称：</span><input type="text" v-model="courseName" />
    </div>
    <div class="tInfo">
      <span>教师号：</span><input type="text" v-model="tId" />
      <span>教师名称：</span><input type="text" v-model="tName" />
    </div>
    <div class="otherInfo">
      <span>校区：</span>
      <select name="campuses" id="" @change="campusesChange" class="campuses">
        <option value="" selected></option>
        <option v-for="(item, index) in campuses" :value="item" :key="index">
          {{ item }}
        </option>
      </select>
      <span>学院：</span>
      <select name="departments" id="" @change="departmentsChange" class="departments">
        <option value="" selected></option>
        <option v-for="(item, index) in departments" :value="item.value" :key="index">{{ item.name }}</option>
      </select>
      <span>学分：</span>
      <input type="text" v-model="credit" style="width: 30px" />
    </div>
    <el-button type="primary" class="btn" @click="select">添加</el-button>
  </div>
</template>

<script>
export default {
    name: 'courseAdd'
}
</script>

<style scoped>

</style>