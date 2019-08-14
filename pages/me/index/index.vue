<template>
	<view class="container">
		<view class="content">
			<view class="part_">
				<view class="topview">
					<image class="topImg" src="../../../static/image/_11.png"></image>
				</view>
				<view class="userInfo">
					<view class="touxiang" :style="{'background-image' : 'url(' + imgurl+data.avatar + ')'}">
						<!-- <image src="../../../static/lyl/12.png" mode="aspectFit"></image> -->
					</view>
					<text class="tex whiteFont1" v-if="data.is_member==1">{{data.mobile}}【VIP】会员</text>
					<text class="tex whiteFont1" v-if="data.is_member==0">{{data.mobile}} 非会员</text>
					<text class="whiteFont2 tex">编号：{{data.id}}</text>
				</view>
				<view class="sign" @click="toSetting">
					<image src="../../../static/lyl/11@3x.png" mode="aspectFit"></image>
					<text class="tex bigFont whiteFont3">设置</text>
				</view>
				<!-- 〉 -->
				<view class="part_float">
					<view>
						<view class="left_img_tex">
							<image src="../../../static/image/_08@2x.png" mode="aspectFit"></image>
							<text class="tex">余额</text>
						</view>
						<text class="tex bigFont">{{data.money}}元</text>
					</view>
					<view class="two_anniu">
						<text class="tex" @click="toRecharge">充值</text>
						<text class="tex redFont" @click="toWithdrawal">提现</text>
					</view>
				</view>
			</view>

			<view class="_part">
				<view class="line" @click="toMyRelease">
					<view>
						<image src="../../../static/lyl/02@3x.png" mode="aspectFit"></image>
						<text class="tex">我的发布</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="toChannel">
					<view>
						<image src="../../../static/lyl/04@3x.png" mode="aspectFit"></image>
						<text class="tex">渠道商入口</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="toTaskRecords">
					<view>
						<image src="../../../static/lyl/05@3x.png" mode="aspectFit"></image>
						<text class="tex">任务记录</text>
					</view>
					<view>
						<!-- <text class="tex redFont redCircle">1</text> 红1-->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line">
					<view>
						<image src="../../../static/lyl/07@3x.png" mode="aspectFit"></image>
						<text class="tex">收入明细</text>
					</view>
					<view>
						<!-- <text class="tex redFont redCircle">-1</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="toAccountManage">
					<view>
						<image src="../../../static/lyl/08@3x.png" mode="aspectFit"></image>
						<text class="tex">账户管理</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="becomevip">
					<view>
						<image src="../../../static/lyl/03@3x.png" mode="aspectFit"></image>
						<text class="tex">开通VIP</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="toHowSave">
					<view>
						<image src="../../../static/lyl/09@3x.png" mode="aspectFit"></image>
						<text class="tex">如何赚钱</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去了解</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line" @click="toHowRelease">
					<view>
						<image src="../../../static/lyl/06@3x.png" mode="aspectFit"></image>
						<text class="tex">如何发布</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>

				<!-- <view class="line" @click="toSetting">
					<view>
						<image src="../../../static/lyl/06@3x.png" mode="aspectFit"></image>
						<text class="tex">设置</text>
					</view>
					<view>
						<text class="tex jiantou">〉</text>
					</view>
				</view> -->

				<view class="line" @click="toHelpCenter">
					<view>
						<image src="../../../static/lyl/10@3x.png" mode="aspectFit"></image>
						<text class="tex">帮助中心</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
					</view>
				</view>
				<view class="line">
					<view>
						<image src="../../../static/lyl/10@3x.png" mode="aspectFit"></image>
						<text class="tex">合作</text>
					</view>
					<view>
						<!-- <text class="tex redFont">去开通</text> -->
						<text class="tex jiantou">〉</text>
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
				imgurl: this.util.uploaddata.cdnurl,
				data: {
					"avatar": "/uploads/20190814/FgMfSuGLJTSJu7oqC-Vei-HBkwef.png",
					"mobile": "13211675827",
					"is_member": "0",
					"id": 29,
					"money": 88
				},
			}
		},
		onLoad() {

		},
		methods: {
			toRecharge() {
				uni.navigateTo({
					url: "../recharge/recharge"
				})
			},
			toMyRelease() {
				uni.navigateTo({
					url: "../my-release/my-release"
				})
			},
			toAccountManage() {
				uni.navigateTo({
					url: "../account-manage/account-manage"
				})
			},
			toHelpCenter() {
				uni.navigateTo({
					url: "../help-center/help-center"
				})
			},
			toTaskRecords() {
				uni.navigateTo({
					url: "../task-records/task-records"
				})
			},
			toWithdrawal() {
				uni.navigateTo({
					url: "../withdrawal/withdrawal"
				})
			},
			toSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			},
			toChannel() {
				uni.navigateTo({
					url: "../channel-merchants/channel-merchants"
				})
			},
			toHowSave() {
				uni.navigateTo({
					url: "../how-save/how-save"
				})
			},
			toHowRelease() {
				uni.navigateTo({
					url: "../how-release/how-release"
				})
			},
			becomevip() {
				uni.navigateTo({
					url: "../../home/becomevip/index/index"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		width: 100%;
		background-color: #FFFFFF;
		position: relative;
	}

	.userInfo {
		width: 50%;
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		/* margin-top: 15upx; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.topview {
		/* border:1px solid red; */
		width: 100%;
		padding: 0upx;
		margin: 0upx;

	}

	.userInfo image,
	.userInfo .tex {
		display: block;
		text-align: center;
		margin: 0 auto;
		line-height: 45upx;
	}

	.userInfo image {
		width: 100%;
		height: 100%;
	}

	.userInfo>view {
		width: 100upx;
		height: 100upx;
		/* border:1px solid red; */
		background-size: 100%;
		border-radius: 50upx;
	}

	/* .touxiang>image{
		border-radius: 50upx;
	} */
	.userInfo .tex {
		width: 100%;
	}

	.sign {
		width: 175upx;
		height: 75upx;
		background: rgba(0, 0, 0, 0.5);
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
		z-index: 100;
	}

	.sign image {
		width: 80upx;
		height: 80upx;
		margin-right: 5upx;
	}

	.part_float {
		padding: 48upx 24upx;
		box-sizing: border-box;
		bottom: -50upx;
	}

	.part_float .left_img_tex {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.part_float view image,
	.line image {
		width: 80upx;
		height: 80upx;
	}

	.line {
		height: 100upx;
		border-bottom: 1upx solid #E5E5E5;
	}

	.line view {
		display: flex;
		align-items: center;
	}

	.line image {
		margin-right: 12upx;
	}

	.tex {
		font-size: 30upx;
	}

	.redFont {
		margin-right: 12upx;
		font-size: 28upx;
		color: #000000;
	}

	.whiteFont1 {
		color: #FFFFFF;
		margin-top: 50upx;
	}

	.whiteFont2 {
		color: #FFFFFF;
	}

	.whiteFont3 {
		color: #FFFFFF;
	}

	.topview {
		width: 100%;
		height: 500upx;
	}

	.topImg {
		height: 100%;
	}

	.redCircle {
		width: 35upx;
		height: 35upx;
		border-radius: 50%;
		color: white;
		background-color: red;
		line-height: 38upx;
		text-align: center;
	}

	.touxiang {
		margin-bottom: 30upx;
	}

	.two_anniu {
		display: flex;
	}

	.two_anniu>text {
		background-color: #1BCC8D;
		border-radius: 20upx;
		margin-right: 10upx;

	}

	.jiantou {
		color: #c5c5c5;
		margin-right: 15upx;
	}
</style>
