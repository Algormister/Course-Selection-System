<template>
    <home-alert v-if="showalert" message="请重新登录!" :func="alertconfirm" @alertConfirm="alertConfirm"></home-alert>
    <div :class="{mask: isMasked}" @click="cancelMask" v-if="!showalert"></div>
    <el-container v-if="!showalert">
        <el-aside width="230px" style="min-height:100vh;">
            <tab-bar v-if="status=='student'" :path="pathStu" title="学生选课" :status="status"></tab-bar>
            <tab-bar v-else-if="status=='teacher'" :path="pathT" title="课程管理"></tab-bar>
            <tab-bar v-else-if="status=='admin'" title="数据管理" :path="pathA"></tab-bar>
        </el-aside>
        <el-container>
            <el-header height="60px" style="background-color:#3c8dbc">
                <admin-home-header v-if="status=='admin'" :id="id" @homeheaderclick="changeMask" :isMasked="isMasked"></admin-home-header>
                <home-header v-else :id="id" :term="term" @homeheaderclick="changeMask" :isMasked="isMasked"></home-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import TabBar from '../components/TabBar/TabBar'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAlert from '../components/HomeAlert/HomeAlert'
import AdminHomeHeader from '../components/HomeHeader/AdminHomeHeader'
export default {
    name: 'Home',
    created(){
        console.log(this.$store.state.userid);
        if(this.$store.state.userid != null) this.showalert = false;
        else this.showalert = true;
    },
    data(){
        return {
            term : this.$store.state.term,
            id: this.$store.state.userid,
            status: this.$store.state.status,
            alertconfirm: function(){
                this.$store.commit('updateShowAlert', false);
                this.$router.replace('/');
            },
            showalert: this.$store.state.showAlert,
            isMasked: false,
            pathStu: [{router: 'chooseLessons', name: '选课'},
                    {router: 'dropCourses', name: '退课'},
                    {router: 'selectTimeTable', name: '课表查询'},
                    {router: 'selectDropedCourses', name: '删除课程查询'},
                    {router: 'gradeQuery', name: '成绩查询'},
                    {router: 'passedCourses', name: '学分完成情况'}
            ],
            pathT:[{router: 'selectTeachingCourses', name: '课程查询'},
                {router: 'usualResults', name: '平时成绩录入'},
                {router: 'finalExam', name: '期末成绩录入'}
            ],
            pathA:[{router: 'termManage', name: '学期管理'},
                {router: 'courseManage', name: '课程管理'},
                ]
        }
    },
    components: {
        TabBar,
        HomeHeader,
        HomeAlert,
        AdminHomeHeader
    },
    methods:{
        changeMask(data){
            console.log(data);
            this.isMasked = true;
        },
        cancelMask(){
            this.isMasked = false;
        },
        alertConfirm(){
            this.showalert = false;
            console.log(this.showalert);
        }
    }
}
</script>

<style>
.el-aside{
    background-color: #1A2226;
}
.mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 10;
}
</style>