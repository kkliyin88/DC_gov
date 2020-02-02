<template>
    <div class="main_wrap">
		<section class="header">
			<Head> </Head>
		</section>
	  <section class="content">
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
  import Head from "@/components/head";
    export default {
      name: "Home",
      components:{
        Head     // About,Live,Zhaopin,Contact
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
