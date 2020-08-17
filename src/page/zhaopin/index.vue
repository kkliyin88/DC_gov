	
<template>
	<div>
		<section class="banner">
			<img :src="require('@/assets/zhaopin/banner.jpg')" />
		</section>
		<section class='box1'>
			<div class='title'>
				<img :src="require('@/assets/zhaopin/hire.png')" />
			</div>
			<div class='content' >
				<ul>
					<li v-for='(item,i) in arr1' :key='i'>
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
					</li>
				</ul>
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
				{   index:0,
					title:'招聘专员',
					content:['税后工资','8k-30k','工作时间9休4'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb1.png')
				},
				{   index:1,
					title:'在线中文客服',
					content:['税后工资','7k-15k','工作时间12休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb2.png')
				},
				{   index:2,
					title:'在线推广专员',
					content:['税后工资','7k-30k','工作时间12休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb3.png')
				},
				{   index:3,
					title:'电话销售',
					content:['税后工资','8k-15k','工作时间10.5休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb4.png'),
				},
				{   index:0,
					title:'招聘专员',
					content:['税后工资','8k-13k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb5.png')
				},
				{   index:1,
					title:'内账会计',
					content:['税后工资','8k-12k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb6.png')
				},
				{   index:2,
					title:'在线推广专员',
					content:['税后工资','8k-17k','工作时间9休2'],
					addr:'菲律宾首都马尼拉',
					img:require('@/assets/zhaopin/tb7.png')
				},
			],
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
