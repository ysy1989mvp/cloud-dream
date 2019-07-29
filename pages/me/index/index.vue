<template>
	<view class="container">
		<view class="content">
			<text @click="toHelpCenter">me</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toHelpCenter(){
				uni.navigateTo({
					url:"../help-center/help-center"
				})
			}
		}
	}
</script>

<style>

</style>
