<template>
	<view class="container">
		<view class="content">
			<text @click="toRelease">發佈</text>
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
			toRelease(){
				uni.navigateTo({
					url:"../release/release"
				})
			}
		}
	}
</script>

<style>

</style>
