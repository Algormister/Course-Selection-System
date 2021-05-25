<template>
  <div id="termManage">
    <div class="tableTitle">学期管理</div>
    <div class="tableContainer">
      <div class="tableRow">
        <div class="tableHead" style="flex: 2">学期号</div>
        <div class="tableHead" style="flex: 4">学期名称</div>
        <div class="tableHead" style="flex: 2">学期未开始</div>
        <div class="tableHead" style="flex: 2">第一轮选课</div>
        <div class="tableHead" style="flex: 2">第二轮选课</div>
        <div class="tableHead" style="flex: 2">第三轮选课</div>
        <div class="tableHead" style="flex: 2">成绩录入</div>
        <div class="tableHead" style="flex: 2">学期结束</div>
      </div>
      <div class="tableRow" v-for="(item, index) in termInfo" :key="index">
        <div class="tableText" style="flex: 2">{{item.termId}}</div>
        <div class="tableText" style="flex: 4">{{item.termName}}</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="0" :checked="item.status==0" :disabled="item.status!=0" @change="statusChange($event,item)">学期未开始</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="1" :checked="item.status==1" :disabled="item.status!=0&&item.status!=1" @change="statusChange($event,item)">第一轮选课</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="2" :checked="item.status==2" :disabled="item.status!=1&&item.status!=2" @change="statusChange($event,item)">第二轮选课</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="3" :checked="item.status==3" :disabled="item.status!=2&&item.status!=3" @change="statusChange($event,item)">第三轮选课</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="4" :checked="item.status==4" :disabled="item.status!=3&&item.status!=4" @change="statusChange($event,item)">成绩录入</div>
        <div class="tableText" style="flex: 2"><input type="radio" :name="index" :value="5" :checked="item.status==5" @change="statusChange($event,item)">学期结束</div>
      </div>
    </div>
    <el-button @click="addTerm" size="small" type="primary">添加学期</el-button>
    <div v-if="add!=undefined">
        <div class="tips">
            <h2>tips</h2>
            <p>学期号由学期的起始年份和学期组成，一共五位数
                <br>
                学期1、2、3、4分别代表春季学期、夏季学期、秋季学期和冬季学期
                <br>
                例：20201表示2020-2021春季学期
            </p>
        </div>
        <div>
            学期号：<input type="text" v-model="add">
            <el-button v-if="add!=undefined" @click="submitTerm" size="small" type="primary" style="margin-left: 10px;">提交</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'termManage',
    data(){
        return {
            //取学期未结束的学期信息
            termInfo: this.$store.state.termInfo,
            add: undefined
        }
    },
    methods:{
        statusChange(e, item){
          //test
            console.log(e.target.value);
            console.log(item.termName);
        },
        addTerm(){
            this.add = '';
        },
        submitTerm(){
            function getTerm(t){
                if (t == '1') return '春';
                else if(t == '2') return '夏';
                else if(t == '3') return '秋';
                else if(t == '4') return '冬';
            }
            let year = Number(this.add.substring(0, 4));
            let term = this.add.slice(-1);
            this.termInfo.push({termId: this.add, termName: `${year}-${year+1}学年${getTerm(term)}季学期`, status: 0});
            this.add = undefined;
        }
    }
}
</script>

<style scoped>
#termManage{
    border: 2px solid #69b2e6;
    padding: 5px;
}
.tableTitle{
  font-weight:bold;
  color: #69b2e6;
  padding: 5px;
}
.tableContainer{
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
  margin-bottom: 5px;
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
.tips{
    display: inline-block;
    background: #909399;
    color: #fff;
    padding: 5px 20px;
    margin: 10px 0;
    line-height: 1.5;
    font-weight: bold;
    border-radius: 20px;
}
h2{
    margin: 5px 0;
}
</style>