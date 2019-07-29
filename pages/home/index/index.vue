<template>
	<view class="container">
		<view class="content">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<!-- <view class="swiper-item uni-bg-red">
									<image src="../../../static/image/15.png" mode="aspectFill"></image>
								</view> -->
								<image class="scroll_img" src="../../../static/image/15.png" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<!-- <view class="swiper-item uni-bg-green">
									<image src="../../../static/image/15.png" mode="aspectFill"></image>
								</view> -->
								<image class="scroll_img" src="../../../static/image/15.png" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<!-- <view class="swiper-item uni-bg-blue">
									<image src="../../../static/image/15.png" mode="aspectFill"></image>
								</view> -->
								<image class="scroll_img" src="../../../static/image/15.png" mode="aspectFill"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			
			<view class="notice">
				<view class="img_and_text">
					<image src="../../../static/image/11-@2x.png" mode="aspectFill"></image>
					<text class="tex">快速来看一些赚钱的小技巧</text>
				</view>
				<text class="tex close">X</text>
			</view>
			
			<view class="skilled">
				<view class="skilled_part">
					<image src="../../../static/image/02@2x.png" mode="aspectFill"></image>
					<text class="tex">抖音赚钱</text>
				</view>
				<view class="skilled_part">
					<image src="../../../static/image/01@2x.png" mode="aspectFill"></image>
					<text class="tex">朋友圈分享</text>
				</view>
				<view class="skilled_part">
					<image src="../../../static/image/04@2x.png" mode="aspectFill"></image>
					<text class="tex">如何赚钱</text>
				</view>
				<view class="skilled_part">
					<image src="../../../static/image/03@2x.png" mode="aspectFill"></image>
					<text class="tex">成为VIP</text>
				</view>
				<view class="skilled_part">
					<image src="../../../static/image/05@2x.png" mode="aspectFill"></image>
					<text class="tex">帮助中心</text>
				</view>
			</view>
			
			<!-- <view class="part">
				<image class="part_img big_img" src="../../../static/image/12.png" mode="aspectFill"></image>
				<view class="part_img image_small">
					<image src="../../../static/image/13.png" mode="aspectFill" class="samll_img"></image>
					<image src="../../../static/image/14.png" mode="aspectFill" class="small_img"></image>
				</view>
			</view> -->
			
			<view class="part">
				<view class="part_img">
					<image src="../../../static/image/12.png" mode=""></image>
				</view>
				<view class="part_img small_img">
					<image src="../../../static/image/13.png" mode=""></image>
					<image src="../../../static/image/14.png" mode=""></image>
				</view>
			</view>
			
			<view class="part part_splitMoney">
				<text class="tex redFont">现于2012-01-01成功提现100元</text>
			</view>
			
			<view class="part part_lower" v-for="item in 3">
				<view class="left">
					<image src="../../../static/image/_04.png"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">【2501】抖音兼职播报</text>
					<view>
						<text class="tex addMargin">抖客</text>
						<text class="tex redFont">vip可做</text>
					</view>
					<view>
						<text class="tex addMargin">剩余：321456</text>
						<text class="tex">12小时后结束</text>
					</view>
				</view>
				<button class="btn">3元</button>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		mounted() {
			// uni.navigateTo({
			// 	url:"../../me/vip-center/vip-center"
			// })
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.container{
		width: 100%;
	}
	
	.content{
		width: 100%;
	}
	
	.uni-padding-wrap{
		background-color: #999999;
		padding: 0 !important;
		width: 100%;
	}
	
	.scroll_img{
		width: 100%;
		height: 100%;
	}
	
	.notice{
		width: 100%;
		padding: 12upx 24upx;
		background-color: orange;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	
	.notice text{
		font-size: 26upx;
		color: red;
	}
	
	.notice image{
		width: 50upx;
		height: 50upx;
	}
	
	.img_and_text{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.tex{
		font-size: 26upx;
	}
	
	.redFont{
		color: red;
	}
	
	.bigFont{
		font-weight: bold;
	}
	
	.skilled{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 24upx;
	}
	
	.skilled_part{
		width: 20%;
	}
	
	.skilled_part image,.skilled_part text{
		display: block;
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}
	
	.skilled_part image{
		width: 75upx;
		height: 75upx;
		margin-bottom: 12upx;
	}
	
	.part{
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 200upx;
		background-color: #FFFFFF;
	}
	
	.part_splitMoney{
		height: auto;
		background: transparent;
	}
	
	.part_img{
		width: 49%;
		height: 152upx;
	}
	
	.part_img image{
		height: 100%;
		width: 100%;
	}
	
	.small_img image{
		height: 49%;
		width: 100%;
	}
	
	.part_lower{
		height: auto;
		margin-bottom: 12upx;
	}
	
	.left image{
		width: 152upx;
		height: 152upx;
		margin-right: 24upx;
	}
	
	.btn{
		height: 70upx;
		line-height: 70upx;
		font-size: 40upx;
		text-align: center;
		background-color: #FFFFFF;
		border-radius: 35upx;
		padding: 0 24upx;
		border: 1upx solid red;
		color: red;
	}
	
	.addMargin{
		margin-right: 24upx;
	}
	
	
</style>
