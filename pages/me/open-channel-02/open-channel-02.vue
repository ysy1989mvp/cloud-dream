<template>
	<view class="container">
		<view class="content">
			<!-- <view class="line noneborder">
				<radio @click="toggleRadios" value="aliPay" :checked="theChecked"></radio>
				<text class="tex">支付宝</text>
				<radio @click="toggleRadios" value="card" :checked="!theChecked"></radio>
				<text class="tex">银行卡</text>
			</view> -->

			<view class="line">
				<text class="text_line bigFont">姓名:</text>
				<input class="iptNum" type="text" placeholder="请输入姓名" value="" />
			</view>
			<view class="line">
				<text class="text_line bigFont">电话:</text>
				<input class="iptNum" type="text" placeholder="请输入电话" value="" />
			</view>
			<view class="line">
				<text class="text_line bigFont">付款金额:</text>
				<input class="iptNum" type="text" placeholder="请输入付款金额" value="" />
			</view>
			<view class="line noLine">
				<text class="text_line bigFont">付款后截图:</text>
				<view class="popContent">
					<view class="imglxy1">
						<image class="imglxy" src="../../../static/lyl/01@3x_channel.png" mode="aspectFit"></image>
					</view>
					<text class="tex bigFont">付款成功</text>
				</view>
			</view>
			<view class="tips">
				<text class="tex">注：付款完成后2个工作日内开通</text>
			</view>

		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				theChecked: true,
				count: 100,
			}
		},
		methods: {
			toggleRadios() {
				this.theChecked = !this.theChecked;
			},
			add() {
				this.count += 1;
			},
			reduce() {
				this.count -= 1;
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		background-color: #FFFFFF;
		height: 100vh;
		padding: 45upx;
		box-sizing: border-box;
		margin-top: 20upx;
	}

	.line {
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #E5E5E5;
		padding: 34upx;
		box-sizing: border-box;
	}

	.tex {
		width: 15%;
		/* background-color: #E5E5E5; */
		padding: 6upx 12upx;
		border-radius: 30upx;
		margin: 0 12upx;
	}

	.line {
		width: 100%;
		justify-content: flex-start;
		padding-left: 0;
		padding-right: 0;
	}

	.noLine {
		width: 100%;
		align-items: flex-start;
		border: none;
		height: auto;
	}

	.line_inner {
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

	.grayCircle {
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

	.counts {
		text-align: center;
	}

	.tips {
		width: 100%;
	}

	.redFont {
		font-size: 35upx;
	}

	.tips text {
		margin-top: 20upx;
		width: 100%;
		display: block;
		text-align: center;
		line-height: 50upx;
		color: #999999;
	}

	.pop {
		width: 70%;
		height: auto;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 48upx 24upx;
		box-sizing: border-box;
		background: #E5E5E5;
		border-radius: 20upx;
	}

	/*.popContent{
		position: relative;
		bottom: 0;
		margin: 0;
		background-color: transparent;
	}*/
	.popContent {
		position: relative;
		bottom: 0;
		margin: 0;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-left: -120upx;
		background-color:#EEEEEE ;
		width: 300upx;
		height: 220upx;
	}
	.imglxy1{
		margin: 0upx auto;
	}

	.popContent text {
		display: block;
		width: 100%;
		text-align: center;
		line-height: 200%;
		margin: 0;
		padding: 0;
	}

	.iptNum {
		font-size: 28upx;
		width: 60%;
	}

	.screenShot {
		width: 150upx;
		height: 150upx;
		margin: 0 24upx;
	}
</style>
