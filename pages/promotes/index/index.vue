<template>
	<view class="container">
		<view class="content">
			<view class="part_">
				<image class="topImg" src="../../../static/image/yangsongyan/release/07.png" mode="aspectFill"></image>
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
						<text class="tex redFont">{{data.team_number}}人</text>
						<text class="tex redFont">升级</text>
					</view>
					<view @click="prentice">
						<text class="tex bigFont">徒弟数</text>
						<text class="tex redFont">{{data.apprentice_number}}人</text>
						<text class="tex redFont">查看</text>
					</view>
					<view @click="awarddetail">
						<text class="tex bigFont">累计收益</text>
						<text class="tex redFont">{{data.income_sum}}</text>
						<text class="tex">明细</text>
					</view>
				</view>
			</view>

			<view class="_part">
				<view class="line">
					<view>
						<text class="tex bigFont">任务收入：</text>
						<text class="tex redFont bigFont">{{data.income_task}}</text>
					</view>
					<button class="small_btn">更多金币</button>
				</view>
				<view class="line">
					<view>
						<text class="tex">总任务奖金：</text>
						<text class="tex">{{data.income_prize_sum}}</text>
					</view>
					<text class="tex">总团队奖：{{data.income_team_prize_sum}}</text>
				</view>
				<view class="line">
					<view>
						<text class="tex">总收单奖：</text>
						<text class="tex">{{data.income_task_apprentice_prize_sum}}</text>
					</view>
					<text class="tex">总渠道经理奖：{{data.income_channel_manager_prize_sum}}</text>
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
				data: {
					"avatar": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjksMjI5LDE2MCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj7lsI88L3RleHQ+PC9zdmc+",
					"is_member": true,
					"team_number": 210,
					"apprentice_number": 12,
					"income_sum": 2400,
					"income_task": 25.5,
					"income_prize_sum": 251.2,
					"income_task_apprentice_prize_sum": 350.04,
					"income_team_prize_sum": 500,
					"income_channel_manager_prize_sum": 400
				}

			}
		},
		onLoad() {
			let params = {
			};
			let url = "/api/user/apprenticeoverview";
			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求失败");
				}
			});
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

	.content {
		width: 100%;
		background-color: #FFFFFF;
		position: relative;
	}

	.bottom {
		color: #1BCC8D;
	}

	.bottom_btn {
		color: #FFFFFF;
		font-size: 40upx;
		background-color: #1BCC8D;
		height: 88upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	._part {
		border-bottom: 5upx solid #F5F5F5;
		padding-bottom: 40upx;
	}

	.container {
		background-color: #FFFFFF;
	}

	.topImg {
		width: 100%;
		height: 300upx;
	}

	.part_float {
		margin-bottom: -150upx;
		width: 97%;
		margin-left: 1%;
	}

	.part_ {
		margin-bottom: 155upx;
	}
</style>
