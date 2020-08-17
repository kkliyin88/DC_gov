<template>
  <div id="app">
	
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import Nav from '@/common/nav/index.vue'
export default {
  name: 'App'
}
</script>
