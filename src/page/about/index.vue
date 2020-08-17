<template>
  <div>
	 <section >
		<div class="img_box">
			<img :src="require('@/assets/about/banner.png')" />
			<div class='img_content'>
				<p >全球知名娱乐平台</p>
				<p >成功从这里起航</p>
				<p>WORD FAMOUS ENTERTAINMENT PLATFORM</p>
				<P><span>JOIN US >></span></P>
			</div>
		</div>
	 </section>
	<section class="content_about_box">
		<!-- 关于我们 -->
		<div class='box1'>
			<div class='title'>
				<img :src="require('@/assets/about/aboutus.png')" />
			</div>
			<div class='content'>
				<ul>
					<li>
						<img :src="require('@/assets/about/p1.png')" />
					</li>
					<li >
						<div>
							鼎彩娱乐科技有限公司（Vertex Digital Enter-<br />
							tainment Technologies Inc）成立于2013年6<br />
							月,是在获得菲律宾政府颁发的 Pagcor（Pilip-<br />
							pines Amusement and Gaming Corporation）<br />
							博彩牌照后，进行合法经营的一家大型网络游戏<br />
							公司，目前在职人员来自东南亚各个国家，如中<br />
							国内地、台湾、越南，泰国、马来西亚、菲律宾<br />
							等，两家公司总人数已达800多，而且仍处于大<br />
							量扩招发展中。<br />
							博彩行业不仅在澳门风生水起，更是遍布各个东<br />
							南亚国家，如马来西亚、新加坡、泰国及菲律<br />
							宾,在菲律宾是和其旅游业并驾齐驱的一大重要<br />
							产业，更是菲律宾财政收入的主要来源。特别是<br />
							近几年在菲律宾政府的大力支持下，菲律宾未来<br />
							有望成为东南亚地区最大博彩产业国家。
						</div>
						
					</li>	
					<li>
						<img :src="require('@/assets/about/p2.png')" />
					</li>
				</ul>
			</div>
		</div>
		
		<!-- 经营理念 -->
		<div class='box2_title' >
			<img :src="require('@/assets/about/company1.png')" />
		</div>
		<!-- <div class='box2'>
			<div class='content_img'>
				<img :src="require('@/assets/about/company.png')" />
				<div class='content_text'>
					<div class='text_box1'>
						<ul>
							<li >
								<div class='title'>经营理念</div>
								<div  class='text'>
									公司所有经营项目皆遵从菲律宾政府相关条例，秉<br />
									持公平、公正、公开的诚信原则，通过向客户提供<br />
									时下最先进、最优质的技术与服务，打造出可满足<br />
									客户娱乐需求，并深具公信力、具优良口碑的在线<br />
									娱乐平台。
								</div>
							</li>
							<li>
								<div class='title'>经营理念</div>
								<div  class='text'>
									公司所有经营项目皆遵从菲律宾政府相关条例，秉<br />
									持公平、公正、公开的诚信原则，通过向客户提供<br />
									时下最先进、最优质的技术与服务，打造出可满足<br />
									客户娱乐需求，并深具公信力、具优良口碑的在线<br />
									娱乐平台。
								</div>
							</li>
						</ul>
					</div>
					<div class='text_box2'>
						<div class='inner_box'>
							<div >
								<div class='title'>经营理念</div>
								<div class='text'>
									打造全球最具知名度的娱乐平台，进而成为产业标<br />
									杆、领头企业。
								</div>
								<div class='title'>企业精神</div>
								<div  class='text'>
									打造全球最具知名度的娱乐平台，进而成为产业标<br />
									杆、领头企业。
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		
		<div class='box3'>
			<div class='box_inner'>
				<ul class='ul1'>
					<li>
						<div class='img_box img_box1'>
							<img :src="require('@/assets/about/p3.png')">
						</div>
					</li>
					<li>
						<div class='text_box text_box1'>
							<div class='title'>经营理念</div>
							<div  class='text'>
								公司所有经营项目皆遵从菲律宾政府相关条例，秉<br />
								持公平、公正、公开的诚信原则，通过向客户提供<br />
								时下最先进、最优质的技术与服务，打造出可满足<br />
								客户娱乐需求，并深具公信力、具优良口碑的在线<br />
								娱乐平台。
							</div>
						</div>
					</li>
				</ul>
				<ul class='ul2'>
					<li>
						<div class='text_box text_box2'>
							<div class='title'>经营理念</div>
							<div class='text'>
								打造全球最具知名度的娱乐平台，进而成为产业标<br />
								杆、领头企业。
							</div>
							<div class='title'>企业精神</div>
							<div  class='text'>
								打造全球最具知名度的娱乐平台，进而成为产业标<br />
								杆、领头企业。
							</div>
						</div>
					</li>
					<li>
						<div class='img_box img_box2'>
							<img :src="require('@/assets/about/p4.png')">
						</div>
					</li>
				</ul>
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
		  setTimeout(function(){
			  console.log('test')
		  },100)
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
