<template>
	<view class="container">
		<view class="content">
			<view class="release_content">
				<text class="text2" @click="release03">朋友圈推广</text>
				<text class="text2" @click="release02">抖音点赞+评论</text>
				<text class="text2" @click="release01">抖音点赞+评论+转发</text>
				<!-- <view class="login_btn" @click="logining">
					<text>登&nbsp;录</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"liebiao": [{
						"id": 1,
						"type_name": "抖音点赞+评论+转发",
						"scope_text": "",
						"audit_text": ""
					},
					{
						"id": 2,
						"type_name": "抖音点赞+评论",
						"scope_text": "",
						"audit_text": ""
					},
					{
						"id": 3,
						"type_name": "朋友圈推广",
						"scope_text": "",
						"audit_text": ""
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			release01() {
				uni.navigateTo({
					url: "../release/release"
				})
			},
			release02() {
				uni.navigateTo({
					url: "../release02/release02"
				})
			},
			release03() {
				uni.navigateTo({
					url: "../release03/release03"
				})
			}
		}
	}
</script>

<style>
	* {
		/* border:1px solid red; */
	}

	.content {
		width: 100%;
		height: 1800upx;
		background-color: #757575;
		/* background-color: #666666; */
		opacity: 0.5;
	}

	.release_content {
		width: 80%;
		height: 600upx;
		position: absolute;
		top: 20%;
		left: 10%;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 30upx;
	}

	.release_content>text {
		margin-bottom: 10upx;
	}

	.login_btn {
		margin-top: 20upx;
		width: 195upx;
		height: 54upx;
		background-color: #14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text1 {
		font-weight: bold;
	}

	.text2 {
		color: red;
		font-size: 40upx;
		background-color: #1BCC8D;
		/* padding:4upx 50upx; */
		border-radius: 30upx;
		margin: 40upx 5upx;
		color: #FFFFFF;
		width: 80%;
		text-align: center;
		height: 70upx;
	}
</style>
