<template>
  <router-view></router-view>
</template>

<script>
//定期清除登录信息
setTimeout(()=>{
  sessionStorage.clear()
  console.log('缓存被清除');
}, 1000 * 1800)
export default {
  name: 'App'
}
</script>

<style>
</style>
