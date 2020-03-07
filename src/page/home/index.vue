<template>
    <div class="main_wrap">
		<section class="header">
			<Head> </Head>
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
  import About from "@/page/about";
  import Live from "@/page/live";
   import Zhaopin from "@/page/zhaopin";
    export default {
      name: "Home",
      components:{
         About,Live,Zhaopin,
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
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
		height: 100vh;
	}
	.header{
		width: 100%;
		height: 100px;
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
