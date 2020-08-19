	
<template>
	<div style="background-color: #FFF;">
		<section class="banner">
			<img :src="require('@/assets/zhaopin/banner.jpg')" />
		</section>
		<section class='box1'>
			<div class='title'>
				<img :src="require('@/assets/zhaopin/hire.png')" />
			</div>
			<div class='content' >
				
				1221
				<!-- <div class="bg">
					<img :src="require('@/assets/zhaopin/dbx1.jpg')" >
				</div> -->
				<ul>
					<li v-for='(item,i) in arr1' :key='i'>
						<div v-if='item.display' class='contain'>
							<div class='title'>
								<div class='img_box'>
									<img :src="item.img">
								</div>
								<div class='text_box'>
									<span> {{ item.title }}</span>
								</div>
							</div>
							<div class='text_box'>
								<span v-for='(text,t) in item.content' :key='t'>
									{{text}}
								</span>
							</div>
							<div class='addr'>
								<p> {{item.addr}}</p>
							</div>
						</div>
						
					</li>
				</ul>
				<ul>
					<li v-for='(item,i) in arr2' :key='i'>
						<div v-if='item.display' class='contain'>
							<div class='title'>
								<div class='img_box'>
									<img :src="item.img">
								</div>
								<div class='text_box'>
									<span> {{ item.title }}</span>
								</div>
							</div>
							<div class='text_box'>
								<span v-for='(text,t) in item.content' :key='t'>
									{{text}}
								</span>
							</div>
							<div class='addr'>
								<p> {{item.addr}}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class='banner2'>
			<img :src="require('@/assets/zhaopin/banner04.png')" />
		</section>
		<!-- 员工福利包 -->
		<section class='box2'>
			<div class='title'>
				<img :src="require('@/assets/zhaopin/benefit.png')" />
			</div>
		</section>
		<section class='box3'> 
			<div class='content'>
				<ul >
					<li>
						<div class='text_box'>
							<span class='num'>1</span>
							<span class='text'>每6个月带薪休假15天</span>
						</div>
						<div class='text_box'>
							<span class='num'>2</span>
							<span class='text'>生日、中秋和过年高额礼金</span>
						</div>
						<div class='text_box'>
							<span class='num'>3</span>
							<span class='text'>每个按时免费发放生活和话费补贴及水果福利袋</span>
						</div>
						<div class='text_box'>
							<span class='num'>4</span>
							<span class='text'>免费享受当地医疗服务</span>
						</div>
						<div class='text_box'>
							<span class='num'>5</span>
							<span class='text'>高级公寓拎包入住</span>
						</div>
					</li>
					<li>
						<div class='img_box img_box2'>
							<img :src="require('@/assets/zhaopin/P1.png')">
						</div>
					</li>
				</ul>
			</div>

		</section>
		<section class='box4'>
			<div class='title'>
				<img :src="require('@/assets/zhaopin/P2.png')" />
			</div>
		</section>
	</div>
</template>
<script>
	
    export default {
      name: "zhaopin",
      data () {
        return {
			arr1:[
				{   
					display:true,
					index:0,
					title:'招聘专员',
					content:['税后工资','8k-30k','工作时间9休4'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb1.png')
				},
				{   
					display:true,
					index:1,
					title:'在线中文客服',
					content:['税后工资','7k-15k','工作时间12休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb2.png')
				},
				{   display:true,
					index:2,
					title:'在线推广专员',
					content:['税后工资','7k-30k','工作时间12休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb3.png')
				},
				{   display:true,
					index:3,
					title:'电话销售',
					content:['税后工资','8k-15k','工作时间10.5休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb4.png'),
				},
				
			],
			arr2:[
				{   
					display:true,
					index:0,
					title:'招聘专员',
					content:['税后工资','8k-13k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb5.png')
				},
				{   
					display:true,
					index:1,
					title:'内账会计',
					content:['税后工资','8k-12k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb6.png')
				},
				{   
					display:true,
					index:2,
					title:'在线推广专员',
					content:['税后工资','8k-17k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb7.png')
				},
				{   
					display:false,
					index:3,
					title:'在线推广专员',
					content:['税后工资','8k-17k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb7.png')
				},
			]
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
