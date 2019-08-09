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
				<!-- <text class="tex close">X</text> -->
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
					<image src="../../../static/image/03@2x.png" @click="becomevip" mode="aspectFill"></image>
					<text class="tex">成为VIP</text>
				</view>
				<view class="skilled_part">
					<image src="../../../static/image/05@2x.png" @click="help" mode="aspectFill"></image>
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

			<view class="part ysypart">
				<view class="part_img">
					<image src="../../../static/image/12.png" mode=""></image>
				</view>
				<view class="part_img small_img">
					<image src="../../../static/image/13.png" mode=""></image>
					<image src="../../../static/image/14.png" mode=""></image>
				</view>
			</view>
			<view class="marquee_box">
				<view class="marquee_list" :class="{marquee_top:animate}">
					<view class="tex redFont textysy li"  v-for="item in 5">现于2012-01-01成功提现100元</view>
				</view>
			</view>
			<!-- <view class="part part_splitMoney">
				
			</view> -->

			<view class="part part_lower" v-for="item in 3" @click="task_detail">
				<view class="left">
					<image src="../../../static/image/_04.png"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">1000 抖音兼职播报</text>
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
				animate: false,
				marqueeList:
				[
				    {
				        name: '1军',
				        city: '北京',
				        amount: '10'
				    },
				    {
				        name: '2军',
				        city: '上海',
				        amount: '20'
				    },
				    {
				        name: '3军',
				        city: '广州',
				        amount: '30'
				    },
				    {
				        name: '4军',
				        city: '重庆',
				        amount: '40'
				    }
				],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		 created: function () {
            setInterval(this.showMarquee, 2000)
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
			},
			help() {
				uni.navigateTo({
					url: '../help/index',
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			},
			becomevip() {
				uni.navigateTo({
					url: '../becomevip/index/index',
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			},
			task_detail() {
				uni.navigateTo({
					url: "../../me/task-detail/task-detail"
				})
			},
			showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)}
		}
	}
</script>

<style>
	.container {
		width: 100%;
	}

	.content {
		width: 100%;
	}

	.uni-padding-wrap {
		background-color: #999999;
		padding: 0 !important;
		width: 100%;
		height: 300upx;
	}



	.scroll_img {
		width: 100%;
		height: 100%;
	}

	.notice {
		width: 100%;
		padding: 12upx 24upx;
		background-color: #FFF0bc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.notice text {
		font-size: 26upx;
		color: red;
	}

	.ysypart {
		margin-bottom: 20upx;
	}

	.notice image {
		width: 50upx;
		height: 50upx;
	}

	.img_and_text {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.tex {
		font-size: 26upx;
	}

	.redFont {
		color: red;
	}

	.bigFont {
		font-weight: bold;
	}

	.skilled {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 24upx;
	}

	.skilled_part {
		width: 20%;
	}

	.skilled_part image,
	.skilled_part text {
		display: block;
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}

	.skilled_part image {
		width: 75upx;
		height: 75upx;
		margin-bottom: 12upx;
	}

	.part {
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 200upx;
		background-color: #FFFFFF;
	}

	.part_splitMoney {
		height: auto;
		background: transparent;
		border-bottom: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		margin-top: 10upx;
		height: 90upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}

	.part_img {
		width: 50%;
		height: 210upx;
	}

	.part_img image {
		height: 100%;
		width: 100%;
	}

	.small_img {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.small_img image {
		height: 50%;
		width: 100%;
	}

	.part_lower {
		height: auto;
		margin-bottom: 5upx;
		border-bottom: 1px solid #f5f5f5;
	}

	.left image {
		width: 120upx;
		height: 120upx;
		margin-right: 24upx;
		margin-top: 21upx;
	}

	.btn {
		height: 45upx;
		line-height: 45upx;
		font-size: 26upx;
		text-align: center;
		background-color: #FFFFFF;
		border-radius: 35upx;
		padding: 0 24upx;
		border: 1upx solid red;
		color: red;
	}

	.addMargin {
		margin-right: 24upx;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		height: 120upx;
		margin-left: 20upx;
	}

	.right>view {
		height: 40upx;
		line-height: 40upx;
	}

	.textysy {
		margin-bottom: 12upx;
	}

	.marquee_box {
		display: block;
		position: relative;
		width: 100%;
		height: 30px;
		overflow: hidden;
	}

	.marquee_list {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}

	.marquee_top {
		transition: all 0.5s;
		margin-top: -30px
	}

	.marquee_list .li {
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		padding-left: 20px;
	}

</style>
