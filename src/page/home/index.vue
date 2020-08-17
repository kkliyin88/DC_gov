<template>
    <div class="main_wrap">
		<section >
			<Nav></Nav>
		</section>
	  <section class="content" ref='content'>
		<transition name="fade" mode="out-in" appear>
		  <keep-alive >
			<div >
				<router-view></router-view>
			</div>
		 </keep-alive>
		</transition>
	  </section>
    </div>
</template>
<script>
  import Nav from "@/common/nav/index.vue";
  import About from "@/page/about";
  import Live from "@/page/live";
  import Zhaopin from "@/page/zhaopin";
  
    export default {
      name: "Home",
      components:{
         Nav,About,Live,Zhaopin,
      },
      data () {
        return {
        }
      },
      mounted(){
      },
	  watch:{
	    $route(to,from){ //切换页面的时候设置滚动条高度为0
		  this.$refs.content.scrollTop = 0;
	    }
	  },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less="lange" scoped>
	.main_wrap{
		min-width: 800px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
		height: 100vh;
	}
	
   .fade-enter,.fade-leave-to{
	  opacity:  0;/*透明度*/
	  transition: all 2s ease;
	}
	.content{
		/* padding-left: 8%;
		padding-right: 8%; */
		overflow-y: scroll;
		flex: 1;
	}
</style>
