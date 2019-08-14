<template>
	<view class="container">
		<view class="content">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(item1,index) in data.banner" :key="index" @click="navito(item1.target_url)">
								<!-- <view class="swiper-item uni-bg-red">
									<image src="../../../static/image/15.png" mode="aspectFill"></image>
								</view> -->
								<image class="scroll_img" :src="defaultURL+item1.thumb_image" mode="aspectFill"></image>
							</swiper-item>

						</swiper>
					</view>
				</view>
			</view>

			<view class="notice">
				<view class="img_and_text">
					<image src="../../../static/image/11-@2x.png" mode="aspectFill"></image>
					<text class="tex">{{data.help[0].content}}</text>
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
					<image src="../../../static/image/04@2x.png" @click="howsave" mode="aspectFill"></image>
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
					<view class="tex redFont textysy li" v-for="(item,index) in marqueeList" :key="index">{{item.content}}</view>
				</view>
			</view>
			<!-- <view class="part part_splitMoney">
				
			</view> -->

			<view class="part part_lower" v-for="(item,index) in data.task" :key="index" @click="task_detail(item.id)">
				<view class="left">
					<image v-if="item.task_images.length<1" src="../../../static/image/_04.png"></image>
					<image v-if="item.task_images.length>0" :src="defaultURL+item.task_images[0]"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">{{item.task_no}} {{item.title}}</text>
					<view>
						<text class="tex addMargin">抖客</text>
						<text class="tex redFont" v-if="item.scope<1">不限</text>
						<text class="tex redFont" v-if="item.scope>0">VIP以上可接</text>
					</view>
					<view>
						<text class="tex addMargin">剩余：{{item.remain_count}}</text>
						<text class="tex">{{item.endTimeHour}}小时后结束</text>
					</view>
				</view>
				<button class="btn">{{item.publish_price}}元</button>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animate: false,
				marqueeList:[],
				// defaultURL:'http://cdn.douke.51dreaming.com',
				defaultURL:this.util.uploaddata.cdnurl,
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				data: null,
			}
		},
		created: function() {
			setInterval(this.showMarquee, 2000)
		},
		onLoad() {
			let params = {};
			let url = "/api/index/index";
			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						this.marqueeList = this.data.notice;
						console.log(JSON.stringify(this.data));
					} else {
						this.util.showWindow("后台请求失败");
					}
				} else {
					this.util.showWindow("请求失败");
				}
			});
		},
		mounted() {
			
			// uni.navigateTo({
			// 	url:"../../me/vip-center/vip-center"
			// })
		},
		methods: {
			navito(url){
				window.location.href = url;
			},
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
			task_detail(id) {
				uni.navigateTo({
					url: "../../me/task-detail/task-detail?id="+id
				})
			},
			howsave: function() {
				uni.navigateTo({
					url: "../../me/how-save/how-save"
				})
			},
			showMarquee: function() {
				this.animate = true;
				setTimeout(() => {
					this.marqueeList.push(this.marqueeList[0]);
					this.marqueeList.shift();
					this.animate = false;
				}, 500)
			},

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
