<template>
    <home-alert v-if="showalert" message="请重新登录!" :func="alertconfirm"></home-alert>
    <el-container>
        <el-aside width="260px" style="min-height:100vh;">
            <tab-bar></tab-bar>
        </el-aside>
        <el-container>
            <el-header height="60px" style="background-color:#3c8dbc">
                <home-header :id="id" :term="term"></home-header>
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
            showalert: false
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
}
</script>

<style>
.el-aside{
    background-color: #1A2226;
}
</style>