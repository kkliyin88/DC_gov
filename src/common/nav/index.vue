<template>
  <div class='nav_wrap'>
	<div class='left'>
		<img src='@/assets/logo.png' />
	</div>
	<div class='middle'></div>
	<div class='right'>
		<ul>
			<li  v-for="(item,i) in list" :key='i' @click="goPage(item)">
			<span :class="i===activeIndex?'activeNav':''">{{item.title}}</span>
			</li>
		</ul>
	</div>
  </div>
</template>
<script>
	import { get } from "@/axios/fetch";
    export default {
      name: "about",
      data () {
        return {
			activeIndex:0,
			list:[
				{
					title:'首页',
					path:'/home',
					index:0
				},
				{
					title:'生活',
					path:'/live',
					index:1
				},
				{
					title:'招聘',
					path:'/zhaopin',
					index:2
				},
				{
					title:'联系方式',
					path:'/contact',
					index:3
				}
			]
        }
      },
      mounted(){
		 
      },
      methods:{
		 goPage(item){
			 this.activeIndex = item.index
			this.$router.push({
			  path: item.path,
			}) 
		 } 
      }
    }
</script>
<style scoped lang="less">
	 .nav_wrap{
		 height: 150px;
		 display: flex;
		 flex-direction: row;
		 justify-content: center;
		 align-items: center;
	 }
	 .middle{
		 width: 150px;
	 }
	 .left , .right{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-around;
		 align-items: center;
		 flex-shrink: 1;
	 }
	 .left{
		 justify-content: flex-end;
		 img{
			 width: 450px;
			 height: 100px;
			 
		 }
	 }
	 .middle{
		 width:150px ;
		 flex-shrink: 2;
	 }
	 .right{
		 ul{
			display: flex;
			flex-direction: row;
			justify-content:center;
			li{
				display: inline-block;
				font-size: 28px;
				margin: 0 25px;
				height: 40px;
				line-height: 60px;
				cursor: pointer;
				.activeNav{
					text-decoration:underline
				}
			}
		 }
	 }
</style>
