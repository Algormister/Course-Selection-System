<template>
    <home-alert v-if="showalert" message="请重新登录!" :func="alertconfirm" @alertConfirm="alertConfirm"></home-alert>
    <div :class="{mask: isMasked}" @click="cancelMask" v-if="!showalert"></div>
    <div class="tabBarMask" @click="cancelTabBarMask" v-if="!showalert&&width==230&&screenWidth<1050"></div>
    <el-container v-if="!showalert">
        <el-aside ref="aside" :width="width +'px'" style="min-height:100vh;" :class="[screenWidth < 1050 ? 'ab-aside': '']">
            <tab-bar v-if="status=='student'" :path="pathStu" title="学生选课" :status="status"></tab-bar>
            <tab-bar v-else-if="status=='teacher'" :path="pathT" title="课程管理" :status="status"></tab-bar>
            <tab-bar v-else-if="status=='admin'" title="数据管理" :path="pathA" :status="status"></tab-bar>
        </el-aside>
        <el-container>
            <el-header height="60px" style="background-color:#3c8dbc">
                <admin-home-header v-if="status=='admin'" :id="id" @homeheaderclick="changeMask" :isMasked="isMasked" @showTabBar="showTabBar"></admin-home-header>
                <home-header v-else :id="id" :term="term" @homeheaderclick="changeMask" :isMasked="isMasked" @showTabBar="showTabBar"></home-header>
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
import {debounce} from '../util/debounce'
export default {
    name: 'Home',
    created(){
        console.log(this.$store.state.userid);
        if(this.$store.state.userid != null) this.showalert = false;
        else this.showalert = true;
        this.screenWidth = document.body.clientWidth;
        if(this.screenWidth < 1050){
            this.width = 0;
        }
        else if(this.screenWidth < 1258) {
            if(this.$store.state.tabBarStatus) this.$store.commit('updateTabBarStatus');
            this.width = 65;
        }
        else {
            this.width = 230;
            if(!this.$store.state.tabBarStatus) this.$store.commit('updateTabBarStatus');
        }
    },
    mounted(){
        // this.screenHeight = document.body.clientHeight;
        window.onresize = debounce(() =>{
            this.screenWidth = document.body.clientWidth;
            // this.screenHeight = document.body.clientHeight;
            if(this.screenWidth < 1050){
                this.width = 0;
            }
            else if(this.screenWidth < 1258) {
                if(this.$store.state.tabBarStatus) this.$store.commit('updateTabBarStatus');
                this.width = 65;
            }
            else {
                if(!this.$store.state.tabBarStatus) this.$store.commit('updateTabBarStatus');
                this.width = 230;
            }
            // console.log(this.screenWidth);
            // console.log(this.screenHeight);
        }, 500)
    },
    data(){
        return {
            screenWidth: undefined, 
            width: 230,         //宽度小于1050px，默认不显示侧边栏
            // screenHeight: undefined,
            term : this.$store.state.term,
            id: this.$store.state.userid,
            status: this.$store.state.status,
            alertconfirm: function(){
                this.$store.commit('updateShowAlert', false);
                this.$router.replace('/');
            },
            showalert: this.$store.state.showAlert,
            isMasked: false,
            pathStu: [{router: 'chooseLessons', name: '选课', img: require('../assets/icon/tubiaozhizuomoban.svg')},
                    {router: 'dropCourses', name: '退课', img: require('../assets/icon/tuihuo.svg')},
                    {router: 'selectTimeTable', name: '课表查询', img: require('../assets/icon/kebiao.svg')},
                    // {router: 'selectDropedCourses', name: '删除课程查询'},
                    {router: 'gradeQuery', name: '成绩查询', img: require('../assets/icon/chengji.svg')},
                    {router: 'passedCourses', name: '学分完成情况', img: require('../assets/icon/Icon-xuefen.svg')}
            ],
            pathT:[{router: 'selectTeachingCourses', name: '课程查询', img: require('../assets/icon/kecheng.svg')},
                {router: 'usualResults', name: '平时成绩录入', img: require('../assets/icon/qiandao.svg')},
                {router: 'finalExam', name: '期末成绩录入', img: require('../assets/icon/kaoshi.svg')}
            ],
            pathA:[{router: 'termManage', name: '学期管理', img: require('../assets/icon/icon.svg')},
                {router: 'courseManage', name: '课程管理', img: require('../assets/icon/tubiaozhizuomoban.svg')},
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
        },
        showTabBar(){
            if(this.screenWidth < 1050) {
                this.width = 230;       //屏幕宽度小于1050px时，将侧边栏宽度设置为230px
                if(!this.$store.state.tabBarStatus) this.$store.commit('updateTabBarStatus');  //若宽度为65px且屏幕宽度小于1050px时，将宽度改为230px
            }
            else this.width = this.$store.state.tabBarStatus ? 230 : 65; //屏幕宽度大于等于1050px时，根据tabBarStatus来决定侧边栏的宽度
            console.log(this.width); 
        },
        cancelTabBarMask(){
            this.width = 0;       //该事件只会在屏幕宽度小于1050px且侧边栏宽度为230px时触发，只需将宽度置为0即可
        }
    }
}
</script>

<style>
.el-aside{
    background-color: #1A2226;
    transition: all .5s ease-out;
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
.ab-aside{
    position: absolute;
    z-index: 20;
}
.tabBarMask{
    background-color: rgba(0, 0, 0, .3);
    z-index: 19;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>