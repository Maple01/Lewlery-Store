<style scoped lang="stylus">
	.nav
		height 40px
		background  rgb(188,188,188)
		.w1180
			.all1
				float left
				width 180px
				height @height
				text-align center
				line-height @height
				background rgb(174,174,174)
				margin-top -5px
				font-size 14px
				font-weight bold
				img:nth-of-type(1)
					margin-right 30px
				img:nth-of-type(2)
					margin-left 30px	
			>a
				padding 0 30px
				font-size 14px
				line-height 30px
			
		.All
			position relative		
		.god
			width 180px
			height 420px
			border 1px solid rgb(204,204,204)
			position absolute
			top 40px
			background white
			padding 1px 20px
			z-index 999
			.goods
				width 140px
				height 60px
				margin-top 10px
				p
					font-weight bold
					font-size 15px
					
				span
					font-size 13px
					line-height 40px
					margin-right 15px
					cursor pointer		
</style>
<template>
	<div class="nav">
		<div class="w1180" >
			
			<div class="All" @mouseenter="appear"
			@mouseleave.stop="hide">
				<div class="all1"><img src="../assets/all1.png">全部商品 <img src="../assets/all2.png"></div>
				<div class="god hidden">
					<div class="goods" v-for="each of product">		
						<p>{{each.name}}</p>
						<span v-for="scorl of each.scorl">{{scorl.name}}</span>
					</div>
				</div>	
			</div>
			<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>

		</div>
	</div>
</template>
<script>

	export default{
		data(){
			return {
				product : [
					{
						name : "钻石",
						scorl : [
							{
								name : "30分",
								href : "/"
							},{
								name : "50分",
								href : "/"
							},{
								name : "克拉钻",
								href : "/"
							}
						]
					},
					{
						name : "钻戒",
						scorl : [
							{
								name : "30分",
								href : "/"
							},{
								name : "50分",
								href : "/"
							},{
								name : "铂金",
								href : "/"
							}
						]
					},
					{
						name : "对戒",
						scorl : [
							{
								name : "铂金对戒",
								href : "/"
							},{
								name : "k金对戒",
								href : "/"
							}
						]
					},
					{
						name : "配饰",
						scorl : [
							{
								name : "吊坠",
								href : "/"
							},{
								name : "项链",
								href : "/"
							},{
								name : "套链",
								href : "/"
							}
						]
					},
					{
						name : "系列产品",
						scorl : [
							{
								name : "爱宠婚介",
								href : "/"
							}
						]
					},
					{
						name : "热门产品",
						scorl : [
							{
								name : "50分裸钻",
								href : "/"
							},{
								name : "70分裸钻",
								href : "/"
							}
						]
					}
				],
				list : [
				{
					name :"首页",
					href : "/"

				},
				{
					name :"品牌首发",
					href : "/brandNew"

				},
				{
					name :"品牌街",
					href : "/brand"

				},
				{
					name :"为我代言",
					href : "/me"

				},
				{
					name :"创意申请",
					href : "/apply"

				},
				{
					name :"活动",
					href : "/activity"

				}]
			};
		},
		methods : {
			appear(e){
				e.currentTarget.querySelector(".god").classList.remove("hidden")
			},
			hide(e){
				e.target.querySelector(".god").classList.add("hidden")
			}
		}
	};
</script>