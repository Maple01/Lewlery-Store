<style scoped lang="stylus">
	.head
		width @width
		height 50px
		line-height @height
		margin-top 30px
		
		span
			font-size 24px
			font-weight 700
		.add
			width 50px
			height 50px
			border-radius 50%
			background rgb(242,242,242)
			text-align center
			line-height @height
			font-size 30px
			font-weight bold
			color rgb(188,188,188)
			
			vertiucal-align middle
			float right
	.part1
		width 1180px
		height 660px
		margin 0px auto		
		.girls
			width 220px
			height 255px
			float left
			margin-right 16px
			margin-top 40px
			text-align center
			display block
			img:nth-of-type(1)
				margin-bottom 10px
			img:nth-of-type(2)
				margin-left 20px
				margin-right 5px				
			span
				font-size 14px
	.part2
		width 1180px
		height 1100px
		margin 0px auto
		.one
			background url(../assets/one.jpg)
			
		.tow
			background url(../assets/tow.jpg)
		.three
			background url(../assets/three.jpg)		
		.all
			width @width
			height 340px
			margin-top 30px
			.introduce
				width 400px
				height 300px
				float right
				margin-right 20px
				margin-top 20px
				background #fff
				.top
					width @width
					height 30px
					text-align center
					line-height @height
					background rgb(107,107,107)
					span
						color #fff
						font-size 12px
				.left
					width 180px	
					height @width
					margin-left 20px
					vertical-align top
					margin-top 40px
					
					
				.right
					width 160px
					height 220px
					display inline-block
					margin-left 35px
					
					margin-top 40px
					
					.spokeman
						font-size 15px
						font-weight bold
					.name
						font-weight bold
						font-size 24px
						margin-left 5px
					.current
						font-size 14px
						&:nth-of-type(1)
							margin-top 25px
					.buy
						width 160px
						height 30px
						margin-top 30px
						img
							margin-right 5px
							vertical-align middle
						.btn
							width 100px
							height 30px
							border 1px solid rgb(121,121,121)
							background rgb(81,81,81)
							color #fff
							font-size 12px
							display inline-block
							line-height @height				
							text-align center
							margin-left 1px
							
					.like
						font-size 14px
						margin-top 15px
					.buyed
						margin-top 5px
						font-size 14px
	.part3
		width 1180px
		height 480px
		margin 0 auto
		margin-top 90px
		.all
			width 580px
			height 200px
			float left
			margin-top 20px
			.meg
				display inline-block
				margin-left 15px
				width 180px
				height 200px
				vertical-align top
				padding-top 25px
				p
					font-size 23px
					font-weight 400	
				span
					font-size 13px
					display block
					margin-top 10px					
				.left
					width 80px
					height 80px
					
					float left
					padding-top 30px
					margin-top 20px
				.right
					width 90px
					height 70px	
					float left
					margin-top 20px
					font-size 14px
					
					.spok
						width 100px
						height 30px
						color #fff
						background rgb(81,81,81)
						margin-top 5px
						text-align center
						line-height 30px
						display block
					.rig
						width 100px
						height 30px
						color #fff
						background rgb(121,121,121)
						margin-top 10px
						text-align center
						line-height 30px
						display block
				em
					height 15px
					width 180px
					font-size 13px
					display block
					margin-top 10px	
					float left	
	.part4
		width 1180px
		height 370px
		margin 0 auto
		
		margin-top 50px
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
</style>
<template>
	<div class="body">
		<my-banner :data="arrBanner"></my-banner>
		<div class="part1">
			<div class="head">
				<span>女王人气Top 10</span>
				<a class="add" href="/mygirl">+</a>
			</div>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl1.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls"href="/mygirl">
				<img src="../assets/girl2.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl3.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl4.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl5.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl6.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl7.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl8.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl9.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
			<a class="girls" href="/mygirl">
				<img src="../assets/girl10.png">
				<a href="">QueenJewelry</a>
					<img src="../assets/love.png">
					<span>999</span>	
			</a>
		</div>
		<div class="part2">
			<div class="head">
				<span>首发品牌</span>
				<a class="add" href="/mygirl">+</a>
			</div>
			<div class="all one">
				<div class="introduce">
					<div class="top">
						<span>距首发结束:20天18时18分18秒</span>
					</div>
					<img src="../assets/girl2.png" class="left"/>
					<div class="right">
						<span class="spokeman">代言人:
						</span><span class="name">Queen</span>
						<p class="current">拒绝平庸，追求卓越</p>
						<p class="current">凸显个性，绝不将就</p>
						<div class="buy">
							<img src="../assets/love2.png"><img src="../assets/love3.png">
							<a class="btn" href="/buy">立刻购买</a>
						</div>
						<p class="like">999人喜欢</p>
						<p class="buyed">10000人已经购买</p>
					</div>
				</div>
			</div>
			<div class="all tow">
				<div class="introduce">
					<div class="top">
						<span>距首发结束:20天18时18分18秒</span>
					</div>
					<img src="../assets/girl9.png" class="left"/>
					<div class="right">
						<span class="spokeman">代言人:
						</span><span class="name">Queen</span>
						<p class="current">拒绝平庸，追求卓越</p>
						<p class="current">凸显个性，绝不将就</p>
						<div class="buy">
							<img src="../assets/love2.png"><img src="../assets/love3.png">
							<a class="btn" href="/buy">立刻购买</a>
						</div>
						<p class="like">999人喜欢</p>
						<p class="buyed">10000人已经购买</p>
					</div>
				</div>
			</div>
			<div class="all three">
				<div class="introduce">
					<div class="top">
						<span>距首发结束:20天18时18分18秒</span>
					</div>
					<img src="../assets/girl7.png" class="left"/>
					<div class="right">
						<span class="spokeman">代言人:
						</span><span class="name">Queen</span>
						<p class="current">拒绝平庸，追求卓越</p>
						<p class="current">凸显个性，绝不将就</p>
						<div class="buy">
							<img src="../assets/love2.png"><img src="../assets/love3.png">
							<a class="btn" href="/buy">立刻购买</a>
						</div>
						<p class="like">999人喜欢</p>
						<p class="buyed">10000人已经购买</p>
					</div>
				</div>
			</div>
		</div>
		<div class="part3">
			<div class="head">
				<span>为我代言</span>
				<a class="add" href="/mygirl">+</a>
			</div>
			<div class="all">
				<img src="../assets/Z1.jpg">
				<div class="meg">
					<p>QueenJewelry</p>
					<div class="left">
						<img src="../assets/love2.png">
						<img src="../assets/love3.png">
						<span>9999人喜欢</span>
					</div>
					<div class="right">
						<a class="spok" href="/apply">我要代言</a>
						<a class="rig" href="/buy">立即购买</a>
					</div>
					<em>10000人已经购买</em>
				</div>
			</div>
			<div class="all">
				<img src="../assets/Z2.jpg">
				<div class="meg">
					<p>QueenJewelry</p>
					<div class="left">
						<img src="../assets/love2.png">
						<img src="../assets/love3.png">
						<span>9999人喜欢</span>
					</div>
					<div class="right">
						<a class="spok" href="/apply">我要代言</a>
						<a class="rig" href="/buy">立即购买</a>
					</div>
					<em>10000人已经购买</em>
				</div>
			</div>
			<div class="all">
				<img src="../assets/Z3.jpg">
				<div class="meg">
					<p>QueenJewelry</p>
					<div class="left">
						<img src="../assets/love2.png">
						<img src="../assets/love3.png">
						<span>9999人喜欢</span>
					</div>
					<div class="right">
						<a class="spok" href="/apply">我要代言</a>
						<a class="rig" href="/buy">立即购买</a>
					</div>
					<em>10000人已经购买</em>
				</div>
			</div>
			<div class="all">
				<img src="../assets/Z4.jpg">
				<div class="meg">
					<p>QueenJewelry</p>
					<div class="left">
						<img src="../assets/love2.png">
						<img src="../assets/love3.png">
						<span>9999人喜欢</span>
					</div>
					<div class="right">
						<a class="spok" href="/apply">我要代言</a>
						<a class="rig" href="/buy">立即购买</a>
					</div>
					<em>10000人已经购买</em>
				</div>
			</div>
		</div>
		<div class="part4">
			<div class="head">
				<span>我的时尚</span>
				<a class="add" href="/mygirl">+</a>
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

	</div>
</template>
<script>
	import MyBanner from "../components/Banner";
	
	export default {

		data(){
			return {

				arrBanner : [
				{
					name : "图片1",
					src : require("../assets/8k=.jpg")
				},
				{
					name : "图片2",
					src : require("../assets/9k=.jpg")
				},
				{
					name : "图片3",
					src : require("../assets/10k=.jpg")
				},
				{
					name : "图片4",
					src : require("../assets/11k=.jpg")
				}]
			}
		},
		components : {
			MyBanner
		}
	}
	
</script>