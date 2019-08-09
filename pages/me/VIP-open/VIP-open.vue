<template>
	<view class="container">
		<view class="content">
			<view class="line">
				<text class="tex bigFont number">编号</text>
				<text class="tex bigFont money">金额</text>
				<text class="tex bigFont time">时间</text>
				<text class="tex bigFont origin">来源</text>
			</view>
			
			<view class="line" v-for="item in 5">
				<text class="tex number">154654545</text>
				<text class="tex money">0.955</text>
				<text class="tex time">2019-10-09</text>
				<text class="tex redFont origin">任务收入</text>
			</view>
		</view>
		
		<!-- 弹窗 -->
		<!-- <view class="pop">
			<view class="popContent"> -->
				<!-- <image src="https://public.zgscdx.cn/hyj_admin/img_msg_success.png"></image>
				<text class="popText">你已成功回复留言！</text>
				<view class="popButtons">
					<text class="popCancel" @click="hidePops">取消</text>
					<text class="popSure" @click="saveRecord">确定</text>
				</view> -->
				
				<!-- <text class="tex redFont bigFont">vip会员</text>
				<text class="tex bigFont">充值999送vip会员</text>
				<text class="tex">999元可用于下单</text>
				<image src="../../../static/image/01_vip.png" mode="aspectFit"></image>
				<view class="bottom">
					<button class="bottom_btn">立即下单</button>
				</view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("../../../css/main-style.css");
	.line{
		width: 100%;
		padding: 12upx 24upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12upx;
		border-bottom: 10upx solid #E5E5E5;
	}
	
	.line text{
		width: 25%;
		text-align: center;
	}
	
	.pop{
		width: 70%;
		height: auto;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 48upx 24upx;
		box-sizing: border-box;
		background:#E5E5E5;
		border-radius: 20upx;
	}
	
	.popContent{
		position: relative;
		bottom: 0;
		margin: 0;
		background-color: transparent;
	}
	
	.popContent text{
		display: block;
		width: 100%;
		text-align: center;
		line-height: 200%;
	}
	
	.redFont{
		font-size: 35upx;
	}
	
	.bottom{
		padding: 50upx 0;
	}
</style>
