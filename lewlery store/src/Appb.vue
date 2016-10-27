<style lang="stylus">
	*
		margin 0
		padding 0
		line-hight 1
		font-family Microsoft Yahei
		color rgb(51,51,51)
		box-sizing border-box
	a
		text-decoration none
		color inherit
	ul
	ol
	li
		list-style none
	em
	i
		font-style normal	
	.appb
		width 100px
		height 300px
		background red	
</style>
<template>
	<div id="appb">
		{{lalal}}
	</div>
</template>
<script>
	var appb = new vue({
		el : "#appb"
		data : {
			lala :"66666"
		}
	})
</script>