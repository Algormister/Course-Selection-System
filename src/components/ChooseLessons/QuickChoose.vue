<template>
  <div id="quickchoose">
    <div class="tableContainer">
      <div class="tableRow" v-for="index of 3" :key="index">
        <div class="left">
            <div class="tableText">
                课程号：<input type="text" :value="lessonInfo[(index - 1) * 2].c" @input="lessonidInput($event,index)">
            </div>
            <div class="tableText" style="margin-left: 10px;">
                教师号：<input style="width: 100px;" type="text" @input="tidInput($event,index)" :value="lessonInfo[(index - 1) * 2].t">
            </div>
        </div>
        <div class="right">
            <div class="tableText">
                课程号：<input type="text" :value="lessonInfo[(index - 1) * 2 + 1].c" @input="lessonidInputR($event,index)">
            </div>
            <div class="tableText" style="margin-left: 10px;">
                教师号：<input style="width: 100px;" type="text" :value="lessonInfo[(index - 1) * 2 + 1].t" @input="tidInputR($event,index)">
            </div>
        </div>
      </div>
    </div>
    <el-button type="primary" class="btn" @click="submit">选课</el-button>
  </div>
</template>

<script>
import {quickChoose} from '../../network/student/student'
export default {
  name: "QuickChoose",
  data(){
      return {
          lessonInfo:[{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''}]
      }
  },
  methods:{
      lessonidInput(e, index){
          this.lessonInfo[(index - 1) * 2].c = e.currentTarget.value;
      },
      tidInput(e,index){
          this.lessonInfo[(index - 1) * 2].t = e.currentTarget.value;
      },
      lessonidInputR(e, index){
          this.lessonInfo[(index - 1) * 2 + 1].c = e.currentTarget.value;
      },
      tidInputR(e,index){
          this.lessonInfo[(index - 1) * 2 + 1].t = e.currentTarget.value;
      },
      submit(){
        const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255 , 255, 0.7)'
        });
        console.log(this.lessonInfo);
        for (let i = 0; i < this.lessonInfo.length && this.lessonInfo[i].c != '' && this.lessonInfo[i].t != ''; i++){
            let info = {
                courseId: this.lessonInfo[i].c,
                teacherId: this.lessonInfo[i].t,
                term: this.$store.state.term.term,
                studentId: this.$store.state.userid
            }
            quickChoose(info).then(res =>{
                alert(res.msg);
                if(res.msg == '选课成功'){
                    this.$store.commit('addLessonInfo', {course: res.o, overallScore: -1});
                    this.$emit('addCourse');
                }
                this.lessonInfo = [{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''},{c:'',t:''}];
                console.log(res);
            })
        }
        loading.close();
      }
  }
};
</script>

<style scoped>
#quickchoose{
    border:2px solid #ccc;
    border-bottom: 0;
    height: 147px;
    position: relative;
    padding: 10px 10px 0 10px;
}
.tableRow{
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
}
.left,.right{
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.tableText{
  padding: 2px 0;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
}
.btn{
    position: absolute;
    right: 19%;
    width: 80px;
    height: 30px;
    min-height: 0;
    line-height: 0.4;
}
</style>