<template>
	<view class="container">
		<weui-tabs class="theTab" :current="current" :tabs="tabs" :sliderLeft="sliderLeft" :sliderOffset="sliderOffset"
		 v-on:tabClick="tabClick"></weui-tabs>
		<view class="content">
			<view class="line" v-for="(item,index) in data" :key="index" @click="toExamine(item.id)">
				<image class="left" v-if="item.task_images.length>0" :src="imgurl+item.task_images[0]"></image>
				<image class="left" v-if="item.task_images.length<1" :src="defaultImgSrc"></image>
				<view class="right">
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex bigFont">{{item.title}}</text>
							<text class="tex redFont" v-if="item.status==1">已抢单</text>
							<text class="tex redFont" v-if="item.status==2">待审核</text>
							<text class="tex redFont" v-if="item.status==3">已审核</text>
							<text class="tex redFont" v-if="item.status==4">未通过</text>
						</view>
						<text class="tex redFont">￥{{item.publish_price}}</text>
					</view>
					<!-- <view class="line_inner">
						<view class="inner_left">
							<text class="tex">抖音点赞</text>
							<text class="tex">1000份</text>
						</view>
						<text class="tex">已完成：999份</text>
					</view> -->
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex">No:{{item.task_no}}</text>
						</view>
						<text class="tex">剩余{{item.endTimeHour}}小时</text>
						<text class="tex" v-if="item.status==1">未完成</text>
						<text class="tex" v-if="item.status==2">待审核</text>
						<text class="tex" v-if="item.status==3">已完成</text>
						<text class="tex" v-if="item.status==4">未通过</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgurl: this.util.uploaddata.cdnurl,
				defaultImgSrc: '../../../static/image/yangsongyan/release02/01.png',
				tabs: ["全部", "已接单", "待审核", "通过", "失败"],
				current: 0,
				sliderOffset: 0,
				sliderLeft: 0,
				data: [	]
			}
		},
		onLoad(){
			let params = {
				"status": 0
			};
			let url = "/api/task_accept/index";
			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						console.log(JSON.stringify(this.data));
						console.log(this.imgurl+res.data.data[0].task_images[0]);
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求失败");
				}
			});
		},
		methods: {
			tabClick: function(e) {
				this.sliderOffset = e.currentTarget.offsetLeft;
				this.current = e.currentTarget.dataset.index;
				let params = {
					"status": this.current
				};
				let url = "/api/task_accept/index";
				this.util.request(url, "GET", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.data = res.data.data;
							console.log(JSON.stringify(this.data));
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求失败");
					}
				});
				// if(this.current == 1){
				// 	uni.navigateTo({
				// 		url:"../VIP-open/VIP-open"
				// 	})
				// }
			},
			toExamine(id) {
				uni.navigateTo({
					url: "../examine/examine?id="+id
				})
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		width: 100%;
		position: relative;
		margin-top: 60upx;
	}

	.weui-navbar {
		position: fixed;
		top: 20upx;
		left: 0;
		display: flex;
	}

	.line {
		width: 100%;
		height: auto;
		padding: 24upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12upx 0;
	}

	.left {
		width: 150upx;
		height: 150upx;
	}

	.right {
		width: 75%;
	}

	.line_inner {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.inner_left .tex:first-child {
		margin-right: 24upx;
	}
	.bigFont{
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
</style>
