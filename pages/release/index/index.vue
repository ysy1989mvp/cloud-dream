<template>
	<view class="container">
		<view class="content">
			<scroll-view class="top-menu-view" scroll-x="true" @scroll="scroll" scroll-left="0">
                    <view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
                    <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
                    <view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A1</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B2</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C3</view>
            </scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
        
		}
	}
</script>

<style>

</style>
