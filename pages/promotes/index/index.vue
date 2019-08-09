<template>
	<view class="container">
		<view class="content">
			<view class="part_">
				<image class="topImg" src="../../../static/image/_11.png" mode="aspectFill"></image>
				<view class="part_float">
					<view>
						<image src="../../../static/image/01@2x.png"></image>
					</view>
					<view>
						<text class="tex bigFont">等级</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view>
						<text class="tex bigFont">团队总人数</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view  @click="prentice">
						<text class="tex bigFont">徒弟数</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view @click="awarddetail">
						<text class="tex bigFont">累计收益</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
				</view>
			</view>
			
			<view class="_part">
				<view class="line">
					<view>
						<text class="tex bigFont">任务收入：</text>
						<text class="tex redFont bigFont">25.5</text>
					</view>
					<button class="small_btn">更多金币</button>
				</view>
				<view class="line">
					<view>
						<text class="tex">总任务奖金：</text>
						<text class="tex">25.5</text>
					</view>
					<text class="tex">总团队奖：500</text>
				</view>
				<view class="line">
					<view>
						<text class="tex">总收单奖：</text>
						<text class="tex">25.5</text>
					</view>
					<text class="tex">总渠道经理奖：500</text>
				</view>
			</view>
			
			<view class="bottom">
				<button class="bottom_btn" @click="promotes">推荐会员/享永久收益</button>
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
			promotes: function() {
				uni.navigateTo({
					url: '../QRCode/index/index',
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			},
			awarddetail: function() {
				uni.navigateTo({
					url: '../awarddetail/index',
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			},
			prentice: function() {
				uni.navigateTo({
					url: '../prentice/index',
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			}
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
	.bottom{
		color: #1BCC8D;
	}
	.bottom_btn{
		color: #FFFFFF;
		font-size: 34upx;
		background-color: #1BCC8D
		
	}
	._part{
		border-bottom:1upx solid #F5F5F5 ;
		padding-bottom: 60upx;
	}
	.container{
		background-color:#FFFFFF ;
	}

</style>
