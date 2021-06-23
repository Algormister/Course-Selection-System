<template>
  <div id="tab-bar">
    <el-row>
        <el-col :span="24">
            <!-- for test -->
            <tab-bar-header v-if="status=='student'" title="学生信息" userid="学号：" :status="status"></tab-bar-header>
            <tab-bar-header v-else-if="status=='teacher'" title="老师信息" userid="工号：" :status="status"></tab-bar-header>
            <tab-bar-header v-else title="管理员信息" userid="工号：" :status="status"></tab-bar-header>
            <div style="font-size:12px;height: 37px; background-color:#1A2226; padding: 10px 25px 10px 15px; color:#ccc; line-height:37px;">
                <span ><i class="el-icon-menu"></i><span v-show="$store.state.tabBarStatus">主菜单</span></span>
            </div>
            <el-menu
            default-active="$route.path"
            @open="handleOpen"
            @close="handleClose"
            :default-openeds="openeds"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template #title>
                        <span style="font-size: 14px;color:white;" v-show="$store.state.tabBarStatus">{{title}}</span>
                        <span style="font-size: 14px;color:white;" v-show="!$store.state.tabBarStatus"><i class="el-icon-menu"></i></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(item, i) in path" :key="i" :index="`/home/${item.router}`"><span><ul>
                            <li v-show="$store.state.tabBarStatus">{{item.name}}</li>
                            <img v-show="!$store.state.tabBarStatus" :src="item.img" alt="">
                        </ul></span></el-menu-item>
                        <!-- <el-menu-item index="/home/chooseLessons"><span><ul><li>选课</li></ul></span></el-menu-item>
                        <el-menu-item index="/home/dropCourses"><span><ul><li>退课</li></ul></span></el-menu-item>
                        <el-menu-item index="/home/selectTimeTable"><span><ul><li>课表查询</li></ul></span></el-menu-item>
                        <el-menu-item index="/home/selectDropedCourses"><span><ul><li>删除课程查询</li></ul></span></el-menu-item> -->
                        <!-- <el-menu-item index="/home/selectCourses"><span><ul><li>课程查询</li></ul></span></el-menu-item> -->
                        <!-- <el-menu-item index="/home/selectRank"><span><ul><li>选课排名查询</li></ul></span></el-menu-item> -->
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import TabBarHeader from './TabBarHeader'
export default {
    name: "TabBar",
    components:{
        TabBarHeader
    },
    props:{
        path: Array,
        title: String,
        status: String
    },
    data(){
        return {
            openeds: ['1']
        }
    },
    methods: {
        handleOpen(key){
            this.openeds.push(key.toString())
            // console.log(this.openeds);
        },
        handleClose(){
            this.openeds.splice(this.openeds.length - 1, 1)
            // console.log(this.openeds);
        }
    }
};
</script>

<style>
.el-menu span{
    font-size: 14px;
}
.el-menu-item-group{
    background-color: #2c3b41;
}
.el-menu-item-group__title{
    display: none;
}
.el-menu-item{
    padding-left: 0 !important;
    font-size: 14px;
}
ul{
    list-style-type: circle;
    margin: 0;
}
ul li img{
    height: 24px;
    width: auto;
    margin-left: -20px;
}
</style>