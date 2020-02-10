<template>
	<div class="live_wrap">
		<section class="banner">
			<Carousel loop autoplay :current-index="0" :autoplay-speed="4000">
				<CarouselItem v-for="(item, index) in bannerArr" :key="index">
					<div class="banner-img"><img :src="item.imgPath" /></div>
				</CarouselItem>
			</Carousel>
			<div class="banner_msg">
				<p>LIVING</p>
				<p>生活</p>
			</div>
		</section>
		<section class="live_content" style="background: url(/static/image/live/background/1.png) no-repeat 0 650px;">
			<!-- 公司环境 -->
			<div class="live_content_item" v-if="contentArr.length > 0">
				<div class="theme">
					<p class="title_english">{{ contentArr[0].title_english }}</p>
					<p class="title_chinese">{{ contentArr[0].title_chinese }}</p>
				</div>

				<div class="content">
					<p v-for="(item, index) in contentArr[0].content" class="title_english">{{ item }}</p>
				</div>
				<div class="company_img_box">
					<div align="center"><img src="/static/image/live/companyEnv/1.png" /></div>
					<div align="center" style="margin-left: 20px;"><img src="/static/image/live/companyEnv/2.png" /></div>
					<div align="center" style="margin-left: 20px;"><img src="/static/image/live/companyEnv/3.png" /></div>
				</div>
			</div>
			<!-- 住宿环境 -->
			<div class="live_content_item" v-if="contentArr.length > 0">
				<div class="theme">
					<p class="title_english">{{ contentArr[1].title_english }}</p>
					<p class="title_chinese">{{ contentArr[1].title_chinese }}</p>
				</div>
				<div class="content">
					<p v-for="(item, index) in contentArr[1].content" class="title_english">{{ item }}</p>
				</div>
				<div class="live_img_box">
					<div class="living_img_box">
						<!-- 第一行 -->
						<img src="/static/image/live/liveEnv/1.png" />
					</div>
					<div class="living_img_box">
						<!-- 第二行 -->
						<div><img src="/static/image/live/liveEnv/2.png" /></div>
						<div><img style="margin-left: 10px;" src="/static/image/live/liveEnv/3.png" /></div>
					</div>
					<div class="living_img_box">
						<!-- 第三行 -->
						<div><img src="/static/image/live/liveEnv/4.png" /></div>
						<div><img style="margin-left: 10px;" src="/static/image/live/liveEnv/5.png" /></div>
						<div><img style="margin-left: 10px;" src="/static/image/live/liveEnv/6.png" /></div>
					</div>
				</div>
			</div>

			<!-- 消遣娱乐 -->
			<div class="live_content_item" v-if="contentArr.length > 0">
				<div class="theme">
					<p class="title_english">{{ contentArr[2].title_english }}</p>
					<p class="title_chinese">{{ contentArr[2].title_chinese }}</p>
				</div>
				<div class="content">
					<p>{{ contentArr[2].content[0] }}</p>
				</div>
				<div class="activity_img_box">
					<div><img src="/static/image/live/activity/1.png" /></div>
				</div>
				<div style="background: url(/static/image/live/background/2.png);">
					<div class="content" style="padding-top: 150px;padding-bottom: 120px;">
						<p>{{ contentArr[2].content[0] }}</p>
					</div>
					<div class='happy_banner' style="padding-bottom: 80px;">
						<Carousel loop :current-index="0" :autoplay-speed="4000">
							<CarouselItem v-for="(item, index) in activityBannerArr" :key="index">
								<div><img :src="item.imgPath" /></div>
							</CarouselItem>
						</Carousel>
					</div>
				</div>
			</div>

			<!-- FOOD -->
			<div class="live_content_item" v-if="contentArr.length > 0">
				<div class="theme">
					<p class="title_english">{{ contentArr[3].title_english }}</p>
					<p class="title_chinese">{{ contentArr[3].title_chinese }}</p>
				</div>
				<div class="content">
					<p v-for="(item, index) in contentArr[3].content" class="title_english">{{ item }}</p>
				</div>
				<div class="food_img_box">
					<ul class='food_ul' ref="list" > 
						<li  v-for="(item, index) in FoodArr" :key="index"><img :src="item.imgPath" /></li>
						<li  v-for="(item, index) in FoodArr" :key="index"><img :src="item.imgPath" /></li>
					</ul>
				</div>
			</div>
			<!-- 社会公益 -->
			<div class="chairty_content_item" v-if="contentArr.length > 0">
				<div class="left">
					<div class="theme">
						<p class="title_english">{{ contentArr[4].title_english }}</p>
						<p class="title_chinese">{{ contentArr[4].title_chinese }}</p>
					</div>
					<div class="content">
						<p v-for="(item, index) in contentArr[4].content">{{ item }}</p>
					</div>
				</div>
				<div class="right"><img src="/static/image/live/charity/1.png" /></div>
			</div>
		</section>
	</div>
</template>
<script>
import { get } from '@/axios/fetch';
export default {
	name: 'live',
	components: {},
	data() {
		return {
			bannerArr: [], //头部轮播图
			activityBannerArr: [], // 周边环境轮播图
			FoodArr: [],
			contentArr: [] // 页面文案
		};
	},
	mounted() {
		// this.setFoodPicMove();

		this.initBanner();
		this.initActivityBanner();
		this.initFood();
		this.getContent();
	},

	methods: {
		setFoodPicMove() {
			window.setTimeout(() => {
				// this.$refs.list.scrollLeft  = this.$refs.list.scrollLeft+1+'px';
				console.log('scrollLeft', this.$refs.list.scrollLeft);
			}, 1000);
		},
		initActivityBanner() {
			// 初始化消遣娱乐banner图
			this.activityBannerArr = [];
			for (let i = 1; i <= 5; i++) {
				this.activityBannerArr.push({
					imgPath: '/static/image/live/activity/banner/' + i + '.png'
				});
			}
		},
		initFood() {
			this.FoodArr = [];
			for (let i = 1; i <= 10; i++) {
				this.FoodArr.push({
					imgPath: '/static/image/live/food/' + i + '.png'
				});
			}
			
		},
		initBanner() {
			//头部的banner
			this.bannerArr = [];
			for (let i = 1; i <= 5; i++) {
				this.bannerArr.push({
					imgPath: '/static/image/live/banner/' + i + '.png'
				});
			}
		},
		getContent() {
			let path = '/static/js/live/content.json';
			get(path).then(res => {
				this.contentArr = res.contentArr;
			});
		}
	}
};
</script>
<style scoped lang="less">
@import './index.less';
</style>
