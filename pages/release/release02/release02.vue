<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="text">
					<textarea maxlength="500"></textarea>
				</view>
				<view>
					<uploadimgs></uploadimgs>
				</view>
			</view>
			<view class="part2"></view>
			<view class="part3"></view>
		</view>
	</view>
</template>

<script>
	import uploadimgs from "@/components/upload-image/upload-imgs.vue"
	export default {
		components: {
			uploadimgs
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
</style>
