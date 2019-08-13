<template>
	<view class="container">
		<weui-tabs class="theTab" :current="current" :tabs="tabs" :sliderLeft="sliderLeft" :sliderOffset="sliderOffset"
		 v-on:tabClick="tabClick"></weui-tabs>
		<view class="content">
			<view class="line" v-for="(item,index) in data" :key="index" @click="myDetail(item.id)">
				<image class="left" v-if="item.task_images.length>0" :src="imgurl+item.task_images[0]"></image>
				<image class="left" v-if="item.task_images.length<1" :src="defaultImgSrc"></image>
				<view class="right">
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex bigFont">【{{item.title}}】</text>
							<text class="tex redFont" v-if="item.audit_state==4">已到期</text>
							<text class="tex redFont" v-if="item.audit_state==3">已完成</text>
							<text class="tex redFont" v-if="item.audit_state==2">未通过</text>
							<text class="tex redFont" v-if="item.audit_state==1">已通过</text>
							<text class="tex redFont" v-if="item.audit_state==0">待审核</text>
						</view>
						<text class="tex redFont">￥{{item.publish_price}}元</text>
					</view>
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex">{{item.type_name}}</text>
							<text class="tex">剩余{{item.remain_count}}份</text>
						</view>
						<text class="tex">已完成：{{item.publish_count-item.remain_count}}份</text>
					</view>
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex">No:{{item.task_no}}</text>
						</view>
						<text class="tex">{{item.endtime_text}}</text>
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
				defaultImgSrc: '../../../static/image/yangsongyan/release02/01.png',
				imgurl: this.util.uploaddata.cdnurl + "/",
				tabs: ["全部", "进行中", "已完成"],
				current: 0,
				sliderOffset: 0,
				sliderLeft: 0,
				data: [
					// {
					// 	"task_images": [
					// 		"uploads/20190810/Fti_fu_VvmOn_KEWFT3O7yXBDNNH.jpg",
					// 		"uploads/20190810/Fs8kQGvN8JX4vngmUAT5r4nhM6YY.jpg",
					// 		"uploads/20190810/FhsLmGWLv_Ui4keEgtx-frg7_y7R.jpg",
					// 		"uploads/20190810/FvDDGDkNcthQCggRlpcXh4VJIBU2.jpg",
					// 		"uploads/20190810/FsS8HRG9_7XAnS-frd33w4qNGePT.jpg"
					// 	],
					// 	"audit_state": "1",
					// 	"task_no": "NO00000074",
					// 	"title": "试试就试试",
					// 	"type_name": "抖音点赞+评论+转发",
					// 	"remain_count": 1,
					// 	"endtime": 1565517427,
					// 	"publish_price": "10.00",
					// 	"content": "试试就试试",
					// 	"scope_day": 1,
					// 	"publish_count": 1,
					// 	"url": "试试网址",
					// 	"begintime_text": "",
					// 	"endtime_text": "2019-08-11 17:57:07",
					// 	"audit_state_text": "Audit_state 1"
					// },
					// {
					// 	"task_images": [
					// 		"uploads/20190810/Fq5JwM_TNr8Qaey1ZKN1HOpG3sMn.jpg"
					// 	],
					// 	"audit_state": "1",
					// 	"task_no": "NO00000073",
					// 	"title": "123",
					// 	"type_name": "抖音点赞+评论+转发",
					// 	"remain_count": 1,
					// 	"endtime": 1565516126,
					// 	"publish_price": "10.00",
					// 	"content": "恩呵",
					// 	"scope_day": 1,
					// 	"publish_count": 1,
					// 	"url": "额呵呵",
					// 	"begintime_text": "",
					// 	"endtime_text": "2019-08-11 17:35:26",
					// 	"audit_state_text": "Audit_state 1"
					// },
					// {
					// 	"task_images": [
					// 		""
					// 	],
					// 	"audit_state": "0",
					// 	"task_no": "NO00000072",
					// 	"title": "",
					// 	"type_name": "朋友圈推广",
					// 	"remain_count": 0,
					// 	"endtime": 1565429676,
					// 	"publish_price": "0.00",
					// 	"content": "",
					// 	"scope_day": 0,
					// 	"publish_count": 0,
					// 	"url": "",
					// 	"begintime_text": "",
					// 	"endtime_text": "2019-08-10 17:34:36",
					// 	"audit_state_text": "Audit_state 0"
					// }
				]
			}
		},
		onLoad() {
			let params = {
				"status": 0
			};
			let url = "/api/user/my";
			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						// console.log(JSON.stringify(this.data));
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("注册请求失败");
				}
			});
		},
		methods: {
			myDetail:function(id){
				uni.navigateTo({
					url:"../task-detail/task-detail?id="+id
				})
			},
			tabClick: function(e) {
				this.sliderOffset = e.currentTarget.offsetLeft;
				this.current = e.currentTarget.dataset.index;
				console.log("current:" + this.current);
				let params = {
					"status": this.current
				};
				let url = "/api/user/my";
				this.util.request(url, "GET", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.data = res.data.data;
							// console.log(JSON.stringify(this.data));
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("注册请求失败");
					}
				});
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");

	.content {
		width: 100%;
		position: relative;
	}

	.weui-navbar {
		position: fixed;
		top: 0;
		left: 0;
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
		width: 140upx;
		height: 140upx;
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
</style>
