<template>
	<view class="container">
		<view class="content">
			<view class="part_">
				<image class="topImg" src="../../../static/image/_11.png" mode="aspectFit"></image>
				<view class="part_float">
					<view>
						<view class="left_img_tex">
							<image src="../../../static/image/_08@2x.png" mode="aspectFit"></image>
							<text class="tex">余额</text>
						</view>
						<text class="tex bigFont">244</text>
					</view>
					<view>
						<text class="tex bigFont">充值</text>
						<text class="tex bigFont redFont">提现</text>
					</view>
				</view>
			</view>
			
			<view class="_part">
				<view class="line" v-for="item in 7">
					<view>
						<image src="../../../static/image/_01@2x.png" mode=""></image>
						<text class="tex">我的发布：</text>
					</view>
					<view>
						<text class="tex redFont">去开通</text>
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

</style>
