<style scoped lang="stylus">
	
	.top
		width 100%
		height 350px
		background url(../assets/9k=.jpg)
		overflow hidden
		p
			color #fff
			font-size 36px
			font-weight 700
			margin-left 20%
			&:nth-of-type(1)
				margin-top 120px
	.content
		width 1180px
		margin 50px auto
		.pt1
			width inherit
			height 330px
			margin-top 20px
			.left
				width 220px
				height @height
				background rgb(81,81,81)
				float left
				text-align center		
				p
					font-size 48px
					font-weight 700
					color #fff
					margin-top 100px
				span
					font-size 24px
					line-height 60px
					color rgb(215,215,215)
			.right
				width 960px
				height 330px
				float left
				padding-left 20px
				padding-top 10px
				.more
					width 80px
					height 25px
					color #fff
					background rgb(121,121,121)
					text-align center
					line-height @height
					font-size 12px
					float right
				.btn
					width 25px
					height 25px
					background rgb(161,161,161)
					text-align center
					line-height @height	
					float right
				.product
					width 940px
					height 290px
					border-top 2px solid #000
					margin-top 5px
					overflow hidden
					.pdc
						margin-right 20px
					.pd1
						width 220px
						height 290px
						border 1px solid rgb(215,215,215)
						margin-top -2px	
						padding 9px
						float left
						
						.top
							width 200px
							height 200px
							margin-top 5px
						.price
							width 200px
							height 36px
							line-height @height
							.let
								display block
								float left
							.rig
								display block
								float right
						.bottom
							width 150px
							margin-left 45px
							img 
								width 16px
								height 16px
								vertical-align middle	
							span
								font-size 14px
								color rgb(134,134,134)
								vertical-align middle
								margin-right 10px
						
</style>
<template>
	<div class="brand">
		<div class="top">
			<p>我是女王,我做主!</p>
			<p>我的品牌我代言!</p>
		</div>
		<div class="content">
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt1">
				<div class="left">
					<p>LOGO</p>
					<span>女王珠宝</span>
				</div>
				<div class="right">
					<div class="btn">
						<img src="../assets/roow.png">
					</div>
					<div class="more">
						了解更多
					</div>
					<div class="fix"></div>
					<div class="product">
						<div class="pd1 pdc">
							<img src="../assets/bnlf1.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf2.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1 pdc">
							<img src="../assets/bnlf3.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
						<div class="pd1">
							<img src="../assets/bnlf5.jpg" class="top">
							<div class="price">
								<span class="let">QueenJewelry</span>
								<span class="rig">¥99</span>
							</div>
							<div class="bottom">
								<img src="../assets/love2.png">
								<span>999</span>
								<img src="../assets/love3.png">
								<span>99</span>
								<img src="../assets/love4.png">
								<span>99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
