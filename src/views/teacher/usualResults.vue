<template>
  <div id="usualResults">
    <div class="tableTitle">平时成绩录入</div>
    <div class="tableTitle">课程选择</div>
    <select name="course" id="" @change="courseChange">
      <option value="" selected></option>
      <option :value="item.lessonId" v-for="(item,index) in lessonInfo" :key="index">{{item.lessonName}}</option>
    </select>
    <div class="tableContainer" v-if="dataSuccess">
      <div class="tableRow">
          <div class="tableHead" style="flex: 1">序号</div>
          <div class="tableHead" style="flex: 3">学号</div>
          <div class="tableHead" style="flex: 3">姓名</div>
          <div class="tableHead" style="flex: 1">性别</div>
          <div class="tableHead" style="flex: 3">联系方式</div>
          <div class="tableHead" style="flex: 2">平时成绩</div>
      </div>
      <div class="tableRow" v-for="(item, index) in stuInfo" :key="index">
          <div class="tableText" style="flex: 1">{{index + 1}}</div>
          <div class="tableText" style="flex: 3">{{item.id}}</div>
          <div class="tableText" style="flex: 3">{{item.name}}</div>
          <div class="tableText" style="flex: 1">{{item.gender}}</div>
          <div class="tableText" style="flex: 3">{{item.tel}}</div>
          <input type="text" class="tableText" style="flex: 2" placeholder="请录入平时成绩" :value="item.usualResult" @blur="usualResultBlur($event, index)">
      </div>
    </div>
    <el-button type="primary" class="btn" v-if="dataSuccess" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
    name: 'usualResults',
    data(){
      return {
        lessonInfo:this.$store.state.teachingInfo,
        curLessonId: '',
        stuInfo: [],
        submitArray: [],      //submit
        dataSuccess: false   //学生数据
      }
    },
    methods:{
      courseChange(e){
        this.curLessonId = e.target.value;
        console.log(e.target.value);
        this.dataSuccess = false;
        if(e.target.value != ''){
          //axios stuInfo
          this.stuInfo =  [{id: '18120158', name: 'lt', gender: '男', tel: '15821225698'},
                    {id: '00000001', name: 'zs', gender: '女',tel: '110', usualResult: '99'}
          ];
          for (let i = 0; i < this.stuInfo.length; i++){
            if (!this.stuInfo[i].usualResult) {
              this.stuInfo[i].usualResult = '';
            }
          }
          this.dataSuccess = true;
        }
      },
      usualResultBlur(e, index){
        if (e.target.value != ''){
          this.stuInfo[index].usualResult = e.target.value;
          this.submitArray.push(this.stuInfo[index]);
          this.submitArray = Array.from(new Set(this.submitArray));
        }
      },
      submit(){
        //axios
        console.log(this.stuInfo);
        console.log(this.submitArray);
      }
    }
}
</script>

<style scoped>
#usualResults{
  border: 2px solid #69b2e6;
  padding: 10px;
  width: 90%;
}
.tableTitle{
  font-weight:bold;
  color: #69b2e6;
  padding: 5px;
}
.tableContainer{
  margin-top: 20px;
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
input{
  outline: none;
  border: 0;
}
.btn{
  height: 28px;
  min-height: 0;
  line-height: 0;
  margin-top: 20px;
  margin-left: 1050px;
}
</style>