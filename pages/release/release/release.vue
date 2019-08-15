<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="text">
					<textarea maxlength="500" placeholder="发布您的内容……" v-model="contenttext"></textarea>
				</view>
				<view class="upload_imgs">
					<uploadimgs></uploadimgs>
				</view>
			</view>
			<view class="part2">
				<view class="content1">
					<image class="image_view" src="../../../static/image/yangsongyan/release02/02@3x.png"></image>
					<view class="leibie">类别:</view>
					<view>{{leibie}}</view>
				</view>
				<view class="content1">
					<image class="image_view" src="../../../static/image/yangsongyan/release02/05@3x.png"></image>
					<view class="leibie">标题:</view>
					<input class="input1" v-model="title" />
				</view>
				<view class="content1">
					<image class="image_view" src="../../../static/image/yangsongyan/release02/03@3x.png"></image>
					<view class="leibie">任务单价:</view>
					<view class="pailie"><input class="input3" type="number" v-model="publish_price" />
						<view>元</view>
					</view>
				</view>
				<view class="content1">
					<image class="image_view" src="../../../static/image/yangsongyan/release02/04@3x.png"></image>
					<view class="leibie">任务数量:</view>
					<view class="shuliangannniu">
						<view class="xiaoanniu" @click="countjian">-</view>
						<view class="number"><input class="input2"  type="number" v-model="publish_count" /></view>
						<view class="xiaoanniu" @click="countjia">+</view>
					</view>
				</view>
				<view class="content1">
					<image class="image_view" src="../../../static/image/yangsongyan/release02/07@3x.png"></image>
					<view class="leibie">时间节点:</view>
					<view class="shuliangannniu">
						<view class="xiaoanniu" @click="dayjian">-</view>
						<view class="number">
							<input class="input2"  type="number" v-model="scope_day" />
						</view>
						<view class="xiaoanniu" @click="dayjia">+</view>
						<view>天</view>
					</view>
				</view>
				<view class="content1">
					<view class="leibie suojin">网址:</view>
					<input class="input1 wangzhi1" v-model="url" />
				</view>
			</view>
			<view class="part3">
				<view class="totle">#总金额{{publish_count*publish_price}}元 服务费0.00元，退单按原款</view>
				<view class="button_ysy" @click="release">
					发布
				</view>
				<view class="tishi">
					温馨提示：尊敬的抖客雇主们，请大家根据自己的任务需求选择
					分类，正确的分类会提供用户做任务的效率哦

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadimgs from "@/components/upload-image/upload-imgs.vue"
	export default {
		components: {
			uploadimgs
		},
		data() {
			return {
				leibie: '抖音点赞+评论+转发',
				contenttext: '',
				task_type_id: 1,
				title: '',
				scope_day: 0,
				publish_count: 0,
				publish_price: '0',
				url: ''
			}
		},
		methods: {
			countjian() {
				if (this.publish_count > 0) {
					this.publish_count--;
				}
			},
			countjia() {
				this.publish_count++;
			},
			dayjian() {
				if (this.scope_day > 0) {
					this.scope_day--;
				}
			},
			dayjia() {
				this.scope_day++;
			},
			release(){
				if(this.publish_count<1){
					this.util.showWindow("任务数量不能为0");
					return;
				}
				let params = {
					"content": this.contenttext,
					"task_images": this.util.uploadImgas,
					"task_type_id":this.task_type_id,
					"title": this.title,
					"scope_day": this.scope_day,
					"publish_count": this.publish_count,
					"publish_price": this.publish_price,
					"url": this.url
				};
				let url="/api/task/add";
				this.util.request(url,"POST",params,(res) => {
					if(res.statusCode==200){
						if(res.data.code==1){
							this.util.showWindow("发布成功");
							uni.switchTab({
								url:"../../task/index/index"
							})
						}else{
							this.util.showWindow(res.data.msg);
						}
					}else{
						this.util.showWindow("请求失败");
					}
				});
			}
		}
	}
</script>

<style>
	* {
		/* border: 1px solid red; */
	}

	.container {
		border-top: 10upx solid #E5E5E5;
	}

	.text {
		width: 90%;
		display: flex;
		/* height: 140upx; */
		justify-content: center;
		align-items: center;
		margin: 15upx auto;
	}

	.text>textarea {
		border: 1px solid #E5E5E5;
		width: 100%;
	}

	.upload_imgs {
		width: 90%;
		display: flex;
		/* height: 140upx; */
		justify-content: center;
		align-items: center;
		margin: 0upx auto;
	}

	.part2 {
		width: 90%;
		margin: 0upx auto;
		display: flex;
		/* height: 140upx; */
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		font-size: 32upx;
		line-height: 80upx;
	}



	.content1 {
		display: flex;
	}

	.image_view {
		width: 80upx;
		height: 80upx;
	}

	.leibie {
		margin-right: 10upx;
	}

	.shuliangannniu {
		display: flex;
		/* height: 140upx; */
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.xiaoanniu {
		width: 40upx;
		height: 40upx;
		border-radius: 20upx;
		background-color: #C5C5C5;
		line-height: 40upx;
		font-size: 40upx;
		color: #FFFFFF;
		text-align: center;
	}

	.part3 {
		width: 90%;
		margin: 0upx auto;
	}

	.number {
		margin: 0upx 20upx;
	}

	.totle {
		text-align: center;
	}

	.totle {
		color: #FF5400;
		font-size: 28upx;
		margin-top: 80upx;
	}

	.tishi {
		color: #A5A5A5;
		font-size: 25upx;
		width: 80%;
		text-align: center;
		margin: 0upx auto;
		-webkit-line-clamp: 2;
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
		margin-top: 20upx;
	}

	.button_ysy {
		width: 70%;
		margin-top: 50upx;
		margin-bottom: 50upx;
	}

	.suojin {
		margin-left: 20upx;
	}

	.wangzhi {
		color: #4ea7df;
	}

	.input1 {
		width: 400upx;
		height: 45upx;
		margin: auto 0upx;
	}

	.input2 {
		width: 100upx;
		height: 45upx;
		margin: auto 0upx;
		text-align: center;
	}

	.input3 {
		width: 200upx;
		height: 45upx;
		margin: auto 15upx;
		text-align: center;
	}

	.pailie {
		display: flex;
		/* height: 140upx; */
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		margin: auto 0upx;
	}

	.wangzhi1 {
		width: 500upx;
	}
</style>
