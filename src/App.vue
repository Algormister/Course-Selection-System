<template>
  <router-view></router-view>
</template>

<script>
import store from './store/index'
//定期清除登录信息
setInterval(()=>{
  window.sessionStorage.clear()
  console.log('缓存被清除');
  store.commit('updateShowAlert', true)
}, 1000 * 1800)
export default {
  name: 'App'
}
</script>

<style>
</style>
