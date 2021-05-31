<template>
  <div id="selectStudent">
    <div class="tableTitle">课程号:{{$route.path.split('/').slice(-1).toString()}} 课程名:{{$route.query.courseName}}</div>
    <div class="tableTitle">学生信息</div>
    <div class="tableContainer">
      <div class="tableRow">
          <div class="tableHead" style="flex: 1">序号</div>
          <div class="tableHead" style="flex: 3">学号</div>
          <div class="tableHead" style="flex: 3">姓名</div>
          <div class="tableHead" style="flex: 1">性别</div>
          <div class="tableHead" style="flex: 3">联系方式</div>
          <div class="tableHead" style="flex: 2">平时成绩</div>
          <div class="tableHead" style="flex: 2">期末成绩</div>
          <div class="tableHead" style="flex: 2">绩点</div>
      </div>
      <div class="tableRow" v-for="(item, index) in stuInfo" :key="index">
          <div class="tableText" style="flex: 1">{{index + 1}}</div>
          <div class="tableText" style="flex: 3">{{item.studentId}}</div>
          <div class="tableText" style="flex: 3">{{item.name}}</div>
          <div class="tableText" style="flex: 1">{{item.gender}}</div>
          <div class="tableText" style="flex: 3">{{item.phone}}</div>
          <div class="tableText" style="flex: 2">{{item.usualScore == -1 ? '': item.usualScore}}</div>
          <div class="tableText" style="flex: 2">{{item.testScore == -1 ? '': item.testScore}}</div>
          <div class="tableText" style="flex: 2">{{item.overallScore == -1 ? '': showGpa(item.overallScore)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getStuInfo} from '../../network/teacher/teacher'
import {gpa} from '../../util/gpa'
export default {
    name: 'selectStudent',
    created(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255 , 255, 0.7)'
      });
      let info ={
        courseId: this.$route.path.split('/').slice(-1).toString(),
        teacherId: this.$store.state.userid,
        term: this.$store.state.term.term
      }
      getStuInfo(info).then(res =>{
        loading.close();
        if (res.msg == '查询成功'){
          this.stuInfo = res.o;
          console.log(res);
        }
      })
    },
    data(){
      return {
        stuInfo:[]
      }
    },
    methods:{
      showGpa(score){
        return gpa(score);
      }
    }
}
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