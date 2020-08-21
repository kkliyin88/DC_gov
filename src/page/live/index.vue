<template>
	<div class="live_wrap">
		<section class="banner">
			<img :src="require('@/assets/live/banner.jpg')" />
		</section>
		<!-- 公司环境 -->
		<section class='box1'>
			<div class='title'>
				<img :src="require('@/assets/live/company.png')" />
			</div>
			<div class='content'>
				<ul>
					<li>
						<div>
							<img :src="require('@/assets/live/p1.png')" />
						</div>
					</li>
					<li>
						<div class='text_box'>
							<div class='text'>
								<div >
									公司大楼位于马尼拉趴赛繁<br />
									华区，大型购物中心（含中国超<br />
									市），各国风味餐厅（含各式中<br />
									餐厅）应有尽有。距离亚洲最大<br />
									商城MOA和免税店LUXE步行距<br />
									离仅10分钟左右。办公环境宽<br />
									敞明亮，绿植环绕，并为职员专<br />
									配茶水间和吸烟室，茶水间已配<br />
									置冰箱、微波炉、咖啡机等电器<br />
									设备。<br />
									<br />
								</div>
								
							</div>
							<img :src="require('@/assets/live/p3.png')" />
						</div>
					</li>	
					<li>
						<div>
							<img :src="require('@/assets/live/p2.png')" />
						</div>
					</li>	
					
				</ul>
			</div>
		</section>
		<!-- 住宿环境 -->
		<section class='box2'>
			<div class='title'>
				<img :src="require('@/assets/live/living.png')" />
			</div>
			<div class='content'>
				<div class='left'>
					<img :src="require('@/assets/live/p4.png')" />
				</div>
				<div class='right'>
					<div class='up'>
						<p >
						    高级酒店式公寓，已统一自带生活电器，如空调、热水器、冰箱、微波炉<br />
						    及电磁炉，带独立卫浴和阳台。<br />
						    <br />
						</p>
						<p>
						    健身房及泳池也供公司职员免费使用。
						</p>
					</div>
					<div class='down'>
						<ul>
							<li>
								<img :src="require('@/assets/live/p5.png')" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- 消遣娱乐 -->
		<section class='box3'>
			<ul>
				<li>
					<img :src="require('@/assets/live/p7.png')" />
				</li>
				<li>
					<img :src="require('@/assets/live/activity.png')" />
				</li>
			</ul>
			<ul>
				<li>
					<div class='text'>
						<p  style="text-indent:2em;"> 工作和生活两不误，努力工作，尽情玩耍。不仅可以去</p>
						<p> 亚洲最大商场购物，里面入驻了很多国际名牌和本土品</p>
						<p> 牌，主要是价格比国内实惠。商场内有冬奥会规模的巨型 </p>
						<p>溜冰场、IMAX电影院、电玩中心等。 </p>
						<p style="text-indent:2em;"> 我们知道，马尼拉是一座富有浓厚热带情调的城市，也 </p>
						<p>是东南亚著名的旅游胜地，城内城外可供游览的名胜数不 </p>
						<p> 胜数。近至西班牙王城，塔尔火山，威尼斯水城；远至宿</p>
						<p> 务，长滩岛，巴拉望等。 </p>
					</div>
					
				</li>
				<li>
					<img :src="require('@/assets/live/p6.png')" />
				</li>
			</ul>
			
		</section>
		
		<!-- 美食 -->
		<section class='box4'>
			<div class='left'>
				<div class='up'>
					<div>
						<img :src="require('@/assets/live/food.png')" />
					</div>
					<div>
						<p style="text-indent:2em;">马尼拉是一座历史悠久的城市。它在印度文明，中国文明</p>
						<p>及中亚古文明的基础上，融合西班牙，美国的西洋文明，形</p>
						<p>成中西合璧。因此，在美食上也体现了多元化，除了菲律宾</p>
						<p>当地乡土名菜外，还有日本料理、韩国烤肉、高档牛排、海</p>
						<p>鲜大排档、火锅撸串等。公司食堂每日也为大家精心准备中</p>
						<p>餐自助。</p>
						<br />
					</div>
					
				</div>
				<div class='down'>
					<img :src="require('@/assets/live/p9.png')" />
				</div>
				
			</div>
			<div class='right'>
				<img :src="require('@/assets/live/p8.png')" />
			</div>
		</section>
		
		<!-- 社会公益 -->
		<section class='box5'>
			<div class='left'>
				<img :src="require('@/assets/live/p10.png')" />
			</div>
			<div class='right'>
				<div class='img_box'>
					<img :src="require('@/assets/live/charity.png')" />
				</div>
				<div class='text_box'>
					<span class="wenzi_1"> 
						<p class='sh_1'>公司近几年在砥砺发展的同时，始终没忘作为一家企业</p>
						<p>的社会责任。自2019年伊始，公司先是对菲律宾当地儿童福</p>
						<p>利院进行生活用品和日常药品捐助，接着，圣诞节期间，联</p>
						<p>合“和平使命圣母基金会”给山区的原住民传达爱心。</p>
						<p>2019年末，百年难遇的Taal火山爆发，给当地居民带来了前</p>
						<p>所未有的生存隐患，公司即刻发动全员上下进行爱心捐赠活</p>
						<p>动，鼓励更多的人参与社会公益。同时，不定期对内部贫困</p>
						<p>职员进行生活帮扶。</p>
					</span>	
					<span class="wenzi_1"> 
						<p class='sh_1'>也希望，未来的社会公益路上，有更多的你、我、他同</p>
						<p>行，把这条路走宽，走远！</p>
					</span>	
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'live',
	components: {},
	data() {
		return {
			
		};
	},
	mounted() {
		
	},

	methods: {

	}
};
</script>
<style scoped lang="less">
@import './index.less';
</style>
