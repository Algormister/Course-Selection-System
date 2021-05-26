<template>
  <div id="chooseterm">
        <h1 style="color: darkblue">选课系统</h1>
        <h2 style="font-weight: 400">点击选择选课学期</h2>
        <h2 class="term" v-for="(item,index) in termInfo" :key="index" @click="termclick(index)">{{item.name}}</h2>
  </div>
</template>

<script>
export default {
    name: 'chooseterm',
    data(){
        return {
            termInfo: this.$store.state.termInfo
        }
    },
    methods:{
        termclick(index){
            this.$store.commit('updateTerm', this.termInfo[index])
            // console.log(this.$store.state.term);
            this.$router.replace('/home')
        }
    }
}
</script>

<style>
#chooseterm{
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
#chooseterm .term{
    font-weight: 400;
    font-size: 1.4em;
    display: block;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin: 0;
    cursor: pointer;
}
#chooseterm .term:hover{
    background-color: #69b2e6;
    color:white;
}
</style>