<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h">
			<view class="line_inner">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="container">
			<!-- 抖音 -->
			<view v-show="tabIndex==0" class="part part_lower" v-for="a in 15">
				<view class="left">
					<image :src="imgs[a]"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">【2501】任务标题0</text>
					<view>
						<text class="tex douyin">抖音</text>
					</view>
					<view class="small">
						<text class="tex">剩余：321456</text>
						<text class="tex" style="margin-left: 40upx;">12小时后结束</text>
					</view>
				</view>
				<button class="btn">¥1.00</button>
			</view>

			<!-- 朋友圈 -->
			<view v-show="tabIndex==1" class="part part_lower" v-for="a in 4">
				<view class="left">
					<image :src="imgs[a]"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">【2501】任务标题1</text>
					<view>
						<text class="tex douyin">抖音</text>
					</view>
					<view class="small">
						<text class="tex">剩余：321456</text>
						<text class="tex" style="margin-left: 40upx;">12小时后结束</text>
					</view>
				</view>
				<button class="btn">¥1.00</button>
			</view>
			<!-- 关注 -->
			<view v-show="tabIndex==2" class="part part_lower" v-for="a in 4">
				<view class="left">
					<image :src="imgs[a]"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">【2501】任务标题2</text>
					<view>
						<text class="tex douyin">抖音</text>
					</view>
					<view class="small">
						<text class="tex">剩余：321456</text>
						<text class="tex" style="margin-left: 40upx;">12小时后结束</text>
					</view>
				</view>
				<button class="btn">¥1.00</button>
			</view>
		</view>
	<view class="loading">{{loadingText}}</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgs: [],
				tabIndex: 0,
				pageSize: 0,
				loadingText: '加载更多...',
				tabBars: [{
					name: '抖音',
					id: 'dou'
				}, {
					name: '朋友圈',
					id: 'friends'
				}, {
					name: '关注',
					id: 'guanzhu'
				}]
			}
		},
		onLoad: function(options) {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
		},
		// 下拉方法
		onPullDownRefresh() {
			console.log('下拉刷新');
			this.pageSize = 0;
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
			this.loadingText = "加载更多"
		},
		// xia划方法
		onReachBottom: function() {
			console.log("下划")
			this.pageSize++;
			this.loadingText = "没有更多了"
		},
		methods: {
			getImgList(index) {
				this.imgs = [];
				switch (index) {
					case "0":
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/task/douying/" + i + ".png")
						}
						break;
					case "1":
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/task/friends/" + i + ".png")
						}
						break
					default:
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/task/guanzhu/" + i + ".png")
						}
						break;
				}
			},
			// 切换触发
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.tabIndex = index
				this.getImgList(index)
				console.log(index)
			}
		},
		mounted() {
			this.getImgList(0);
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		display: flex;
	}


	.bigFont {
		font-weight: bold;
	}

	.loading {
		text-align: center;
		line-height: 80upx;
		color: #929292;
	}

	.douyin {
		color: red;
	}

	.right {
		line-height: 40upx;
	}

	.btn {
		height: 40upx;
		line-height: 40upx;
		font-size: 30upx;
		text-align: center;
		background-color: #FFFFFF;
		border-radius: 35upx;
		padding: 0 24upx;
		border: 1upx solid red;
		color: red;
	}

	.part_lower {
		height: auto;
		margin-bottom: 12upx;
	}

	.left image {
		width: 152upx;
		height: 152upx;
		margin-right: 24upx;
	}

	.tex {
		font-size: 26upx;
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

	.tabs {
		flex: 1;
		flex-direction: column;
		/* overflow: hidden; */
		background-color: #ffffff;
		position: relative;
		height: 100%;
		background-color: #EEEEEE;
	}

	.line_inner {
		text-align: center;
	}

	.scroll-h {
		width: 750upx;
		height: 80upx;
		flex-direction: row;
		white-space: nowrap;
		background-color: #FFFFFF;
		position: fixed;
		z-index: 10;
	}

	.container {
		margin-top: 50px;
	}


	/* 每个导航框 */
	.uni-tab-item {
		display: inline-block;
		flex-wrap: nowrap;
		border-bottom: 2upx red solid;
		padding-left: 34upx;
		padding-right: 34upx;
	}

	.uni-tab-item-title {
		color: rgb(110, 107, 107);
		font-size: 36upx;
		height: 80upx;
		line-height: 80upx;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.uni-tab-item-title-active {
		border-bottom: #1BCC8D 8upx solid;
	}
</style>
