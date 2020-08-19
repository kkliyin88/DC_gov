	
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
				<li></li>
				<li>
					<img :src="require('@/assets/contact/p2.png')" />
				</li>
			</ul>
			<ul>
				<li>
					<img :src="require('@/assets/contact/P3.png')" />
				</li>
				<li>
					<img :src="require('@/assets/contact/P4.png')" />
				</li>
			</ul>
		</div>
      <!-- 招聘负责人 -->
    <!-- <div class='leftdbx1'>
       <p>招聘负责人</p>
       <img :src="require('@/assets/contact/dbx1.png')" />
       <img :src="require('@/assets/contact/icon.png')" />
       <span class='rightP2'>
          <img :src="require('@/assets/contact/P2.png')" />
       </span> 
     </div>

     <div class='leftP3'>
        <img :src="require('@/assets/contact/P3.png')" />
     </div> -->

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
