<template>
	<view class="container">
		<view class="content" >
			<view class="board redBorad">
				<view class="theLine">
					<text class="tex">支付账户</text>
					<image src="../../../static/image/20-@2x.png" mode=""></image>
				</view>
				<view class="theLine">
					<view>
						<text class="tex">账号：</text>
						<text class="tex">44545484363556</text>
					</view>
				</view>
			</view>
			<view class="board blueBoard">
				<view class="theLine">
					<text class="tex">支付账户</text>
					<image src="../../../static/image/20-@2x.png"></image>
				</view>
				<view class="theLine">
					<view>
						<text class="tex">账号：</text>
						<text class="tex">44545484363556</text>
					</view>
					<view>
						<text class="tex">开户行：</text>
						<text class="tex">中国建设银行十大支行</text>
					</view>
				</view>
			</view>
			<view class="tips">
				<text class="tex redFont">温馨提示：</text>
				<text class="tex">支付宝和银行卡只能各绑定一个</text>
			</view>
			<view class="bottom" @click="toAddAccount">
				<button class="bottom_btn">添加</button>
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
			toAddAccount(){
				uni.navigateTo({
					url:"../add-account/add-account"
				})
			}
		}
	}
</script>

<style>
@import url("../../../css/main-style.css");
.content{
	width: 100%;
	padding: 24upx;
	box-sizing: border-box;
	height: 100vh;
	background-color: #FFFFFF;
}

.board{
	width: 100%;
	padding: 24upx;
	box-sizing: border-box;
	border-radius: 20upx;
	margin-bottom: 24upx;
}

.theLine{
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
}

.theLine image{
	width: 35upx;
	height: 35upx;
}

.board .tex{
	color: #FFFFFF;
}

.redBorad{
	background-color: #f04e59
;
}

.blueBoard{
	background-color: #1c73b6;
}
.bottom_btn{
		background-color:#1BCC8D ;
		color: #FFFFFF;
		height: 88upx;
		display: flex;
		justify-content: center;
		flex-direction: center;
		align-items: center;
	}

</style>
