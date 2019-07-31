<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view class="line_inner">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="container">
			<!-- 抖音 -->
			<view v-if="tabIndex==0" class="part part_lower" v-for="a in 4">
				<view class="left">
					<image :src="imgs[a-1]"></image>
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
			<view v-if="tabIndex==1" class="part part_lower" v-for="a in 4">
				<view class="left">
					<image :src="imgs[a-1]"></image>
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
			<view v-if="tabIndex==2" class="part part_lower" v-for="a in 4">
				<view class="left">
					<image :src="imgs[a-1]"></image>
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
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgs: [],
				tabIndex: 0,
				tabBars: [{
					name: '抖音',
					id: 'dou'
				}, {
					name: '朋友圈',
					id: 'friends'
				}, {
					name: '关注',
					id: 'guanzhu'
				}],
				scrollInto: "",
				showTips: false,
				navigateFlag: false,
				pulling: false,
				refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==",
				loadingIcon: "data:image/gif;base64,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"
			}
		},
		onLoad() {

		},

		methods: {
			getImgList(index) {
				this.imgs = [];
				console.log(this.imgs)
				switch (index) {
					case "0":
					console.log(0)
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/douying/" + i + ".png")
						}
						break;
					case "1":
					console.log(1)
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/friends/" + i + ".png")
						}
						break
					default:
					console.log(2)
						for (var i = 0; i < 5; i++) {
							this.imgs.push("../../../static/cdnImg/guanzhu/" + i + ".png")
						}
						break;
				}
				console.log(this.imgs)

			},
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.tabIndex = index
				console.log(e)
				this.getImgList(index)
			},
			ontabchange(e) {
				let index = e.target.current || e.detail.current;
				this.switchTab(index);
			},
			switchTab(index) {

			},
			clearTabData(e) {
				this.newsList[e].data.length = 0;
				this.newsList[e].loadingText = "加载更多...";
			},
			refreshData() {},
			onrefresh(e) {
				var tab = this.newsList[this.tabIndex];
				if (!tab.refreshFlag) {
					return;
				}
				tab.refreshing = true;
				tab.refreshText = "正在刷新...";

				setTimeout(() => {
					this.refreshData();
					this.pulling = true;
					tab.refreshing = false;
					tab.refreshText = "已刷新";
					setTimeout(() => { // TODO fix ios和Android 动画时间相反问题
						this.pulling = false;
					}, 500);
				}, 2000);
			},
			onpullingdown(e) {
				var tab = this.newsList[this.tabIndex];
				if (tab.refreshing || this.pulling) {
					return;
				}
				if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
					tab.refreshFlag = true;
					tab.refreshText = "释放立即刷新";
				} else {
					tab.refreshFlag = false;
					tab.refreshText = "下拉可以刷新";
				}
			},
			newGuid() {
				let s4 = function() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
				}
				return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
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
		min-height: 100%;
		display: flex;
	}

	.bigFont {
		font-weight: bold;
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
		overflow: hidden;
		background-color: #ffffff;
		height: 100vh;
		background-color: #EEEEEE;
	}

	.line_inner {
		text-align: center;
	}

	.scroll-h {
		width: 750upx;
		height: 80upx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
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
