<template>
  <div id="fuzzyquery">
    <div class="coursesInfo">
      <span>课程号：</span><input type="text" v-model="courseId"/> 
      <span>课程名称：</span><input type="text" v-model="courseName"/>
    </div>
    <div class="tInfo">
      <span>教师号：</span><input type="text" v-model="tId"/> 
      <span>教师名称：</span><input type="text" v-model="tName"/>
    </div>
    <div class="otherInfo">
      <span>校区：</span>
      <select name="campuses" id="" v-model="curCampus" class="campuses">
          <option value="" selected></option>
          <option v-for="(item,index) in campuses" :value="item" :key="index">{{item}}</option>
      </select>
      <span>学院：</span>
      <select name="departments" id="" v-model="curDepartment" class="departments">
          <option value="" selected></option>
          <option v-for="(item,index) in departments" :value="item.name" :key="index">{{item.name}}</option>
      </select>
      <span>学分：</span><input type="text" v-model="credit" style="width:30px;"/>
    </div>
    <el-button type="primary" class="btn" @click="select">查询</el-button>
    <div class="list" v-show="isShowList">
        <div class="tableTitle" style="padding: 5px;">查询结果</div>
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
                <div class="tableHead" style="flex: 2">答疑时间</div>
                <div class="tableHead" style="flex: 2">答疑地点</div>
                <div class="tableHead" style="flex: 1">校区</div>
            </div>
            <div class="tableRow" v-for="(item, index) in list.slice(curPage*8,curPage * 8 + 8)" :key="index" :class="{'active': listChecked.indexOf(item.lessonId) > -1}">
                <div class="tableText" style="flex: 1;"><input type="checkbox" name="list" style="margin-right: 0;cursor: pointer;" v-model="listChecked" :value="index"></div>
                <div class="tableText" style="flex: 3">{{item.courseId}}</div>
                <div class="tableText" style="flex: 4">{{item.name}}</div>
                <div class="tableText" style="flex: 1">{{item.credit}}</div>
                <div class="tableText" style="flex: 2">{{item.teacherId}}</div>
                <div class="tableText" style="flex: 2">{{item.teacherName}}</div>
                <div class="tableText" style="flex: 5">{{courseTime(item.courseTimes)}}</div>
                <div class="tableText" style="flex: 2">{{item.sksj}}</div>
                <div class="tableText" style="flex: 2">{{item.contains}}</div>
                <div class="tableText" style="flex: 2">{{item.realcurrentContain}}</div>
                <div class="tableText" style="flex: 2">{{item.dysj}}</div>
                <div class="tableText" style="flex: 2">{{item.dydd}}</div>
                <div class="tableText" style="flex: 1">{{item.campus}}</div>
            </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="8"
          :total="total"
          @update:current-page="pagechange"
          @prev-click="preclick"
          @next-click="nextclick"
          style="text-align: center;padding: 10px 0 0 0;">
        </el-pagination>
        <el-button type="primary" class="btn" @click="submit" style="margin-left:1100px;">选课</el-button>
    </div>
    
  </div>
</template>

<script>
import {fuzzyQuery, quickChoose} from '../../network/student/student'
import {showCourseTime} from '../../util/showCourseTime'
export default {
    name: "FuzzyQuery",
    data(){
        return {
            courseId: '',
            courseName: '',
            tId: '',
            tName: '',
            curCampus: '',
            curDepartment: '',
            credit: '',
            isShowList: false,
            curPage: 0,
            total: 0,   //axios
            listChecked: [],
            list: [],
            campuses: ['延长','宝山','嘉定'],
            departments: [{value: '01010000', name: '理学院'},{value: '01020000', name: '文学院'},{value: '01030000', name: '外国语学院'}
            ,{value: '01060000', name: '法学院'},{value: '01070000', name: '通信与信息工程学院'},{value: '01080000', name: '计算机工程与科学学院'}
            ,{value: '01090000', name: '机电工程与自动化学院'},{value: '01090005', name: '工程训练中心'},{value: '01100000', name: '材料科学与工程学院'}
            ,{value: '01110000', name: '环境与化学工程学院'},{value: '01120000', name: '生命科学学院'},{value: '01130000', name: '上海美术学院'}
            ,{value: '01140000', name: '上海电影学院'},{value: '01150000', name: '悉尼工商学院'},{value: '01160000', name: '社会科学学部（筹）'}
            ,{value: '01180000', name: '土木工程系'},{value: '01190000', name: '体育学院'},{value: '01200000', name: '继续教育学院'}
            ,{value: '01210000', name: '国际教育学院'},{value: '01230000', name: '巴士汽车学院'},{value: '01240000', name: '房地产学院'}
            ,{value: '01250000', name: '中欧工程技术学院'},{value: '01270000', name: '数码艺术学院'},{value: '01280000', name: '钱伟长学院'}
            ,{value: '01290000', name: '管理学院'},{value: '01290006', name: 'MBA教育管理中心'},{value: '01310000', name: '社区学院'}
            ,{value: '01320000', name: '图书情报档案系'},{value: '01330000', name: '经济学院'},{value: '01340000', name: '公共管理系'}
            ,{value: '01350000', name: '社会发展研究院'},{value: '01360000', name: '科技发展研究院'},{value: '01370000', name: '社会学院'}
            ,{value: '01380000', name: '音乐学院'},{value: '01390000', name: '温哥华电影学院'},{value: '01400000', name: '新闻传播学院'}
            ,{value: '01420000', name: '马克思主义学院'},{value: '01430000', name: '力学与工程科学学院'},{value: '01440000', name: '微电子学院'}
            ,{value: '02020000', name: '纪律检查委员会（监察处）'},{value: '02030000', name: '组织部'},{value: '02040000', name: '宣传部'}
            ,{value: '02050000', name: '统战部'},{value: '02060000', name: '工会妇委'},{value: '02070000', name: '团委'}
            ,{value: '02100000', name: '直属单位党委'},{value: '02110000', name: '机关党委'},{value: '03010000', name: '党政办公室'}
            ,{value: '03030000', name: '人事处'},{value: '03040000', name: '教务处'},{value: '03050000', name: '研究生院'}
            ,{value: '03060000', name: '学生工作办公室（武装部）'},{value: '03060005', name: '艺术中心'},{value: '03060007', name: '心理辅导中心'}
            ,{value: '03070000', name: '创新管理部'},{value: '03080000', name: '财务处'},{value: '03090000', name: '国际事务处'}
            ,{value: '03100000', name: '审计处'},{value: '03110000', name: '招生与毕业生就业工作办公室'},{value: '03120000', name: '实验设备处'}
            ,{value: '03130000', name: '保卫处'},{value: '03140000', name: '离退休党委（离退休工作处）'},{value: '03150000', name: '基建处'}
            ,{value: '03160000', name: '教育质量考察与评估办公室'},{value: '03170000', name: '信息化工作办公室'},{value: '03180000', name: '房地产管理处'}
            ,{value: '03190000', name: '发展规划处'},{value: '03200000', name: '人文社会科学处'},{value: '03210000', name: '对外联络处'}
            ,{value: '03220000', name: '延长校区规划调整建设指挥部'},{value: '04070000', name: '纳米科学与技术研究中心'},{value: '04150000', name: '材料基因组工程研究院'}
            ,{value: '04160000', name: '上海研究院'},{value: '04180000', name: '高等研究院'},{value: '05010000', name: '图书馆'}
            ,{value: '05030000', name: '计算中心'},{value: '05040000', name: '出版社'},{value: '05050000', name: '档案馆'}
            ,{value: '05080000', name: '期刊社'},{value: '06010000', name: '后勤集团'},{value: '06010002', name: '校医院'}
            ,{value: '06020000', name: '乐乎楼集团'},{value: '07010000', name: '资产经营有限公司'},{value: '08040000', name: '经济管理中心'}
            ,{value: '08060000', name: '人才服务中心'},{value: '08080000', name: '现代物流研究中心'},{value: '08140000', name: '博物馆（筹）'}
            ,{value: '08990000', name: '其他人员'}]
        }
    },
    methods:{
        select(){
            ////
            let info = {}
            if(this.courseId != '') info.courseId = this.courseId;
            if(this.tId != '') info.teacherId = this.tId;
            info.term = this.$store.state.term.term;
            if(this.courseName != '') info.name = this.courseName;
            if(this.curDepartment != '') info.school = this.curDepartment;
            if(this.credit != '') info.credit = this.credit;
            if(this.curCampus != '') info.campus = this.curCampus;
            if(this.tName != '') info.teacherName = this.tName;
            fuzzyQuery(info).then(res =>{
              this.list = res.o;
              this.total = res.o.length;
              console.log(res);
            })
            this.isShowList = true;
            console.log(this.listChecked);
        },
        submit(){
          //
          for (let i = 0; i < this.listChecked.length; i++){
            let info = {
              courseId: this.list[this.listChecked[i]].courseId,
              teacherId: this.list[this.listChecked[i]].teacherId,
              term: this.$store.state.term.term,
              studentId: this.$store.state.userid
            }
            console.log(info);
            quickChoose(info).then(res =>{
              console.log(res);
              alert(res.msg);
              if(res.msg == '选课成功'){
                this.$store.commit('addLessonInfo', res.o);
                this.listChecked = [];
                this.$emit('addCourse');
              }
            })
          }
        },
        courseTime(time){
          return showCourseTime(time);
        },
        pagechange(page){
          this.curPage = page - 1;
        },
        preclick(){
          this.curPage--;
        },
        nextclick(){
          this.curPage++;
        }
    }
};
</script>

<style scoped>
#fuzzyquery {
  border:2px solid #ccc;
  border-bottom: 0;
  position: relative;
  padding: 0 10px 10px 10px;
  font-size: 14px;
}
.coursesInfo,.tInfo,.otherInfo{
    margin-top: 15px;
}
.btn{
    margin-top: 10px;
    margin-left: 440px;
    margin-bottom: 5px;
    width: 80px;
    height: 30px;
    min-height: 0;
    line-height: 0.4;
}
span{
    display: inline-block;
    width: 70px;
    text-align: center;
}
input{
    margin-right: 10px;
}
.campuses{
    width: 60px;
}
.departments{
    width: 210px;
}
.list{
    border: 2px solid #ccc;
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
.active{
  background-color: #69b2e6;
}
</style>