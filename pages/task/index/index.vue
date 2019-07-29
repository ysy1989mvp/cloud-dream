<template>
	<view class="container">
		<view class="content">
			<text @click="toRecords">任務</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			toRecords(){
				uni.navigateTo({
					url:"../task-records/task-records"
				})
			}
		}
	}
</script>

<style>

</style>
