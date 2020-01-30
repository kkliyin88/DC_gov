<template>
  <div>
	 <section >
		<div class='img_box'>
			<img :src='imgPath' />
		</div>
	 </section>
	<section class='content_about_box'>
		<div class='up'>
			<div class='left'>
				<div class='title'>
					<p></p>
					<p >About us</p>
					<p class='about_chinese'>关于我们</p>
				</div>
				<div class='content_msg'>
					<p v-for="(item,index) in jianjie" :key='index'>{{item}}</p>
				</div>
				
				<div class='title' style="margin-top: 300px;">
					<p>经营理念</p>
				</div>
				<div class='content_msg'>
					<p>{{jingyinglinian}}</p>
				</div>
				
				<div class='title' style="margin-top: 50px;">
					<p>企业愿景</p>
				</div>
				<div class='content_msg'>
					<p>{{qiyeyuanjing}}</p>
				</div>
				
				<div class='title' style="margin-top: 50px;">
					<p>企业精神</p>
				</div>
				<div class='content_msg' style='margin-bottom: 100px;' >
					<p>{{qiyejingshen}}</p>
				</div>
				
			</div>
			<div class='right'>
				<img :src='license' />
			</div>
		</div>
		
		
	 </section>
  </div>
</template>
<script>

    export default {
      name: 'about',
      data () {
        return {
			imgPath:'/static/image/about/1.png',
			bgImage:'/static/image/about/2.png',
			license:'/static/image/about/3.png',
			jianjie:['鼎彩娱乐科技有限公司（Vertex Digital Entertainment Technologies Inc）成立于 2013 年 6 月，是在获得菲律宾政府颁发的 Pagcor（Philippines Amusement and Gaming Corporation）博彩牌照后，进行合法经营的一家大型网络游戏公司，目前在职人员来自东南亚各个国家，如中国内地、台湾、越南，泰国、马来西亚、菲律宾等，两家公司总人数已达 800 多，而且仍处于大量扩招发展中。',
		'博彩行业不仅在澳门风生水起，更是遍布各个东南亚国家，如马来西亚、新加坡、泰国及菲律宾，在菲律宾是和其旅游业并驾齐驱的一大重要产业，更是菲律宾财政收入的主要来源。特别是近几年在菲律宾政府的大力支持下，菲律宾未来有望成为东南亚地区最大博彩产业国家。'],
			jingyinglinian:'公司所有经营项目皆遵从菲律宾政府相关条例，秉持公平、公正、公开的诚信原则，通过向客户提供时下最先进、最优质的技术与服务，打造出可满足客户娱乐需求，并深具公信力、具优良口碑的在线娱乐平台。',
			qiyeyuanjing:'打造全球最具知名度的娱乐平台，进而成为产业标杆、领头企业。',
			qiyejingshen:'路虽远，行则必至；事虽难，做则必成。',
			
        }
      },
      mounted(){
      },
      methods:{
      }
    }
</script>
<style scoped lang='less'>
	 @import "./index.less";
</style>
