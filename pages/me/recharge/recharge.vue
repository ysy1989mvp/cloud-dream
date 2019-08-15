<template>
	<view class="container">
		<view class="content">
			<view class="part">
				<text class="part1">充值金额</text>
				<view class="a">
					<view class="part2">￥</view>
					<input class="part3" v-model="sum_money"></input>
				</view>
			</view>
			<view class="line_">
				<text class="tex" @click="sum_number(100)">100</text>
				<text class="tex" @click="sum_number(300)">300</text>
				<text class="tex" @click="sum_number(500)">500</text>
				<text class="tex" @click="sum_number(1000)">1000</text>
				<text class="tex" @click="sum_number(3000)">3000</text>
				<text class="tex" @click="sum_number(5000)">5000</text>
			</view>

			<view class="line_">
				<label class="tex_title">其他金额：</label>
				<input class="lxy" placeholder="自定义金额"></input>
			</view>
			<view class="bottom" @click="showThePop">
				<button class="bottom_btn">确认充值</button>
			</view>
		</view>

		<!-- 弹窗 -->
		<view class="pop" v-show="showPop">
			<view class="popContent">
				<!-- <image src="https://public.zgscdx.cn/hyj_admin/img_msg_success.png"></image>
				<text class="popText">你已成功回复留言！</text>
				<view class="popButtons">
					<text class="popCancel" @click="hidePops">取消</text>
					<text class="popSure" @click="saveRecord">确定</text>
				</view> -->

				<text class="tex bigFont title">选择支付方式</text>
				<view class="payPath">
					<view @click="showThePop">
						<image src="../../../static/lyl/02@3x_pay.png" mode="aspectFit"></image>
						<text class="tex">微信支付</text>
					</view>
					<view @click="showThePop">
						<image src="../../../static/lyl/03@3x_pay.png" mode="aspectFit"></image>
						<text class="tex">支付宝支付</text>
					</view>
					<view @click="showThePop">
						<image src="../../../static/lyl/01@3x_pay.png" mode="aspectFit"></image>
						<text class="tex">扫码支付</text>
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sum_money:0,
				showPop: false,
			}
		},
		methods: {
			showThePop() {
				this.showPop = !this.showPop;
			},
			sum_number(money){
				this.sum_money = money;
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		background-color: #FFFFFF;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.line_ {
		width: 100%;
		padding: 50upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: -50upx 0;
		margin-top: 200upx;
	}

	.line_ .tex {
		width: 15%;
		background-color: #E5E5E5;
		padding: 6upx 12upx;
		border-radius: 10upx;
		margin: 12upx;
		text-align: center;
	}

	.tex_title {
		font-size: 26upx;
	}

	.title {
		display: block;
		width: 100%;
		text-align: center;
		font-size: 32upx;
		line-height: 50upx;
		margin-bottom: 24upx;
	}

	.popContent {
		padding: 24upx;
	}

	.payPath {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.payPath view {
		width: 33.33%;
	}

	.payPath image {
		display: block;
		height: 100upx;
		height: 75upx;
		margin: 0 auto;
	}

	.payPath text {
		display: block;
		width: 100%;
		text-align: center;
		line-height: 35upx;
		margin-top: 24upx;
	}

	.part {
		width: 100%;
		height: 30upx;
		padding-top: 80upx;
		margin-left: 60upx;
	}

	.part2 {
		margin-left: 55upx;
	}

	.part1 {
		width: 100%;
		font-size: 30upx;
		font-weight: bold;
	}

	.part3 {
		width: 80%;
		height: 40upx;
		background-color: #FFFFFF;
		border: #FFFFFF;
		font-size: 26upx;
		margin-right: 150upx;
		border-bottom: 1upx solid #a5a5a5;
		margin-left: 15upx;
		border-radius: 0upx ;

	}

	.a {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 16upx;
		margin-top: 50upx;
		border-bottom: 15upx solid #E5E5E5;
		border-radius: 0upx;
		padding-bottom: 50upx;
		margin-left: -60upx;
	}

	.bottom_btn {
		background-color: #1BCC8D;
		color: #FFFFFF;
	}

	.lxy {
		height: 40upx;
		width: 320upx;
	}
</style>
