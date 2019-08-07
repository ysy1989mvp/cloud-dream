<template>
	<view class="container">
		<view class="content">
			<view class="part_">
				<!-- <view class="userInfo">
					<image src="../../../static/lyl/12.png" mode="aspectFit"></image>
					<text class="tex whiteFont">999999999【VIP】会员</text>
					<text class="tex whiteFont">编号：9999</text>
				</view> -->
				<!-- <view class="sign">
					<image src="../../../static/lyl/11@3x.png" mode="aspectFit"></image>
					<text class="tex bigFont whiteFont">签到</text>
				</view> -->
				<image class="topImg" src="../../../static/lyl/01_channel.png" mode="aspectFit"></image>
				<view class="part_float">
					<view>
						<image src="../../../static/lyl/02_channel.png" mode="aspectFit" style="width: 100upx;height: 100upx;border-radius: 50%;"></image>
					</view>
					<view class="theCounts">
						<text class="tex bigFont">18245547551</text>
						<view>
							<text class="tex">角色：</text>
							<text class="tex bigFont redFont">渠道商</text>
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="_part">
				<view class="thisPart purplePart">
					<text class="tex bigFont">渠道收益</text>
					<text class="tex">24000</text>
					<text class="tex" @click="toChannelSave">明细</text>
				</view>
				<view class="thisPart violetPart">
					<text class="tex bigFont">渠道收益</text>
					<text class="tex">24000</text>
				</view>
				<view class="thisPart bluePart">
					<text class="tex bigFont">渠道收益</text>
					<text class="tex">24000</text>
					<text class="tex redFont" @click="toMyAgent">查看</text>
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
			toMyRelease(){
				uni.navigateTo({
					url:"../my-release/my-release"
				})
			},
			toAccountManage(){
				uni.navigateTo({
					url:"../account-manage/account-manage"
				})
			},
			toHelpCenter(){
				uni.navigateTo({
					url:"../help-center/help-center"
				})
			},
			toTaskRecords(){
				uni.navigateTo({
					url:"../task-records/task-records"
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
			toChannel(){
				uni.navigateTo({
					url:"../channel-merchants/channel-merchants"
				})
			},
			toHowSave(){
				uni.navigateTo({
					url:"../how-save/how-save"
				})
			},
			toHowRelease(){
				uni.navigateTo({
					url:"../how-release/how-release"
				})
			},
			toChannelSave(){
				uni.navigateTo({
					url:"../channel-save/channel-save"
				})
			},
			toMyAgent(){
				uni.navigateTo({
					url:"../my-agent/my-agent"
				})
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");
	.content{
		width: 100%;
		background-color: #FFFFFF;
		position: relative;
	}
	
	.userInfo{
		width: 50%;
		position: absolute;
		top: 100upx;
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
		width: 175upx;
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
		padding: 0 12upx;
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
		bottom: -50upx;
	}
	
	.part_float .left_img_tex{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.part_float .theCounts{
		width: 80%;
	}
	
	.part_float view{
		width: auto;
	}
	
	.part_float view text{
		text-align: left;
		display: inline;
		width: auto;
	}
	
	.part_float view image,.line image{
		width: 50upx;
		height: 50upx;
	}
	
	.line{
		height: 100upx;
		border-bottom: 1upx solid #E5E5E5;
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
		width:50upx;
		height: 50upx;
		border-radius: 50%;
		color: white;
		background-color: red;
		line-height: 50upx;
		text-align: center;
	}
	
	._part{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.thisPart{
		width: 30%;
		height: 300upx;
		padding: 24upx;
		box-sizing: border-box;
		border-radius: 20upx;
	}
	
	.thisPart .tex{
		display: block;
	}
	
	.purplePart{
		background-color: #0000FF;
	}
	
	.violetPart{
		background-color: #E80080;
	}
	
	.bluePart{
		background-color: #0A98D5;
	}
	
	.thisPart .tex{
		color: #FFFFFF;
		line-height: 200%;
	}
	
	.thisPart .redFont{
		color: red;
	}

</style>
