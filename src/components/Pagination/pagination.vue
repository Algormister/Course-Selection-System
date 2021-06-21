<template>
  <div id="pagination" :data-value="curPage">
      <button :disabled="curPage==1" @click="back"><div class="left-arrow"></div></button>
      <div v-if="pageNum<=3" class="button-container" :style="{width:pageNum * 40 +'px'}">
          <button v-for="(item,index) in pageNum" :key="index" :class="{active:curPage==item}" @click="setPage" :value="item">{{item}}</button>
      </div>
      <div v-else-if="curPage==1" class="button-container">
          <button v-for="(item, index) in 3" :key="index" :class="{active:curPage==item}" @click="setPage" :value="item">{{item}}</button>
      </div>
      <div v-else-if="curPage==pageNum" class="button-container">
          <button v-for="(item, index) in 3" :key="index" :class="{active:curPage==pageNum - 3 + item}" @click="setPage" :value="pageNum - 3 + item">{{pageNum - 3 + item}}</button>
      </div>
      <div v-else class="button-container">
          <button v-for="(item, index) in 3" :key="index" :class="{active:curPage==curPage - 2 + item}" @click="setPage" :value="curPage - 2 + item">{{curPage - 2 + item}}</button>
      </div>
      <button :disabled="curPage==pageNum" @click="next"><div class="right-arrow"></div></button>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
    props:{
        pageSize: Number,
        total: Number
    },
    computed:{
        pageNum(){
            return Math.ceil(this.total / this.pageSize);
        }
    },
    data(){
        return {
            curPage: 1
        }
    },
    methods:{
        back(){
            this.$emit('prev-click');
            this.curPage--;
        },
        setPage(e){
            this.$emit('current-page', e.target.value);
            this.curPage = e.target.value;
        },
        next(){
            this.$emit('next-click');
            this.curPage++;
        }
    }
}
</script>

<style scoped>
#pagination{
    width:100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    position: relative;
    height: 32px;
    width: 32px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, .1);
    border: 0;
}
.button-container{
    width: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.active{
    background-color: #409eff;
    color: white;
    font-weight: bold;
}
button:hover{
    background-color: #86bcf1;
    color: white;
    cursor: pointer;
}
button:hover .left-arrow{
   border-left-color: white;
   border-bottom-color: white;
}
button:hover .right-arrow{
   border-top-color: white;
   border-right-color: white;
}
button:disabled:hover{
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, .1);
    color:#1010104d;
}
button:disabled:hover .left-arrow{
    border-left-color: black;
    border-bottom-color: black;
}
button:disabled:hover .right-arrow{
    border-top-color: black;
    border-right-color: black;
}
.left-arrow,.right-arrow{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 5px;
    width: 5px;
}
.left-arrow{
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    transform: translate(-40%, -50%) rotate(45deg);
}
.right-arrow{
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: translate(-60%, -50%) rotate(45deg);
}
</style>