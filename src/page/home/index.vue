<template>
    <div class="main_wrap">
		<section class='header'>
			<Header> </Header>
		</section>
	  <section class='content'>
		<!--  <About></About>
		  <Live></Live> -->
		  <Zhaopin></Zhaopin>
		<!-- <transition name="fade" mode="out-in" appear>
		  <keep-alive >
			<div >
				<router-view></router-view>
			</div>
		 </keep-alive>
		</transition> -->
	  </section>
	  <!-- <section class='footer' >
		 <Footer></Footer> 
	  </section> -->
    </div>
</template>
<script>
  import Header from '@/components/header/index';
  import About from '@/page/about/index';
  import Live from '@/page/live/index';
  import Zhaopin from '@/page/zhaopin/index';
    export default {
      name: 'Home',
      components:{
        Header,About,Live,Zhaopin
      },
      data () {
        return {
        }
      },
      mounted(){
      },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less='lange' scoped>
	.main_wrap{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
		height: 100vh;
	}
	.header{
		width: 100%;
		height: 150px;
		border: 1px solid green;
	}
   .fade-enter,.fade-leave-to{
	  opacity:  0;/*透明度*/
	  transition: all 2s ease;
	}
	.content{
		/* padding-left: 8%;
		padding-right: 8%; */
		background: #f5f5f5;
		overflow-y: scroll;
		flex: 1;
	}
</style>
