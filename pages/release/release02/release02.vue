<template>
	<view class="container">
		<view class="content">
			<view class="top">
				<image src="../../../static/image/yangsongyan/release02/09.png"></image>
			</view>
			<view class="float1">
				<view class="title">
					<image src="../../../static/image/yangsongyan/release02/02@3x.png"></image>
					<text>发布文字</text>
				</view>
				<view class="release_tozhi">
					<textarea class="uni-textarea" placeholder="点击输入文字……">
						
					</textarea>
					<view>0/500</view>
				</view>
			</view>
			<view class="bottom">
				<view class="bottom_content">
					<view class="part1">
						<image class="part_img" src="../../../static/image/yangsongyan/release02/03@3x.png"></image>
						<text>类别:</text>
						<text>抖音点赞+评论</text>
					</view>
					<view class="part1">
						<image class="part_img" src="../../../static/image/yangsongyan/release02/01@3x.png"></image>
						<text>标题:</text>
						<text>帮忙转发推广</text>
					</view>
					<view class="part1">
						<image class="part_img" src="../../../static/image/yangsongyan/release02/04@3x.png"></image>
						<text>任务单价:</text>
						<text>3.02元</text>
					</view>
					<view class="part1">
						<image class="part_img" src="../../../static/image/yangsongyan/release/04@3x.png"></image>
						<text>任务数量:</text>
						<view class="jiajian">
							<view class="quanquan">-</view>
							<text>100</text>
							<view class="quanquan">+</view>
						</view>
					</view>
					
					<view class="part1">
						<image class="part_img" src="../../../static/image/yangsongyan/release02/06@3x.png"></image>
						<text>任务图片:</text>
						<view class="pictue">
							<image src="../../../static/image/yangsongyan/release02/07.png"></image>
							<image src="../../../static/image/yangsongyan/release02/08@3x.png"></image>
						</view>
					</view>
					<view class="part2">
						#总金额1200.00元,退单按原款
					</view>
					<view class="part3">
						<view class="login_btn">
							<text>发&nbsp;&nbsp;&nbsp;&nbsp;布</text>
						</view>
					</view>
					<view class="part4">
						<p @click="zhanshi">
							温馨提示：尊敬的抖客雇主们，请大家根据自己的任务需求选择分类，正确的分类会提供用户做任务的效率哦，而展开
							温馨提示：尊敬的抖客雇主们，请大家根据自己的任务需求选择分类，正确的分类会提供用户做任务的效率哦，而展开
							温馨提示：尊敬的抖客雇主们，请大家根据自己的任务需求选择分类，正确的分类会提供用户做任务的效率哦，而展开
							温馨提示：尊敬的抖客雇主们，请大家根据自己的任务需求选择分类，正确的分类会提供用户做任务的效率哦，而展开
						</p>
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
			zhanshi(e){
				// console.log(e);
			}
		}
	}
</script>

<style>
	*{
		/* border: 1px solid red; */
	}
	image{
		width: 100%;
		height: 207upx;
	}
	.top{
		width: 100%;
	}
	.content{
		position: relative;
	}
	.float1{
		/* float:left; */
		width: 84%;
		height: 270upx;
		position: absolute;
		left: 8%;
		top:130upx;
		z-index: 100;
		background-color: #FFFFFF;
		border-radius: 20upx;
		/* box-shadow: 2 2 5 #333333; */
		box-shadow: inset -2px -2px 8px #e5e5e5;
	}
	
	.title{
		display: flex;
		
	}
	.title>image{
		width: 72upx;
		height: 72upx;
	}
	.title>text{
		font-size: 35upx;
		line-height: 75upx;
		font-weight: 500;
	}
	.uni-textarea{
		margin-left: 2%;
		width: 94%;
		height: 170upx;
		background-color: #EEEEEE;
		border-radius: 0 0 20upx 20upx;
		font-size: 28upx;
		line-height: 40upx;
		padding-top: 10upx;
		padding-left: 10upx;
	}
	.release_tozhi{
		display: flex;
	}
	.release_tozhi>view{
		width: 52upx;
		height: 20upx;
		font-size: 18upx;
		line-height: 20upx;
		margin-left: -70upx;
		margin-top: 142upx;
		z-index: 100;
		color: #FF0000;
	}
	.bottom{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 10upx;
		
	}
	.bottom_content{
		width: 100%;
		padding-top: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.part_img{
		width: 66upx;
		height: 66upx;
	}
	.login_btn{
		width: 350upx;
		height: 88upx;
		background-color:#14c790;
		border-radius: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		margin-top: 50upx;
	}
	.part1{
		display: flex;
		align-items: center;
		width: 90%;
		font-size: 30upx;
		line-height: 66upx;
		margin-bottom: 15upx;
	}
	.part1>image{
		margin-right: 10upx;
	}
	.part1>text{
		margin-right: 20upx;
	}
	
	.part2{
		font-size:24upx;
		color: #ff5400;
		margin-top: 20upx;
	}
	.part4{
		font-size: 18upx;
		color: #a2a2a2;
		width: 70%;
		margin-top: 30upx;
		padding-bottom: 100upx;
	}
	p{
		-webkit-line-clamp: 2; /* // 限制显示的文本的行数为3 */
		-webkit-box-orient: vertical; /* // 水平排列<p>，使其不纵向显示 */
		word-break: break-all; /* // 使<p>中的文字换行 */
		overflow: hidden; /* // 超出的文字部分隐藏 */
		text-overflow: ellipsis; /* // 超出的文字部分用...来显示 */
		display: -webkit-box; /* // 将<p>变成高度定死，宽度自适应的行内块元素 */
	}
	.jiajian{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 180upx;
	}
	.quanquan{
		color: #FFFFFF;
		width: 40upx;
		height: 40upx;
		background-color: #BFBFBF;
		font-size: 40upx;
		line-height: 35upx;
		text-align: center;
		border-radius: 20upx;
	}
	.pictue>image{
		width: 114upx;
		height: 114upx;
		margin-right: 10upx;
	}
</style>
