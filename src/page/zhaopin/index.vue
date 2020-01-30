<template>
  <div>
	 <section class='up'>
		 
	 </section>
	<section class='content'>
	 </section>
  </div>
</template>
<script>

    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
			
        }
      },
      mounted(){
		this.initBanner();
      },

      methods:{
		  // 初始化banner图
		  initBanner(){
			  for(let i=1; i<=5;i++ ){
				  this.bannerArr.push({
					 imgPath: '/static/image/banner/' + i +'.png'
				  })
			  }
		  },
      }
    }
</script>
<style scoped lang='less'>
	 @import "./index.less";
</style>
