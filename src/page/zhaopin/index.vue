<template>
	<section class='part1'>
		<div class='img_box'>
			<img :src='mainImgPath' />
			<div class='img_content'>
				<p>HIRE</p>
				<p>招聘</p>
			</div>
		</div>
		<div class='content_box'>
			<div class='title'>
				<p>HIRE</p>
				<p> <span class='zhaopin_chinese'>社会招聘</span></p>
			</div>
			<div class='content'>
				<div class='zhaopinxinxi'>
					<ul> 
						<li v-for="(item,index) in partOneContent">
							<span class='zhiwei'>{{item.name}} \</span>
							<span class='zhiweiDesc'>{{item.value}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</section>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'zhaopin',
      data () {
        return {
			mainImgPath:'/static/image/zhaopin/1.png',
			partOneContent:[],
        }
      },
      mounted(){
		  this.getPageData();
      },
      methods:{
		 getPageData(){
			 let path='/static/js/zhaopin/content.json';
			 get(path).then((res)=>{
			 	this.partOneContent = res.partOneContent;
				
			 })
		 }
      }
    }
</script>
<style scoped lang='less'>
	 @import "./index.less";
</style>
