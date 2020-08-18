	
<template>
	<div class="contact_wrap">
		<section class="banner">
			<img :src="require('@/assets/contact/banner.jpg')" />
		</section>
	  <!-- 联系我们 -->
    <section class='box1'>
			<div class='title'>
				<img :src="require('@/assets/contact/contact us.png')" />
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
