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
			<view class="part part_lower" v-for="(item,index) in data" :key="item.id" @click="taskDetail(item.id)">
				<view class="left" v-if="item.task_images.length>0">
					<image :src="imgurl+item.task_images[0]"></image>
				</view>
				<view class="left" v-if="item.task_images.length<1">
					<image :src="defaultImgSrc"></image>
				</view>
				<view class="right">
					<text class="tex bigFont">【{{item.task_no}}】{{item.title}}</text>
					<view>
						<text class="tex douyin">{{item.type_name}}</text>
					</view>
					<view class="small">
						<text class="tex">剩余：{{item.remain_count}}</text>
						<text class="tex" style="margin-left: 40upx;">{{item.endtime_text}}</text>
					</view>
				</view>
				<button class="btn">¥{{item.publish_price}}元</button>
			</view>

		</view>
		<view class="loading">{{loadingText}}</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgurl: this.util.uploaddata.cdnurl,
				defaultImgSrc: '../../../static/image/yangsongyan/release02/01.png',
				tabIndex: 0,
				pageSize: 0,
				loadingText: '',
				tabBars: [{
					name: '抖音点评转',
					id: 'dou'
				}, {
					name: '抖音点评',
					id: 'friends'
				}, {
					name: '朋友圈',
					id: 'guanzhu'
				}],
				data: []
			}
		},
		onLoad: function(options) {
			setTimeout(function() {
				// console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
			let params = {
				"task_type_id": 1
			};
			let url = "/api/task";
			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						// console.log(JSON.stringify(this.data));
					} else {
						this.util.showWindow("注册失败");
					}
				} else {
					this.util.showWindow("注册请求失败");
				}
			});
		},
		// 下拉方法
		onPullDownRefresh() {
			// console.log('下拉刷新');
			this.pageSize = 0;
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
			// this.loadingText = "下拉刷新"
		},
		// xia划方法
		onReachBottom: function() {
			// console.log("下划")
			this.pageSize++;
			// this.loadingText = "没有更多了"
		},
		methods: {
			taskDetail(id) {
				uni.navigateTo({
					url:"../task-detail/task-detail?id="+id
				})
			},
			// 切换触发
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.tabIndex = index
				let params = {
					"task_type_id": this.tabIndex + 1
				};
				let url = "/api/task";
				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.data = res.data.data;
						} else {
							this.util.showWindow("请求失败");
						}
					} else {
						this.util.showWindow("请求失败");
					}
				});

			}
		},
		mounted() {}
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
		-webkit-line-clamp: 1;
		/* // 限制显示的文本的行数为3 */
		-webkit-box-orient: vertical;
		/* // 水平排列<p>，使其不纵向显示 */
		word-break: break-all;
		/* // 使<p>中的文字换行 */
		overflow: hidden;
		/* // 超出的文字部分隐藏 */
		text-overflow: ellipsis;
		/* // 超出的文字部分用...来显示 */
		display: -webkit-box;
		/* // 将<p>变成高度定死，宽度自适应的行内块元素 */
	}

	.loading {
		text-align: center;
		line-height: 80upx;
		color: #929292;
	}

	.douyin {
		color: red;
		margin-left: 12upx;
	}

	.small {
		margin-left: 12upx;
	}

	.right {
		line-height: 40upx;
		height: 140upx;
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
		width: 120upx;
		height: 120upx;
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
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		background-color: #FFFFFF;
		position: fixed;
		z-index: 10;
		justify-content: space-between;
	}

	.container {
		margin-top: 50px;
	}


	/* 每个导航框 */
	.uni-tab-item {
		display: inline-block;
		flex-wrap: nowrap;
		border-bottom: 2upx red solid;
		padding-left: 40upx;
		padding-right: 40upx;
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
