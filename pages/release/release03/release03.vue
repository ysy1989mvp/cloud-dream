<template>
	<view class="container">
		<view class="content1">
			<view>
				<text class="title">单号:</text>
				<text class="content">1000214520002</text>
			</view>
			<view>
				<text class="title">类别:</text>
				<text class="content">朋友圈推广</text>
			</view>
			<view>
				<text class="title">任务数量:</text>
				<text class="content">100</text>
			</view>
			<view>
				<text class="title">任务网址:</text>
				<text class="content mya">http://taskdo.beijinglv.top/a</text>
			</view>
			<view>
				<text class="title">任务图片:</text>
				<view>
					<image class="imger" src="../../../static/image/yangsongyan/release03/03.png"></image>
					<image class="imger" src="../../../static/image/yangsongyan/release03/04.png"></image>
					<image class="imger" src="../../../static/image/yangsongyan/release03/05.png"></image>
					<image class="imger" src="../../../static/image/yangsongyan/release03/06.png"></image>
				</view>
			</view>
			<view>
				<text class="title">订单总金额:</text>
				<text class="content">1023.00元</text>
			</view>
			<!-- <view>
				<text class="title">付款方式:</text>
				<view>
					<image class="imger1" src="../../../static/image/yangsongyan/release03/01@3x.png"></image>
					<image class="imger1" src="../../../static/image/yangsongyan/release03/02@3x.png"></image>
					<image class="imger1"></image>
				</view>
			</view> -->
			<view>
				<view class="login" @click="regist">
					<text class="dd1">发&nbsp;&nbsp;布</text>
				</view>
			</view>
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
			
		}
	}
</script>

<style>
	*{
		/* border:1upx solid red; */
	}
	.container{
		background-color: #FFFFFF;
		width: 100%;
	}
	.content1{
		width: 90%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		margin: 0upx auto;
		font-size: 33upx;
		
	}
.login{
		width: 450upx;
		height: 88upx;
		background-color:#14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0upx auto;
		margin-top: 200upx;
		margin-bottom: 500upx;
	}
	.content1>view{
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		width: 100%;
		margin: 15upx 0upx;
	}
	.title{
		font-weight: bold;
		margin-right: 15upx;
	}
	.mya{
		color:#007AFF;
	}
	.imger{
		width: 90upx;
		height: 90upx;
		border-radius: 10upx;
		margin-right: 10upx;
	}
	.imger1{
		width: 90upx;
		height: 90upx;
		margin-right: 50upx;
	}
</style>
