<template>
	<view class="container">
		<view class="content" @click="toVipCenter">
			<view class="line_">
				<text class="tex">100</text>
				<text class="tex">100</text>
				<text class="tex">100</text>
				<text class="tex">100</text>
				<text class="tex">100</text>
				<text class="tex">100</text>
			</view>
			<view class="line_">
				<label class="tex_title">其他金额：</label>
				<text class="tex">000</text>
			</view>
			<view class="bottom">
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
					<view>
						<image src="../../../static/image/02@2x.png"></image>
						<text class="tex">微信支付</text>
					</view>
					<view>
						<image src="../../../static/image/02@2x.png"></image>
						<text class="tex">支付宝支付</text>
					</view>
					<view>
						<image src="../../../static/image/02@2x.png"></image>
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
				showPop:true,
			}
		},
		methods: {
			toVipCenter(){
				uni.navigateTo({
					url:"../vip-center/vip-center"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");
	.content{
		background-color: #FFFFFF;
		height: 100vh;
	}
	
	.line_{
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		 flex-wrap: wrap;
		 margin: 24upx 0;
		 margin-top: 0;
	}
	
	.line_ .tex{
		width: 15%;
		background-color: #E5E5E5;
		padding: 6upx 12upx;
		border-radius: 10upx;
		margin: 12upx;
		text-align: center;
	}
	
	.tex_title{
		font-size: 26upx;
	}
	
	.title{
		display: block;
		width: 100%;
		text-align: center;
		font-size: 32upx;
		line-height: 50upx;
		margin-bottom: 24upx;
	}
	
	.popContent{
		padding: 24upx;
	}
	
	.payPath{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.payPath view{
		width: 33.33%;
	}
	
	.payPath image{
		display: block;
		height: 100upx;
		height: 75upx;
		margin: 0 auto;
	}
	
	.payPath text{
		display: block;
		width: 100%;
		text-align: center;
		line-height: 35upx;
		margin-top: 24upx;
	}

</style>
