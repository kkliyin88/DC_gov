<template>
  <div class='live_wrap'>
	<section class='banner'>
		 <Carousel  loop autoplay>
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
	<section class='live_content'>
		<!-- 公司环境 -->
		<div  class='live_content_item'>
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
			<!-- <div class='live_img_box'>
				
				<img  src='/static/image/live/liveEnv/1.png'/>
				<img  src='/static/image/live/liveEnv/2.png'/>
				<img  src='/static/image/live/liveEnv/3.png'/>
			</div> -->
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
			bannerArr:[],
			contentArr:[],
			
        }
      },
      mounted(){
		this.initBanner();
		this.getContent();
      },

      methods:{
		  // 初始化banner图
		  initBanner(){
			  for(let i=1; i<=5;i++ ){
				  this.bannerArr.push({
					 imgPath: '/static/image/live/banner/' + i +'.png'
				  })
			  }
		  },
		  getContent(){
			  let path='/static/js/live/content.json';
			  console.log(111)
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
