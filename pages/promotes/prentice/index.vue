<template>
	<view>
		<view id="tabbar" class="tabbar">
			<view class="barcell" :class="{border:isSelect === 1}" @click="clickCell(1)">一级</view>

			<view class="barcell" :class="{border:isSelect === 2}" @click="clickCell(2)">二级</view>
		</view>
		<scroll-view class="content">
			<view class="cell" v-for="prentice of data" :key="prentice.nickname">
				<image class="photo" mode="aspectFill" :src="imgurl+prentice.avatar"></image>
				<view class="info1">
					<span style="">{{prentice.nickname}}</span>
					<span style="float: right;color: #FB7551; text-align: right; font-size: 12px;">累计收入:{{prentice.income_sum}}</span>
				</view>
				<view class="info2">
					<span style="color: #ED4040; width: 20%; margin-right: 20px;" v-if="prentice.is_member==0">非会员</span>
					<span style="color: #ED4040; width: 20%; margin-right: 20px;" v-if="prentice.is_member==1">会员</span>
					<span style="margin-left: 150npx;">{{prentice.prevtime_text}}</span>
					<span style="float: right;">总人数:{{prentice.team_number}}</span>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				imgurl: this.util.uploaddata.cdnurl,
				data: [],
				isSelect: 1,
				current: 1,
				// prentices: [{
				// 		img: '../../../static/image/zxx/photo/01.png',
				// 		nickname: '王境泽',
				// 		income: 250,
				// 		level: '普通会员',
				// 		time: '2019-04-12',
				// 		prenticecount: '25'
				// 	},
				// 	{
				// 		img: '../../../static/image/zxx/photo/02.png',
				// 		nickname: '嘤嘤怪',
				// 		income: 250,
				// 		level: '普通会员',
				// 		time: '2019-04-12',
				// 		prenticecount: '25'
				// 	},
				// 	{
				// 		img: '../../../static/image/zxx/photo/03.png',
				// 		nickname: '柠檬精',
				// 		income: 250,
				// 		level: '普通会员',
				// 		time: '2019-04-12',
				// 		prenticecount: '25'
				// 	},
				// 	{
				// 		img: '../../../static/image/zxx/photo/04.png',
				// 		nickname: '复读机',
				// 		income: 250,
				// 		level: '普通会员',
				// 		time: '2019-04-12',
				// 		prenticecount: '25'
				// 	}
				// ],

			}
		},
		watch: {
			isSelect: function() {

			}
		},
		onLoad() {
			let params = {
				"level": 1
			};
			let url = "/api/user/apprentice";
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
			clickCell(index) {
				this.isSelect = index
				this.current = index
				let params = {
					"level": this.isSelect
				};
				let url = "/api/user/apprentice";
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

			}
		}
	}
</script>

<style>
	.tabbar {
		background: #FFFFFF;
		height: 120upx;
		width: 100%;
	}

	.barcell {
		float: left;
		height: 100upx;
		width: 30%;
		line-height: 100upx;
		text-align: center;
		margin: 0 10%;
	}

	.border {
		border-bottom: #007AFF 5upx groove;
	}

	.content {
		margin-top: 20upx;
	}

	.cell {
		background-color: #FFFFFF;
		height: 180upx;
		border-bottom: 10upx solid #F5F5F5;
	}

	.photo {
		width: 102upx;
		height: 102upx;
		border-radius: 50px;
		margin-top: 35upx;
		margin-left: 50upx;
		float: left;
	}

	.info1 {
		width: calc(100vw - 250upx);
		float: left;
		margin-left: 30upx;
		margin-top: 20upx;
		height: 80upx;
		line-height: 80upx;
	}

	.info2 {
		width: calc(100vw - 250upx);
		float: left;
		margin-left: 30upx;
		font-size: 12px;
	}
</style>
