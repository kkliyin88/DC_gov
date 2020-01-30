<template>
  <div class='live_wrap'>
	<section class='banner'>
		 <Carousel  loop autoplay :current-index='0' :autoplay-speed='4000'>
			<CarouselItem v-for='(item,index) in bannerArr' :key='index'>
			   <div class='banner-img'>
				   <img :src='item.imgPath' />
			   </div>
			</CarouselItem>
		</Carousel>	
		<div class='banner_msg'>
			<p>LIVING</p>
			<p>生活</p>
		</div>
	</section>
	<section class='live_content' style="background: url(../../../static/image/live/background/1.png) no-repeat 0 650px;">
		<!-- 公司环境 -->
		<div  class='live_content_item bg1' >
			<div class='theme'>
				<p class='title_english'>{{contentArr[0].title_english}}</p>
				<p class='title_chinese'>{{contentArr[0].title_chinese}}</p>
			</div>
			<div class='content'>
				<p v-for= "(item,index) in contentArr[0].content"class='title_english'>{{item}}</p>
			</div>
			<div class='company_img_box'>
				<img  src='/static/image/live/companyEnv/1.png'/>
				<img  src='/static/image/live/companyEnv/2.png'/>
				<img  src='/static/image/live/companyEnv/3.png'/>
			</div>
		</div>
		<!-- 生活环境 -->
		<div  class='live_content_item'>
			<div class='theme'>
				<p class='title_english'>{{contentArr[1].title_english}}</p>
				<p class='title_chinese'>{{contentArr[1].title_chinese}}</p>
			</div>
			<div class='content'>
				<p v-for= "(item,index) in contentArr[1].content"class='title_english'>{{item}}</p>
			</div>
			<div class='live_img_box'>
				<div class='mainImg'>
					<img  src='/static/image/live/liveEnv/1.png'/>
				</div>
				<div class='img_line2'>
					<img  src='/static/image/live/liveEnv/2.png'/>
					<img style="margin-left: 10px;" src='/static/image/live/liveEnv/3.png'/>
				</div>
				<div class='img_line3'>
					<img  src='/static/image/live/liveEnv/4.png'/>
					<img style="margin-left: 10px;" src='/static/image/live/liveEnv/5.png'/>
					<img style="margin-left: 10px;" src='/static/image/live/liveEnv/6.png'/>
				</div>
			</div>
		</div>
		
		<!-- 周边环境 -->
		<div  class='live_content_item' style="background: url(../../../static/image/live/background/2.png) no-repeat">
			<div class='theme'>
				<p class='title_english'>{{contentArr[2].title_english}}</p>
				<p class='title_chinese'>{{contentArr[2].title_chinese}}</p>
			</div>
			<div class='content'>
				<p v-for= "(item,index) in contentArr[2].content"class='title_english'>{{item}}</p>
			</div>
			<div class='around_img_box'>
				<Carousel  loop autoplay :current-index='0' :autoplay-speed='4000'>
					<CarouselItem v-for='(item,index) in envBannerArr' :key='index'>
					   <div class='banner-img'>
						   <img :src='item.imgPath' />
					   </div>
					</CarouselItem>
				</Carousel>	
			</div>
		</div>
		
		<!-- 团建活动 -->
		<div  class='live_content_item'>
			<div class='theme'>
				<p class='title_english'>{{contentArr[3].title_english}}</p>
				<p class='title_chinese'>{{contentArr[3].title_chinese}}</p>
			</div>
			<div class='content'>
				<p v-for= "(item,index) in contentArr[3].content" class='title_english'>{{item}}</p>
			</div>
			<div class='activity_img_box'>
				<img  src='/static/image/live/activity/1.png'/>
				<img  src='/static/image/live/activity/2.png'/>
			</div>
		</div>
		
	 </section>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'live',
      components:{

      },
      data () {
        return {
			bannerArr:[], //头部轮播图
			contentArr:[], // 页面文案
			envBannerArr:[],// 周边环境轮播图
        }
      },
      mounted(){
		this.initBanner();
		this.initEnvBanner();
		this.getContent();
      },

      methods:{
		  // 初始化banner图
		  initBanner(){
			  for(let i=1; i<=5;i++ ){
				  this.envBannerArr.push({
					 imgPath: '/static/image/live/Environment/' + i +'.png'
				  })
			  }
		  },
		  initEnvBanner(){
			  for(let i=1; i<=5;i++ ){
				  this.bannerArr.push({
					 imgPath: '/static/image/live/banner/' + i +'.png'
				  })
			  }
		  },
		  getContent(){
			  let path='/static/js/live/content.json';
			  get(path).then((res)=>{
				this.contentArr = res.contentArr
			  })
		  }
      }
    }
</script>
<style scoped lang='less'>
	 @import "./index.less";
</style>
