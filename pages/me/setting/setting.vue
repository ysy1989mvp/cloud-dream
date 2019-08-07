<template>
	<view class="container">
		<view class="content">
			
			<view class="_part">
				<view class="line">
					<view>
						<!-- <image src="../../../static/lyl/02@3x.png" mode=""></image> -->
						<text class="tex">头像修改：</text>
					</view>
					<view>
						<!-- <image src="../../../static/lyl/04@3x.png" mode=""></image> -->
						<text class="tex">&gt;</text>
					</view>
				</view>
				<view class="line" @click="toChangeInfo">
					<view>
						<!-- <image src="../../../static/lyl/04@3x.png" mode=""></image> -->
						<text class="tex">资料修改：</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex">&gt;</text>
					</view>
				</view>
				<view class="line">
					<view>
						<!-- <image src="../../../static/lyl/05@3x.png" mode=""></image> -->
						<text class="tex">检查更新：</text>
					</view>
					<view>
						<text class="tex redFont redCircle">NEW</text>
						<text class="tex">&gt;</text>
					</view>
				</view>
				<view class="line">
					<view>
						<!-- <image src="../../../static/lyl/07@3x.png" mode=""></image> -->
						<text class="tex">通知设置：</text>
					</view>
					<view>
						<switch checked=""></switch>
						<text class="tex">&gt;</text>
					</view>
				</view>
				<view class="line">
					<view>
						<!-- <image src="../../../static/lyl/08@3x.png" mode=""></image> -->
						<text class="tex">关于我们：</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex">&gt;</text>
					</view>
				</view>
				
				
				
			</view>
			
			<!-- <view class="bottom">
				<button class="bottom_btn">推荐会员/享永久收益</button>
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
			},
			toHelpCenter(){
				uni.navigateTo({
					url:"../help-center/help-center"
				})
			},
			
			toWithdrawal(){
				uni.navigateTo({
					url:"../withdrawal/withdrawal"
				})
			},
			toSetting(){
				uni.navigateTo({
					url:"../setting/setting"
				})
			},
			toChangeInfo(){
				uni.navigateTo({
					url:"../change-info/change-info"
				})
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");
	.content{
		width: 100%;
		position: relative;
	}
	
	._part{
		padding: 0;
	}
	
	.userInfo{
		width: 50%;
		position: absolute;
		top: 150upx;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.userInfo image,.userInfo .tex{
		display: block;
		text-align: center;
		margin: 0 auto;
		line-height: 75upx;
	}
	
	.userInfo image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	
	.userInfo .tex{
		width: 100%;
	}
	
	.sign{
		width: 200upx;
		height: 75upx;
		background: rgba(0,0,0,0.5);
		top: 200upx;
		right: 0upx;
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		padding: 0 24upx;
		box-sizing: border-box;
	}
	
	.sign image{
		width: 50upx;
		height: 50upx;
		margin-right: 12upx;
	}
	
	.part_float{
		padding: 48upx 24upx;
		box-sizing: border-box;
	}
	
	.part_float .left_img_tex{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.part_float view image,.line image{
		width: 50upx;
		height: 50upx;
	}
	
	.line{
		height: 100upx;
		/* border-bottom: 1upx solid #E5E5E5; */
		background-color: #FFFFFF;
		padding: 0 24upx;
		box-sizing: border-box;
		margin-top: 24upx;
	}
	
	.line view{
		display: flex;
		align-items: center;
	}
	
	.line image{
		margin-right: 12upx;
	}
	
	.tex{
		font-size: 35upx;
	}
	
	.redFont{
		margin-right: 12upx;
		font-size: 28upx;
	}
	
	.whiteFont{
		color: #FFFFFF;
	}
	
	.redCircle{
		height: 50upx;
		border-radius: 30upx;
		color: white;
		background-color: red;
		line-height: 45upx;
		text-align: center;
		padding: 0 12upx;
	}

</style>
