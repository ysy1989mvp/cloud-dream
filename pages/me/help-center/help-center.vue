<template>
	<view class="container">
		<view class="content" @click="toRecharge">
			<view class="line noneborder">
				<text class="tex">操作问题</text>
				<text class="tex">提现问题</text>
				<text class="tex">应用教程</text>
				<text class="tex">其他问题</text>
			</view>
			<view class="line" v-for="item in 4">
				<text class="text_line">1、如何开通vip</text>
			</view>
			<!-- <view class="line">
				<text class="text_line">1、如何开通vip</text>
			</view>
			<view class="line">
				<text class="text_line">1、如何开通vip</text>
			</view>
			<view class="line">
				<text class="text_line">1、如何开通vip</text>
			</view> -->
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
			toRecharge(){
				uni.navigateTo({
					url:"../recharge/recharge"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		background-color: #FFFFFF;
		height: 100vh;
	}

	.line {
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #E5E5E5;
		padding: 24upx;
		box-sizing: border-box;
	}

	.tex {
		width: 15%;
		background-color: #E5E5E5;
		padding: 6upx 12upx;
		border-radius: 30upx;
	}

	.text_line {
		font-size: 26upx;
		line-height: 75upx;
	}

	.noneborder {
		border: none;
	}
</style>
