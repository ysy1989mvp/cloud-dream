<template>
	<view class="container">
		<view class="content">
			<!-- <view class="line noneborder">
				<radio @click="toggleRadios" value="aliPay" :checked="theChecked"></radio>
				<text class="tex">支付宝</text>
				<radio @click="toggleRadios" value="card" :checked="!theChecked"></radio>
				<text class="tex">银行卡</text>
			</view>
			<view class="line">
				<text class="text_line bigFont">账号:</text>
				<input class="iptNum" type="text" placeholder="请输入账号" value="" />
			</view>
			<view class="line">
				<text class="text_line bigFont">姓名:</text>
				<input class="iptNum" type="text" placeholder="请输入姓名" value="" />
			</view>
			<view class="line">
				<text class="text_line bigFont">抖音号:</text>
				<input class="iptNum" type="text" placeholder="请输入抖音号" value="" />
			</view>
			<view class="line">
				<text class="text_line bigFont">身份证号:</text>
				<input class="iptNum" type="text" placeholder="请输入身份证号" value="" />
			</view> -->
			
			<text @click="toChannel">图文介绍</text>
			
			<view class="bottom" @click="toOpenChannel">
				<button class="bottom_btn">下一步</button>
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				theChecked:true,
				count:100,
			}
		},
		methods: {
			toggleRadios(){
				this.theChecked = !this.theChecked;
			},
			add(){
				this.count += 1;
			},
			reduce(){
				this.count -= 1;
			},
			toOpenChannel(){
				uni.navigateTo({
					url:"../open-channel/open-channel"
				})
			},
			toChannel(){
				uni.navigateTo({
					url:"../channel/channel"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	text{
		font-size: 40upx;
		width: 100%;
		display: block;
		text-align: center;
		line-height: 800upx;
	}

	.content {
		background-color: #FFFFFF;
		height: 100vh;
		padding: 24upx;
		box-sizing: border-box;
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
		/* background-color: #E5E5E5; */
		padding: 6upx 12upx;
		border-radius: 30upx;
		margin: 0 12upx;
	}
	
	.line{
		width: 100%;
		justify-content: flex-start;
		padding-left: 0;
		padding-right:0;
	}
	
	.line_inner{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 48upx;
	}

	.text_line {
		font-size: 26upx;
		line-height: 75upx;
		width: 150upx;
	}

	.noneborder {
		border: none;
		display: flex;
		justify-content: center;
	}
	
	.grayCircle{
		display: block;
		color: #FFFFFF;
		width: 50upx;
		height: 50upx;
		background: #E5E5E5;
		font-size: 40upx;
		border-radius: 50%;
		text-align: center;
		line-height: 50upx;
		padding: 0;
	}
	
	.counts{
		text-align: center;
	}
	
	.tips{
		width: 100%;
	}
	
	.redFont{
		font-size: 35upx;
	}
	
	.tips text{
		margin-top: 12upx;
		width: 100%;
		display: block;
		line-height: 50upx;
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
		margin: 0;
		padding: 0;
	}
	
	.iptNum{
		font-size: 28upx;
	}
	.bottom_btn{
		background-color:#1BCC8D ;
		color:#FFFFFF;
		height: 88upx;
		display:flex;
		align-items: center;
		justify-content: center;
		
		
	}
	.bottom{
		padding-top:100upx
	}
	
</style>
