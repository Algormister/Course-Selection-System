<template>
  <router-view></router-view>
</template>

<script>
import store from './store/index'
//定期清除登录信息
setTimeout(()=>{
  store.commit('updateUserid', '')
  store.commit('updateTerm', '')
  sessionStorage.clear()
  console.log('缓存被清除');
}, 1000 * 1800)
export default {
  name: 'App'
}
</script>

<style>
</style>
