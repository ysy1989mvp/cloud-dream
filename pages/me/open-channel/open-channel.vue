<template>
	<view class="container">
		<view class="content">
			<view class="regular">
				<text class="tex bigFont">
					规则：
				</text>
				<text class="tex">
					1、用户在注册成功后登陆自己的页面，信息要确保完整，在平台核实无误后开通自己的渠道。
				</text>
			</view>
			
			<view class="v-code">
				<text class="tex bigFont scan">
					付款二维码
				</text>
				<view class="img1">
					<image src="../../../static/image/01-channel.png" mode="aspectFit"></image>
				</view class="screenshot1">
				<text class="tex screenshot">付款后截图</text>
			</view>
			
			<view class="bottom" @click="toChannel02">
				<button class="bottom_btn">立即开通</button>
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
			toChannel02(){
				uni.navigateTo({
					url:"../open-channel-02/open-channel-02"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");
	
	.content{
		height: 100vh;
		background-color: #FFFFFF;
		padding: 24upx;
		box-sizing: border-box;
	}
	
	.regular{
		width: 100%;
		padding: 0 48upx;
		box-sizing: border-box;
	}
	
	.bigFont{
		font-size: 32upx;
		display: block;
	}
	
	.scan{
		font-size: 30upx;
	}
	
	.screenshot,.scan{
		display: block;
		width: 100%;
		text-align: center;
	}
	
	.v-code{
		width: 100%;
		margin-top: 150upx;
	}
	
	.v-code image{
		width: 200upx;
		height: 200upx;
		display: block;
		margin: 24upx auto;
	}
	.bottom_btn{
		background-color:#1BCC8D ;
		color: #FFFFFF;
		height: 88upx;
		display: flex;
		justify-content: center;
		flex-direction: center;
		align-items: center;
	}
	.regular{
		margin-top: 50upx;
	}
	.img1{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: center;
		align-items: center;
		margin-top:30upx ;
	}
	.screenshot1{
		color: #A5A5A5;
	}
</style>
