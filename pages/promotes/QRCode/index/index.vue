<template>
	<view class="content">
		<view class="title">
			<span style="display: block; padding-top: calc(100vh * 0.08);">我在抖客做兼职，已经赚了{{data.income_sum}}元了</span>
			<span style="display: block;">快来跟我一起赚钱吧！</span>
		</view>
		<view class="qrcode">
			<view class="img">
				<image :src="data.qrcode" mode="aspectFit"></image>
				<view style="margin: 0;">UID:{{data.UID}}</view>
			</view>
		</view>
		<view class="tip">
			<view class="line"></view>
			<view style="text-align: center;">
				<span class="tiptitle">赚钱说明</span>
			</view>
			<view class="tipcontent">
				<span v-for="tip of tips" :key="tip">{{tip}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '12.33',
				uid: '1113',
				tips: [
					'1、每个自己的徒弟完成的任务，您可获得30%额外奖励。徒弟可再收徒弟，您任可获得间接徒弟收益10%的额外奖励。',
					'2、抖客保留对规则的修改权和解释权。'
				],
				"data": {
					"UID": 29,
					"income_sum": 12.33
				}
			}
		},
		onLoad() {
			let params = {};
			let url = "/api/user/apprenticeqrcode";
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

		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.content {
		background-color: #FFFFFF;
		height: calc(100vh);

	}

	.title {
		height: calc(100vh * 0.15);
		text-align: center;
		font-size: 14px;
	}

	.qrcode {
		height: calc(100vh * 0.5);
	}

	.img {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img image {
		width: 50%;
	}

	.tip {
		height: calc(100vh * 0.35);
	}

	.line {
		height: 5upx;
		width: 90%;
		background-color: #E5E5E5;
		margin: 0 auto;
	}

	.tiptitle {
		color: #ED4040;
	}

	.tipcontent {
		font-size: 14px;
		;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 30upx;
	}

	.tipcontent span {
		display: block;
		width: 80%;
		color: #484848;
	}
</style>
