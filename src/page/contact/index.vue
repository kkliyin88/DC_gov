	
<template>
	<div class="contact_wrap">
		<section class="banner">
			<img :src="require('@/assets/contact/banner.jpg')" />
		</section>
	  <!-- 联系我们 -->
    <section class='box1'>
		<div class='title'>
			<img :src="require('@/assets/contact/contact us.png')" />
            <img :src="require('@/assets/contact/p1.png')"/>
		</div>
		<div class='content'>
			<ul>
				<li class='text_box'>
					<div class='line'>
					<img :src="require('@/assets/contact/icon_1.png')"/>
					<img :src="require('@/assets/contact/jiantou.png')" />
					</div>
				</li>
				<li >
					<div class="contact">
						<img :src="require('@/assets/contact/p2.png')" />
						
					</div>
					
				</li>
			</ul>

			<ul>
				<li>
					<div>
						<img :src="require('@/assets/contact/P3.png')" />
					</div>
					
				</li>
		
				<li class="right">
					<div>
						<img :src="require('@/assets/contact/P4.png')" />
						<span class="weixin">微信</span><span class='qq'>QQ</span>
					</div>
					
				</li>
			</ul>
			</div>
	</section>
	<section class='box2'>
		 <div class='title'>
			 <img :src="require('@/assets/contact/message.png')" />
		 </div>
	</section>
	<section class="box3">
		 <div class="content_1">
			<span><h1 >致我们亲爱的职员们</h1>
			<span class="wenzi_1">
				<p class='sh_1'>首先，不管在哪里，什么时候，公司由衷地感谢来自各国的职员，谢谢你们7年来的选择与相信，用心付出，</p>
				<p>在各个岗位默默创造佳绩，为公司发展锦上添花。没有你们日复一日的辛勤汗水和不懈努力，就有公司今天</p>
				<p>的繁荣壮大。在此，再次感谢以前的，现在的，及未来的，我的职员们。</P>	 
			</span>
			<span class="wenzi_2"> 
				<p class='sh_1'>回顾往昔，公司已由当初几十人团队发展到现在800多人的大集团，重要的是，它还在成长和发展。未来，我</p>
				<p>们的机会与平台必定更多更大，挑战与困难也不小，但是，我们已做好准备，将以更加坚定的步伐和更加开放</p>
				<p>的姿态迎接一切。因此，我希望我们每一个人可以继续迎难而上，披荆斩棘，积极争取每一次成长机会，实现</p>
				<p>物质精神双丰收。同时，也真诚地欢迎全球更多有志之人加入我们，为公司发展添砖加瓦，让自己年轻的人生</p>
				<p>充满更多可能性。</p>
			</span>
			<span class="wenzi_3">
				<p class='sh_1'>展望未来，鹏程万里，望我们继续携手并肩，再创辉煌！</p>
			</span>
			
		</span>
		</div>
		<div class="content_2">
			<img :src="require('@/assets/contact/P5.png')" />
	 	</div>
	</section>
	
 </div>

</template>
<script>
    export default {
      name: "contact",
      data () {
        return {
			
        }
      },
      mounted(){
      },
      methods:{
		 
      }
    }
</script>
<style scoped lang="less">
	 @import "./index.less";
</style>
