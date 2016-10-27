<style scoped lang="stylus">
	.banner
		width 100%
		height 350px
		position relative
		a
			position absolute/*令所有图片叠在一起*/
			top 0
			left 0
			width 100%
			height 100%
			&.current/*设置当前下标的元素在最上边*/
				z-index 1
		em
			position relative
			top 330px
			left 800px
			margin 0 10px
			padding 2.5px 30px
			background rgb(188,188,188)
			font-size 0
			vertical-align top
			z-index 2
			&.current/*设置当前下标时的em标签颜色*/
				background #fff		
		
</style>
<template>
	<div class="banner"><!-- index为父组件中的数组下标 -->
						<!-- 注意style的写法"{'属性'}" -->
						<!-- 注意 : 的使用，既可以当做绑定又可以当做监听 -->
		<a v-for="(item,index) of data" :title="item.name" :style="{'background':'url('+ item.src + ')'}" :class="{current:index ===currentIndex}"></a>
		<em v-for="index of len" @click="handleClick(index-1)" :class="{current:index-1 === currentIndex}"></em>
		<!-- 这里的index为长度的从1开始要比图片标签下标所以index-1 -->
		<!-- 判断条件成立，则引用class为current的样式 -->
	</div>
</template>
<script>
	/*let声明变量const声明方法*/
	 let t;
	 /*() =>{}相当于function(){}*/

	 const timer = callback => {
	 	t = setInterval(()=>{		
	 		callback();
	 	},1000);
	 }
	
	export default {
		props : ["data"],/*props传递同步父组件值*/
		data(){
			return {
				currentIndex : 0/*初始化挡片下标指针*/
			};
		},
		methods : {
			handleClick(index){
				clearTimeout(t);
				this.currentIndex = index;/*点击时图片的下标与点击的em对应*/
				timer(() => {
					let currentIndex = this.currentIndex;/*计时器工作时图片的下标与em对应*/
					this.currentIndex = currentIndex > this.len -2 ? 0 : currentIndex+1;
				});
			}
		},
		computed : {/*计算机计算属性*/
			len(){
				return this .data.length;
				}/*计算服组件data的长*/
		},
		mounted(){/*生命周期：在挂在后渲染前进行设置*/
			timer(()=>{
				let currentIndex = this.currentIndex;
				this.currentIndex = currentIndex> this.len - 2 ? 0 : currentIndex + 1;
			});
		}
	}
</script>