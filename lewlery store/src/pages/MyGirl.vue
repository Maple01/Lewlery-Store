<style scoped lang="stylus">
	.top
		width 100%
		height 375px
		background url(../assets/10k=.jpg)
		overflow hidden
		.above
			width 1200px
			height 300px
			margin-left 19%
			margin 60px auto
			.logo
				width 155px
				height 155px
				display block
			p
				font-size 28px
				font-weight 400
				float left
				margin-top 20px
				
			.guan
				float left
				width 110px
				height 30px
				background rgb(188,188,188)
				text-align center
				line-height @height 
				font-size 14px
				margin-top 30px
				margin-left 15px
			.btom
				width 320px
				height 60px
				text-align left
				line-height @height
				img
					vertical-align middle
				img:nth-of-type(2)
					margin-left 10px
					
				span
					vertical-align middle	
	.content1
		margin 20px auto
		width 1200px
		padding 10px
		
		.title
			width 1180px
			height 30px
			border-bottom 2px solid #000
		.img
			width 230px
			height 300px
			margin-bottom 8px
			margin-right 8px
			float left
		.img:nth-of-type(3),.img:nth-of-type(5)
			width 465px
		.img:nth-of-type(4),.img:nth-of-type(8)
			margin-right 0px
	.content2
		.img2
			width 280px
			height 280px
			margin-bottom 8px
			margin-right 20px
			float left
		.img2:nth-of-type(4),.img2:nth-of-type(8)
			margin-right 0px	
	.content3
		width 1180px
		height 370px
		margin 60px auto
		
		.fashion
			font-size 24px
			font-weight 700
		.all
			width 380px
			height 280px
			float left
			
			margin-right 13px
			margin-top 30px
			.title
				font-size 20px
			.left
				width 180px
				height 162px
				margin-top 30px
			.content
				width 165px
				height 170px
				font-size 14px
				display inline-block
				margin-left 20px
				vertical-align super
				line-height 20px
			.bottom
				width 380px
				height 30px
				margin-top 20px
				
				span
					font-size 14px
				span:nth-of-type(2)
					margin-left 7px
				.love
					width 16px
					height 16px
					margin-left 10px
				.scor
					color rgb(134,134,134)
	.content4
		.tit
			font-size 24px
			font-weight 700
			display inline-block
		.cent
			margin-top 35px
			.local
				vertical-align middle
			.erwei
				display inline-block
				width 180px
				height 250px
				text-align center
				margin-left 25px
				vertical-align middle
				img
					width @width
					height @width							
				
				
		
</style>
<template>
	<div class="mygirl">
		<div class="top">
			<div class="above">
				<img src="../assets/girl2.png" class="logo">
				<p>QueenJewelry</p><div class="guan">+ &nbsp;&nbsp;关注</div>
				<div class="btom">
					<img src="../assets/loveb1.png">
					<span>999</span>
					<img src="../assets/loveb2.png">
					<span>999</span>
				</div>
			</div>
		</div>
		<div class="content1">
			<p class="title">人气单品</p>
			<a class="img" v-for="item of list" :style="{'background':'url('+ item.src + ')'}" :href="item.href"></a>
		</div>
		<div class="fix"></div>
		<div class="content1 content2">
			<p class="title">我的品牌</p>
			<a class="img2" v-for="item of list2" :style="{'background':'url('+ item.src + ')'}" :href="item.href"></a>
		</div>
		<div class="fix"></div>
		<div class="content3">
			<div class="head">
				<span class="fashion">我的时尚</span>
			</div>
			<div class="all">
				<p class="title">2015春夏流行色：魅惑黑色</p>
				<img src="../assets/b1.jpg" class="left">
				<span class="content">黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</span>
				<div class="bottom">
					<span>Queen</span>
					<span>2015-06-02</span>
					<img src="../assets/love2.png" class="love">
					<span class="scor">999</span>
					<img src="../assets/love3.png" class="love">
					<span class="scor">99</span>
					<img src="../assets/love4.png" class="love">
					<span class="scor">99</span>
				</div>
			</div>
			<div class="all">
				<p class="title">2015春夏流行色：魅惑黑色</p>
				<img src="../assets/b2.jpg" class="left">
				<span class="content">黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</span>
				<div class="bottom">
					<span>Queen</span>
					<span>2015-06-02</span>
					<img src="../assets/love2.png" class="love">
					<span class="scor">999</span>
					<img src="../assets/love3.png" class="love">
					<span class="scor">99</span>
					<img src="../assets/love4.png" class="love">
					<span class="scor">99</span>
				</div>
			</div>
			<div class="all">
				<p class="title">2015春夏流行色：魅惑黑色</p>
				<img src="../assets/b3.jpg" class="left">
				<span class="content">黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</span>
				<div class="bottom">
					<span>Queen</span>
					<span>2015-06-02</span>
					<img src="../assets/love2.png" class="love">
					<span class="scor">999</span>
					<img src="../assets/love3.png" class="love">
					<span class="scor">99</span>
					<img src="../assets/love4.png" class="love">
					<span class="scor">99</span>
				</div>
			</div>
		</div>
		<div class=" content1 content4">
			<p class="tit">我的社区店</p> <span>杭州市西湖区湖畔店</span>
			<div class="cent">
				<img src="../assets/local.png" class="local">
				<div class="erwei">
					<img src="../assets/2Q==.jpg">
					<p>我的微信号</p>
					<span>扫一扫 新品首发早知道</span>
				</div>
				<div class="erwei">
					<img src="../assets/2Q==.jpg">
					<p>我的微信号</p>
					<span>扫一扫 新品首发早知道</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list : [
				{
					src : require("../assets/mygirl1.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl2.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl3.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl4.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl5.png"),
					href : "/"
				},{
					src : require("../assets/mygirl6.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl7.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl8.png"),
					href : "/"
				}],
				list2 : [
				{
					src : require("../assets/mygirl21.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl22.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl23.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl25.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl26.png"),
					href : "/"
				},{
					src : require("../assets/mygirl27.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl28.png"),
					href : "/"
				},
				{
					src : require("../assets/mygirl29.png"),
					href : "/"
				}]
			}
		}
	}
</script>