<style scoped lang="stylus">
	.top
		width 100%
		height 30px
		background rgb(242,242,242)
		.cent
			width 1200px
			height 30px
			margin 0 auto
			line-height 30px
		span
			font-size 14px
		a
			font-size 13px
			margin-left 8px
		a:nth-of-type(1)
			margin-left 820px	
		b
			font-weight normal
			margin-left 8px
	
	.fix
		clear both			
	.search
		width 1200px
		height 110px
		margin 0 auto
		font-size 14px
		
		img:nth-of-type(1)
			vertical-align middle
		.left
			width 1110px
			height 40px
			margin-top 40px
			float left
		.choose
			display inline-block
			position relative
		.local
			margin-left 10px
			&:after
				content ""
				width 13px
				height 8px
				display inline-block
				background url(../assets/search1.png)
				vertical-align super
		.province
			width 440px
			height 130px
			border 1px solid rgb(188,188,188)
			position absolute
			left 8px
			background white
			padding 12px 12px
			z-index 999
			li
				padding 3px 6px
				float left			
		input:nth-of-type(1)
			width 508px
			height 40px
			padding 4px 16px 
			border 1px solid rgb(228,228,228)
			outline none
			vertical-align middle
			margin-left 185px
		.btn
			width 40px
			height @width
			vertical-align middle
			border 1px solid rgb(228,228,228)
			display inline-block
			margin-left -1px
			img
				margin 10px 10px
		.shopcar
			width 132px
			height 40px
			border 	1px solid rgb(228,228,228)
			display inline-block
			margin-left 20px
			vertical-align middle
			position relative
			
			.mine
				line-height 40px
				margin-left 21px
				&:after
					content ""
					width 10px
					height 8px
					vertical-align sub
					background url(../assets/search3.png)
					display inline-block
			.car
				width 320px
				height 170px
				border	1px solid rgb(188,188,188)
				background #fff
				margin-top -2px	
				position relative
				left -95px
				z-index 999
				.head
					width inhreit
					height 37px
					border-bottom 1px solid rgb(188,188,188)
					background rgb(242,242,242)
					span
						line-height 36px
					span:nth-of-type(1)
						margin-left 25px
					span:nth-of-type(2)
						margin-left 100px
				.body
					width 280px
					height 70px
					padding 10px 0px
					border-bottom 1px solid black
					margin 0 auto
					.referral
						width 95px
						display inline-block
						vertical-align middle
						margin-left 23px
					.pice
						width 75px	
						display inline-block
						margin-left 25px
						vertical-align middle
						span
							font-size 14px
							font-weight bold
						a
							font-size 12px
						p		
							margin-left 45px
							margin-top 3px
				.foot
					width 280px
					margin 0 auto
					padding-top 13px
					.allprice
						display inline-block
						p
							margin-top 7px
					.look
						width 100px
						height 30px
						background rgb(242,242,242)
						line-height @height
						text-align center
						display inline-block
						vertical-align super
						margin-left 81px	
								
		.code
			width 70px
			height 100px
			float left
			text-align center
			margin-top 15px
			img
				width 70px
				height @width
			p
				line-height 20px	
</style>>
<template>
	<div class="header">
		<div class="top">
			<div class="cent">
				<span>热线电话:12345678912</span>
				<a href="../Appb">登录</a><b>|</b>
				<a href="">注册</a><b>|</b>
				<a href="">品牌商</a><b>|</b>
				<a href="">女王帮助</a>
			</div>
		</div>
		<div class="search">
			<div class="left">
				<img src="../assets/logo1.png">
				<div class="choose" @mouseenter="addHidden" @mouseleave="removehid">
					<span class="local">广东 </span>
					<div class="province hidden">
						<li>A-G</li>
						<li><a href="">北京</a></li>
						<li><a href="">安徽</a></li>
						<li><a href="">重庆</a></li>
						<li><a href="">福建</a></li>
						<li><a href="">广东</a></li>
						<li><a href="">广西</a></li>
						<li><a href="">甘肃</a></li>
						<li><a href="">贵州</a></li>
						<div class="fix"></div>
						<li>H-J</li>
						<li><a href="">河北</a></li>
						<li><a href="">河南</a></li>
						<li><a href="">海南</a></li>
						<li><a href="">湖北</a></li>
						<li><a href="">湖南</a></li>
						<li><a href="">黑龙江</a></li>
						<li><a href="">吉林</a></li>
						<li><a href="">江苏</a></li>
						<li><a href="">江西</a></li>
						<div class="fix"></div>
						<li>L-S</li>
						<li><a href="">辽宁</a></li>
						<li><a href="">内蒙古</a></li>
						<li><a href="">宁夏</a></li>
						<li><a href="">青海</a></li>
						<li><a href="">上海</a></li>
						<li><a href="">四川</a></li>
						<li><a href="">山东</a></li>
						<li><a href="">山西</a></li>
						<li><a href="">陕西</a></li>
						<div class="fix"></div>
						<li>T-Z</li>
						<li><a href="">天津</a></li>
						<li><a href="">新疆</a></li>
						<li><a href="">西藏</a></li>
						<li><a href="">云南</a></li>
						<li><a href="">浙江</a></li>
					</div>
				</div>
				<input placeholder="搜索您需要的关键词"/><div class="btn"><img src="../assets/search2.png"></div>		
				<div class="shopcar" @mouseenter="appear" @mouseleave="hide">
					<span class="mine">我的首饰盒&nbsp; </span>
					<div class="car hidden">
						<div class="head">
							<span>最新加入的商品</span>
							<span>清空首饰盒</span>
						</div>
						<div class="body">
							<img src="../assets/pice.png">
							<div class="referral">
									Life·After Life
									QueenJewelry
							</div>
							<div class="pice">
								<span>¥139.00</span><a>×4</a>
								<p>删除</p>
							</div>
						</div>
						<div class="foot">
							<div class="allprice">
								<span>共四件商品</span>
								<p>共计：¥556.00</p>
							</div>
							<div class="look">查看首饰盒</div>
						</div>
					</div>
				</div>
			</div>	
			<div class="code">
				<img src="../assets/2Q==.jpg">
				<p>关注微信</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			addHidden(e){
				this.$el.querySelector(".province").classList.remove("hidden");
			},
			removehid(e){
				e.target.querySelector(".province").classList.add("hidden")
			},
			appear(e){
				e.target.querySelector(".car").classList.remove("hidden")
			},
			hide(e){
				e.target.querySelector(".car").classList.add("hidden")
			}
		}
	}
</script>