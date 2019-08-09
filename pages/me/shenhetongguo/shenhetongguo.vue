<template>
	<view class="container">
			<view class="content">
				<view class="popContent">
					<view class="imglxy1">
						<image class="imglxy" src="../../../static/lyl/01@3x_channel.png" mode="aspectFit"></image>
					</view>
					<text class="tex bigFont">审核通过</text>
				</view>
				<view class="part1">
					<view class="line">
						<text class="tex bigFont theTitle">
							标题：
						</text>
						<text class="tex theTex">
							朋友圈推广转发每个2元6小时后截图
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							单号：
						</text>
						<text class="tex theTex">
							100235792514555
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							审核周期：
						</text>
						<text class="tex theTex">
							48小时
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							任务限制：
						</text>
						<text class="tex theTex">
							VIP以上可接
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							任务金额：
						</text>
						<text class="tex theTex redFont">
							2.50元
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							任务需求：
						</text>
						<text class="tex theTex">
							朋友圈转发
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							类别：
						</text>
						<text class="tex theTex">
							朋友圈推广
						</text>
					</view>
					<view class="line">
						<text class="tex bigFont theTitle">
							任务网址：
						</text>
						<text class="tex theTex blueFont">
							https://taskdo.ajhfjajaf.com
						</text>
					</view>
				</view>
				
				<view class="part2">
					<view class="line">
						<text class="tex bigFont theTitle">
							审核内容：
						</text>
						<text class="tex theTex">
							做完了
						</text>
					</view>
					<view class="line theLine">
						<text class="tex bigFont theTitle">
							审核内容：
						</text>
						<view class="imgContainer">
							<image src="../../../static/lyl/01_examine.png" mode="aspectFit"></image>
							<image src="../../../static/lyl/02_examine.png" mode="aspectFit"></image>
							<image src="../../../static/lyl/03_examine.png" mode="aspectFit"></image>
							<image src="../../../static/lyl/04_examine.png" mode="aspectFit"></image>
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
					
				}
			},
			methods: {
				toDetail(){
					uni.navigateTo({
						url:"../task-detail/task-detail"
					})
				}
			}
		}
	</script>
	
	<style>
		@import url("../../../css/main-style.css");
		.content{
			height: 100vh;
			background-color: #FFFFFF;
		}
		
		.line{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding:24upx;
			box-sizing: border-box;
		}
		
		.part0{
			width: 100%;
			padding: 48upx 24upx;
			box-sizing: border-box;
		}
		
		.part0 image{
			display: block;
			margin: 12upx auto;
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
		}
		
		.thePass{
			display: block;
			width: 100%;
			text-align: center;
		}
		
		.part1{
			width: 100%;
			border-bottom: 1upx solid #E5E5E5;
			margin-top: 250upx;
			padding-top: 80upx;
		}
		
		.tex{
			font-size: 30upx;
		}
		
		.theTitle{
			width: 200upx;
		}
		
		.imgContainer{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
		
		.imgContainer image{
			width: 70upx;
			height: 70upx;
			margin: 0 12upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		.theLine{
			align-items: flex-start;
		}
		
		.part2{
			margin-top: 100upx;
		}
		
		.blueFont{
			color: #007AFF;
		}
		.popContent{
			width: 100%;
			padding-bottom: 600upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	
	</style>
	
