<style scoped lang="stylus">
.Buy
	width 1180px
	margin 0 auto
	.buy
		height 609px
		border-bottom 1px solid #000
		.relation
			width 120px
			height 340px
			text-align center
			position fixed
			top 50%
			transform translate( 0,-50%);
			right 0px
			span
				font-size 24px
				font-weight 700
				&+img
					margin-top 12px
					margin-bottom 5px
			p
				font-size 14px
			img:nth-of-type(2)
				width 120px
				height 120px
				margin-top 10px		
		
		.top
			width @width
			height 50px
			border-bottom 2px solid #000
			line-height @height
			font-size 14px
			a
				margin-right 10px
			span
				font-weight 700	
		.buying
			.left
				width 130px
				float left
				.minimg	
					width 130px
					height 136px
					border-bottom 1px solid #000
					margin-bottom 5px
			.center
				width 420px
				height 550px
				float left
				margin-left 10px
				margin-right 20px
			.right
				width 600px
				float left
				.price
					width 600px
					height 140px
					border-bottom 1px solid #000
					margin-top 30px
					p
						font-size 14px
						font-weight 700
						&:nth-of-type(2)
							margin-top 35px
							margin-bottom 15px
					.vip
						width 60px
						height 20px
						background rgb(94,94,94)
						color #fff
						text-align center
						line-height @height
						float left
						
						&:after 
							width 7px
							height 10px
							content ""
							display block
							float right
							background url(../assets/buyrrow.png)
							margin-right -7px
							margin-top 5px
					span
						margin-left 15px
						font-size 18px					
						font-weight 700
				.choose
					width 480px
					height 190px
					font-weight 400
					font-size 14px
					.ccolor
						margin-top 25px
						img			
							vertical-align middle
					.csize
						margin-top 25px
						span
							float left
						p
							width 26px
							height 19px
							float left
							margin-left 5px
							margin-right 5px
							text-align center
							line-height @height
							border 1px solid rgb(188,188,188)
							cursor pointer
							&:nth-of-type(1)
								background rgb(188,188,188)
						
					.cnumber
						margin-top 40px
						input
							width 50px
							padding-left 10px
				.bottom
					font-size 14px
					.all
						width 130px
						height 50px
						text-align center
						line-height @height	
						color #fff
						float left
						margin-right 10px
					.wish
						width 200px
						background rgb(107,107,107)
						&:before
							width 14px
							height @width
							content ""
							display inline-block
							background url(../assets/buys.png)
							vertical-align middle
							margin-right 10px
					.collect
						background rgb(188,188,188)
						&:before
							width 13px
							height 14px
							content ""
							display inline-block
							background url(../assets/buyst.png)
							vertical-align middle
							margin-right 10px
					.apply
						background rgb(242,242,242)
						color #000
						&:before
							width 10px
							height 14px
							content ""
							display inline-block
							background url(../assets/buyz.png)
							vertical-align middle
							margin-right 10px
					.share
						width 300px
						height 30px
						margin-top 25px
						span
							vertical-align middle
							&:nth-of-type(2)
								margin-left 20px
						img
							vertical-align middle
	.cent
		width 1180px
		overflow hidden
		height 3000px					
		.b_left
			width 280px
			margin-top 20px
			float left
			
			.code
				width @width
				height 366px
				background rgb(242,242,242)
				padding 20px 15px
				text-align center
				img
					width 250px
					height @width
					margin-bottom 20px
				p
					margin-top 2px
			.bkt
				width 280px
				height 40px
				border-top 2px solid #000
				margin-top 30px
				font-size 14px
				font-weight 700
				padding-left 15px
				line-height @height
			.atonce
				width 280px
				height 460px
				margin-top 25px
				border-bottom 1px solid rgb(215,215,215)
				.abi
					margin-bottom 20px
				.span
					font-size 14px
					display block
					padding 0 10px
				.btb
					margin-top 15px
					padding 0 10px
					em
						font-weight 700
						margin-right 15px
					img
						width 16px
						height 16px
						vertical-align middle
						margin-left 10px
						
					span
						vertical-align middle
						color rgb(134,134,134)
						font-size 14px
				.btn
					width 260px
					height 40px
					margin-left 10px
					margin-top 15px
					background rgb(134,134,134)
					color #fff
					font-size 14px
					text-align center 
					line-height @height
		.b_right
			width 880px	
			float left
			margin-left 20px
			margin-top 20px
			.top
				width 880px
				height 100px
				border-bottom 1px dashed #000
				padding-right 85px
				p:nth-of-type(1)
					font-size 14px
					font-weight 700
					margin-bottom 15px
				span
					font-size 14px
					&:nth-of-type(2)
						margin-left 185px
						margin-right 255px
			.center
				width 880px
				margin-top 30px
				.title
					font-size 14px
					font-weight 700
					margin-bottom 15px
				.introduce
					font-size 14px	
				img
					background-size 100% 100%
					width 440px
					height 620px
					margin-top -4px
					&:nth-of-type(1)
						width 880px
						height 240px
						margin-top 15px
						margin-bottom 15px
				.advice
					width 880px
					height 230px
					background rgb(242,242,242)
					padding 5px 35px
					p
						font-size 18px
						font-weight 700
						display inline-block
						vertical-align middle
					img
						width 107px
						height 17px	
						vertical-align middle
						margin-left 460px
					textarea
						width 815px
						height 65px
						margin-top 15px
						margin-bottom 20px
					.btn
						width 150px
						height 40px
						background rgb(215,215,215)
						font-size 14px
						text-align center
						line-height @height				
						display inline-block
						vertical-align middle
					span
						font-size 18px
						margin-left 10px
					em
						font-size 14px
						margin-right 27px		
					input
						margin-left 360px
						vertical-align middle
						margin-right 5px
				.discuss
					margin-top 20px
					.head
						width 880px	
						height 40px
						border 1px solid rgb(215,215,215)
						background rgb(242,242,242)
						line-height @height
						font-size 14px
						input
							margin-left 20px
							margin-right 5px
							vertical-align middle
							&:nth-of-type(1)
								margin-left 40px
				.content
					width 880px
					height 80px
					border-bottom 1px solid rgb(215,215,215)
					padding 15px 35px
					font-size 14px
					.ctn
						margin-right 162px
					p
						width 125px
						display inline-block
						vertical-align top
						margin-left 80px
						img
							width 90px
							height 15px
							background-size 100% 100%			
</style>
<template>
	<div class="Buy">
		<div class="buy">
			<div class="relation">
				<span>logo</span>
				<img src="../assets/fixed.png">
				<p>QueenJewelry</p>
				<p>社区店:湖畔店</p>
				<img src="../assets/2Q==.jpg">
			</div>
			<div class="top">
				<a href="">首页</a> >
				<a href="">戒指</a> >
				<a href="">钻戒</a> >
				<span>QueenJewey</span>
			</div>
			<div class="buying">
				<div class="left">
					<div class="minimg">
						<img src="../assets/buyl.png">
					</div>
					<div class="minimg">
						<img src="../assets/buyl.png">
					</div>
					<div class="minimg">
						<img src="../assets/buyl.png">
					</div>
					<div class="minimg">
						<img src="../assets/buyl.png">
					</div>
				</div>
				<div class="center">
					<img src="../assets/buyc.png">
				</div>
				<div class="right">
					<div class="price">
						<p>Life·After Life QueenJewelry</p>
						<p>市场价: <s>¥139.00</s></p>
						<div class="vip">VIP</div>
						<span>¥99.00</span>
					</div>
					<div class="choose">
						<div class="ccolor">
							<span>选择颜色:</span>
							<img src="../assets/buyr.png">
						</div>
						<div class="csize">
							<span>选择尺码:</span>
							<div class="sz">
								<p v-for="item of size" @click="bgb">{{item.number}}</p>
							</div>
						</div>
						<div class="fix"></div>
						<div class="cnumber">
							<span>选择数量:</span>
							<input type="number" placeholder="1" @click="ipt"></input>
						</div>

					</div>
					<div class="bottom">
						<div class="all wish">添加到首饰盒心愿单</div>
						<div class="all collect">收藏商品</div>
						<div class="all apply">申请代言</div>
						<div class="fix"></div>
						<div class="share">
							<span>将心仪的商品分享到:</span>
							<img src="../assets/btm1.png">
							<img src="../assets/btm2.png">
							<img src="../assets/btm3.png">
							<img src="../assets/btm4.png">
							<span>点赞:</span>
							<img src="../assets/btm5.png">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fix"></div>
		<div class="cent">
			<div class="b_left">
				<div class="code">
					<img src="../assets/2Q==.jpg">
					<span>我的微信号</span>
					<p>扫一扫 新品首发早发现</p>
				</div>
				<p class="bkt">爆款推荐</p>
				<div class="atonce">
					<img src="../assets/bnlf1.jpg" class="abi">
					<span class="span">某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</span>
					<div class="btb">
						<em>¥999.00</em>
						<img src="../assets/love2.png" class="love">
						<span class="scor">999</span>
						<img src="../assets/love3.png" class="love">
						<span class="scor">99</span>
						<img src="../assets/love4.png" class="love">
						<span class="scor">99</span>
					</div>
					<div class="btn">马上购买</div>
				</div>
				<div class="atonce">
					<img src="../assets/bnlf2.jpg" class="abi">
					<span class="span">某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</span>
					<div class="btb">
						<em>¥999.00</em>
						<img src="../assets/love2.png" class="love">
						<span class="scor">999</span>
						<img src="../assets/love3.png" class="love">
						<span class="scor">99</span>
						<img src="../assets/love4.png" class="love">
						<span class="scor">99</span>
					</div>
					<div class="btn">马上购买</div>
				</div>
				<div class="atonce">
					<img src="../assets/bnlf3.jpg" class="abi">
					<span class="span">某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</span>
					<div class="btb">
						<em>¥999.00</em>
						<img src="../assets/love2.png" class="love">
						<span class="scor">999</span>
						<img src="../assets/love3.png" class="love">
						<span class="scor">99</span>
						<img src="../assets/love4.png" class="love">
						<span class="scor">99</span>
					</div>
					<div class="btn">马上购买</div>
				</div>
				<div class="atonce">
					<img src="../assets/bnlf5.jpg" class="abi">
					<span class="span">某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</span>
					<div class="btb">
						<em>¥999.00</em>
						<img src="../assets/love2.png" class="love">
						<span class="scor">999</span>
						<img src="../assets/love3.png" class="love">
						<span class="scor">99</span>
						<img src="../assets/love4.png" class="love">
						<span class="scor">99</span>
					</div>
					<div class="btn">马上购买</div>
				</div>
				<div class="atonce">
					<img src="../assets/bnlf2.jpg" class="abi">
					<span class="span">某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</span>
					<div class="btb">
						<em>¥999.00</em>
						<img src="../assets/love2.png" class="love">
						<span class="scor">999</span>
						<img src="../assets/love3.png" class="love">
						<span class="scor">99</span>
						<img src="../assets/love4.png" class="love">
						<span class="scor">99</span>
					</div>
					<div class="btn">马上购买</div>
				</div>
			</div>
			<div class="b_right">
				<div class="top">
					<p>商品信息</p>
					<span>编号 : 501234531</span>
					<span>组成 : 黄铜</span>
					<span>细节 : 附品牌标志, 按钮收束</span>
					<span>尺寸 : 高度: 6.5 cm</span>
				</div>
				<div class="center">
					<p class="title">设计灵感</p>
					<span class="introduce">Set me as a seal upon your heart ——《圣经》。在变幻的世界中，每个人都有自己不愿意醒来的梦，日出日落，念念不忘。执着是可以如此般，而此刻我在这样祈愿，愿你将我放在心上如印记。</span>
					<img src="../assets/u67.jpg">
					<img src="../assets/u69.jpg"><img src="../assets/u71.jpg">
					<img src="../assets/u73.jpg"><img src="../assets/u69.jpg">
					<img src="../assets/u69.jpg"><img src="../assets/u71.jpg">
					<div class="advice">
						<p>其他买家，需要您的建议哦！</p>
						<img src="../assets/advance.png">
						<textarea></textarea>
						<div class="btn btnt">电脑晒图</div><span>0/5</span>
						<input type="checkbox"/><em>匿名评价</em>
						<div class="btn bntp">提交评价</div>
					</div>
					<div class="discuss">
						<div class="head">
							<input type="radio" name="choose"><sapn>全部</sapn>
							<input type="radio" name="choose"><sapn>追评</sapn>
							<input type="radio" name="choose"><sapn>好评</sapn>
							<input type="radio" name="choose"><sapn>差评</sapn>
							<input type="radio" name="choose"><sapn>图片</sapn>
							<input type="radio" name="choose"><sapn>消费者</sapn>
							<input type="radio" name="choose"><sapn>观光者</sapn>
							
						</div>
					</div>
					<div class="content">
						<span class="ctn">质量好，做工好，无色差，很满意。</span>
						<p>
							<span>颜色：蓝色 2005款</span>
							<span>尺码：33</span>
						</p>
						<p>
							<span>QueenJewlery</span>
							<img src="../assets/pinglun.png">
						</p>
					</div>
					<div class="content">
						<span class="ctn">质量好，做工好，无色差，很满意。</span>
						<p>
							<span>颜色：蓝色 2005款</span>
							<span>尺码：33</span>
						</p>
						<p>
							<span>QueenJewlery</span>
							<img src="../assets/pinglun.png">
						</p>
					</div>
					<div class="content">
						<span class="ctn">质量好，做工好，无色差，很满意。</span>
						<p>
							<span>颜色：蓝色 2005款</span>
							<span>尺码：33</span>
						</p>
						<p>
							<span>QueenJewlery</span>
							<img src="../assets/pinglun.png">
						</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
 	
 	
	export default{
		data(){
			return{
				size : [
				{
					number:9
				},
				{
					number:10
				},
				
				{
					number:11
				},
				
				{
					number:12
				},
				{
					number:13
				},
				{
					number:14
				},
				{
					number:15
				},
				]
			}
		},
		methods : {
			ipt(e){

				e.target.value > 0? e.target.value : e.target.value="1"
			},
			bgb(e){
				for(var i=0;i<7;i++){
					event.currentTarget.parentNode.children[i].style.backgroundColor=("#fff")
				};
				e.target.style.backgroundColor=("rgb(188,188,188)")
				
			}
		}
	}
</script>