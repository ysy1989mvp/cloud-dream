<template>
	<view class="container">
		<view class="content">
			<view class="part_1">
				<view class="part_11 part_1_ct">
					<text class="text_b">标题:</text>
					<text>{{data.title}}</text>
				</view>
				<view class="part_12 part_1_ct">
					<text class="text_b">审核周期:</text>
					<text>{{data.endtime}}</text>
				</view>
				<view class="part_13 part_1_ct">
					<text class="text_b">任务限制:</text>
					<text v-if="data.scope<1">不限</text>
					<text v-if="data.scope>0">VIP以上可接</text>
				</view>
				<view class="part_14 part_1_ct">
					<text class="text_b">任务金额:</text>
					<text>{{data.publish_price}}元</text>
				</view>
			</view>
			<view class="part_2">
				<view class="juzhong">
					<view class="part_21 part_2_ct">
						<text class="text_b tab21">类别:</text>
						<text class="tab22">{{data.type_name}}</text>
					</view>
					<view class="part_22 part_2_ct">
						<text class="text_b tab21">任务内容:</text>
						<text class="tab22">
							{{data.content}}
						</text>
					</view>
					<view class="part_23 part_2_ct">
						<text class="text_b tab21">任务提交内容:</text>
						<text class="tab22">抖音号+昵称，并上传任务完成截图。具体操作请看新手指引。</text>
					</view>
					<view class="part_24 part_2_ct">
						<text class="text_b tab21">任务网址:</text>
						<text class="tab22">{{data.url}}</text>
					</view>
					<view class="part_25 part_2_ct">
						<text class="text_b tab21">任务图片:</text>
						<view class="tab22 teshu">
							<view class="img_img" v-for="(item,index) in data.task_images" :key="index" @click="previewImage1(data.task_images,index)">
								<image class="img"  :src="imgurl+item"></image>
							</view>
							<!-- <view class="img_img">
								<image class="img" src="../../../static/lyl/04_examine.png"></image>
							</view>
							<view class="img_img">
								<image class="img" src="../../../static/lyl/04_examine.png"></image>
							</view>
							<view class="img_img">
								<image class="img" src="../../../static/lyl/04_examine.png"></image>
							</view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="part_3">
				<view class="part_content">
					<view class="part_31">任务要求:</view>
					<view class="part_32">
						1、接任务的帐号必须为自己真实的抖音帐号有名字和头像<br />
						2、接任务帐号需有至少一个自己的作品。<br />
						3、接任务帐号需有少量粉丝以及点赞数。<br />
					</view>
					<view class="part_33">需提交内容:</view>
					<view class="part_34">抖音号+昵称、并上传任务完成截图。具体操作看新手指引</view>
				</view>
			</view>
			<view class="part2">
				<view class="login huise">
					<text class="dd1" v-if="data.audit_state==4">已到期</text>
					<text class="dd1" v-if="data.audit_state==3">已完成</text>
					<text class="dd1" v-if="data.audit_state==2">未通过</text>
					<text class="dd1" v-if="data.audit_state==1">已通过</text>
					<text class="dd1" v-if="data.audit_state==0">待审核</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				task_id:null,
				imgurl: this.util.uploaddata.cdnurl,
				data: {
					title: "试试就试试",
					publish_price: "10.00",
					type_name: "抖音点赞+评论+转发",
					content: "试试就试试",
					url: "试试网址",
					task_images: [
					],
					task_tip_text: "",
					other_tip_text: ""
				}
			}
		},
		onLoad(options) {
			this.task_id = options.id;
			let params = {
				"id": options.id
			};
			let url = "/api/task/detail";
			this.util.request(url, "GET", params, (res) => {
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
		},
		methods: {
			previewImage1:function(imgs,index){
				this.util.previewImage(imgs,index);
			}
		}
	}
</script>

<style>
	* {
		/* border:1px solid red; */
	}

	.content {
		font-size: 27upx;
		line-height: 54upx;
		color: #5D5D5D;
		background-color: #E5E5E5;
	}

	.text_b {
		font-weight: bold;
		margin-right: 20upx;
	}

	.part_1 {
		width: 100%;
		margin-bottom: 15upx;
		padding-top: 20upx;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.part_1_ct {
		width: 90%;
	}

	.part_2 {
		background-color: #FFFFFF;
		width: 100%;
		display: table;
		padding-bottom: 30upx;
	}

	.juzhong {
		width: 90%;
		margin: 0 auto;
	}

	.part_2_ct {
		width: 100%;
		margin: 0upx auto;
		display: table-row;
	}

	.tab21 {
		display: table-cell;
		width: 30%;
		text-align: left;
		vertical-align: top;
	}

	.tab22 {
		display: table-cell;
		width: 70%;
		line-height: 70upx;
	}

	.img_img {
		width: 96upx;
		height: 96upx;
		margin-right: 10upx;
		margin-top: 20upx;
		float: left;
	}

	.img {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	.teshu {
		/* display: flex;
		flex-direction: row; */
	}

	.part_3 {
		width: 100%;
		margin-top: 15upx;
		background-color: #FFFFFF;
	}

	.part_content {
		width: 90%;
		margin: 0px auto;
	}

	.part_31 {
		font-weight: bold;
	}

	.part_33 {
		font-weight: bold;
	}

	.part_32 {
		margin-left: 40upx;
		font-size: 20upx;
		color: red;
	}

	.part_34 {
		margin-left: 40upx;
		font-size: 20upx;
		color: red;
	}

	.part2 {
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login {
		width: 450upx;
		height: 88upx;
		background-color: #E5E5E5;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40upx;
		color: #FFFFFF;
	}
	.huise{
		color: #FFFFFF;
	}
	
</style>
