<template>
  <div>
	 <section >
		<div class="img_box">
			<img :src="imgPath" />
			<div class='img_content'>
				<p v-for ="(item,i) in imageMsg" :key='i'>{{item}}</p>
			</div>
		</div>
	 </section>
	<section class="content_about_box">
		<div class="up">
			<div class="left">
				<div class="title">
					<p></p>
					<p >About us</p>
					<p class="about_chinese">{{aboutus.title}}</p>
				</div>
				<div class="content_msg">
					<p v-for="(item,index) in aboutus.content" :key="index">{{item}}</p>
				</div>
				<div class="title" style="margin-top: 300px;">
					<p>{{jingyinglinian.title}}</p>
				</div>
				<div class="content_msg">
					<p v-for="(item,index) in jingyinglinian.content" :key="index">{{item}}</p>
				</div>
				
				<div class="title" style="margin-top: 50px;">
					<p>{{qiyeyuanjing.title}}</p>
				</div>
				<div class="content_msg">
					<p v-for="(item,index) in qiyeyuanjing.content" :key="index">{{item}}</p>
				</div>
				
				<div class="title" style="margin-top: 50px;">
					<p>{{qiyejingshen.title}}</p>
				</div>
				<div class="content_msg" style="margin-bottom: 100px;" >
					<p v-for="(item,index) in qiyejingshen.content" :key="index">{{item}}</p>
				</div>
				
			</div>
			<div class="right">
				<img :src="license" />
			</div>
		</div>
	 </section>
  </div>
</template>
<script>
	import { get } from "@/axios/fetch";
    export default {
      name: "about",
      data () {
        return {
			imgPath:"/static/image/about/1.png",
			bgImage:"/static/image/about/2.png",
			license:"/static/image/about/3.png",
			imageMsg:[],
			aboutus:{},
			jingyinglinian:{},
			qiyeyuanjing:{},
			qiyejingshen:{},
        }
      },
      mounted(){
		  this.getPageData();
      },
      methods:{
		  getPageData(){
			 let path="/static/js/about/content.json";
			 get(path).then((res)=>{
				 this.imageMsg = res.imageMsg
				this.aboutus = res.aboutus;
				this.jingyinglinian = res.jingyinglinian;
				this.qiyeyuanjing = res.qiyeyuanjing;
				this.qiyejingshen = res.qiyejingshen;
			 })
		  }
      }
    }
</script>
<style scoped lang="less">
	 @import "./index.less";
</style>
