<template>
    <home-alert v-if="showalert" message="请重新登录!" :func="alertconfirm"></home-alert>
    <div :class="{mask: isMasked}" @click="cancelMask"></div>
    <el-container>
        <el-aside width="230px" style="min-height:100vh;">
            <tab-bar :path="pathStu"></tab-bar>
        </el-aside>
        <el-container>
            <el-header height="60px" style="background-color:#3c8dbc">
                <home-header :id="id" :term="term" @homeheaderclick="changeMask" :isMasked="isMasked"></home-header>
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
export default {
    name: 'Home',
    data(){
        return {
            term : this.$store.state.term,
            id: this.$store.state.userid,
            alertconfirm: function(){
                this.$router.replace('/')
            },
            showalert: false,
            isMasked: false,
            pathStu: [{router: 'chooseLessons', name: '选课'},
                    {router: 'dropCourses', name: '退课'},
                    {router: 'selectTimeTable', name: '课表查询'},
                    {router: 'selectDropedCourses', name: '删除课程查询'}
            ]
        }
    },
    created(){
        if (this.id == null || this.id == '') this.showalert = !this.showalert 
    },
    components: {
        TabBar,
        HomeHeader,
        HomeAlert
    },
    methods:{
        changeMask(data){
            console.log(data);
            this.isMasked = true;
        },
        cancelMask(){
            this.isMasked = false;
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