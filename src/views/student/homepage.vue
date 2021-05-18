<template>
  <div>shouye
    {{lessonInfo[0]}}
    {{lessonInfo[1]}}
  </div>
</template>

<script>
import {getLessonInfo} from '../../network/home'
export default {
  name:'Home',
  data(){
    return {
      lessonInfo: []
    }
  },
  created(){
    getLessonInfo().then(res =>{
      this.lessonInfo = res
    })
  }
}
</script>

<style>

</style>