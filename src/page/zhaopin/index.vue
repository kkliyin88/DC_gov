	
<template>
	<div>
		<section class="part1">
			<div class="img_box">
				<img :src="mainImgPath" />
				<div class="img_content">
					<p>HIRE</p>
					<p>招聘</p>
				</div>
			</div>
			<div class="title">
				<img src="/static/image/zhaopin/shehuizhaopin.png" />
			</div>
			<div class="content_box">
				<div class="content">
					<div class="zhaopinxinxi">
						<ul> 
							<li v-for="(item,index) in partOneContent">
								<span class="zhiwei">{{item.name}}\ </span>
								<span class="zhiweiDesc"> {{item.value}}</span>
							</li>
						</ul>
					</div>
					<div class="didian" align="center">
						<div  align="center">
							<img src="/static/image/zhaopin/2.png" />
						</div>
						
						<p>首都马尼拉</p>
					</div>
					<div class="image">
						<img src="/static/image/zhaopin/3.png" />
					</div>
				</div>
			</div>
		</section>
		<section class="part2">
			<div class="left">
				<img src="/static/image/zhaopin/4.png" />
			</div>
			<div class="right">
				<p class="title">薪资结构</p>
				<p>
					<span class="content" v-for="(item,i) in xinzhiArr">{{item}}</span>
				</p>
			</div>
		</section>
		
		<section class="part3">
			<div class="fuli_img" align="center">
				<img src="/static/image/zhaopin/yuangongfuli.png" />
			</div>
			<div class="fuli_content">
				<p v-for="(item,i) in fuliArr" :key="i">{{item}}</p>
			</div>
			<div class="fuli_img2" align="center">
				<div>
					<img src="/static/image/zhaopin/5.png" />
				</div>
			</div>
			<div class="qiuzhi_img" align="center">
				<img src="/static/image/zhaopin/qiuzhiwenda.png" />
			</div>
			<div class="wenda_box" >
				<div  v-for="(item,i) in quesArr" :key="i">
					<div class="title">
						<p>{{item.title}}</p>
					</div>
					<div class="wenda_content">
						<p>{{item.value}}</p>
					</div>
				</div>
			</div>
			<div class="fuli_img2" align="center">
				<div>
					<img src="/static/image/zhaopin/6.png" />
				</div>
			</div>
		</section>
	</div>
	
	
</template>
<script>
	import { get } from "@/axios/fetch";
    export default {
      name: "zhaopin",
      data () {
        return {
			mainImgPath:"/static/image/zhaopin/1.png",
			partOneContent:[],
			xinzhiArr:[], //薪资待遇
			fuliArr:[], //员工福利
			quesArr:[], //问答
        }
      },
      mounted(){
		  this.getPageData();
      },
      methods:{
		 getPageData(){
			 let path="/static/js/zhaopin/content.json";
			 get(path).then((res)=>{
			 	this.partOneContent = res.partOneContent;
				this.fuliArr = res.fuliArr;
				this.quesArr = res.quesArr;
				this.xinzhiArr = res.xinzhiArr;
			 })
		 }
      }
    }
</script>
<style scoped lang="less">
	 @import "./index.less";
</style>
