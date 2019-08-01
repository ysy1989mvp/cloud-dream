<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="a smpt">
					<text>昵称：</text>
					<input class="a1  kkt" id="nickName" type="text" 
					placeholder="请输入昵称" >
				</view>
				<view class="b  smpt">
					<text>手机号：</text>
					<input class="b1  kkt" type="number" 
					placeholder="请输入手机号">
				</view>
				<view class="c  smpt">
					<text>验证码：</text>
					<input class="c1" type="text" 
					placeholder="请输入验证码">
					<view class="anniu">
						<text class="c2 kkt">发&nbsp;&nbsp;送</text>
					</view>
				</view>
				<view class="d  smpt">
					<text>身份证号：</text>
					<input class="d1  kkt" type="idcard" 
					placeholder="请输入身份证号码">
				</view>
				<view class="e  smpt">
					<text>密码：</text>
					<input class="e1  kkt" type="password" 
					placeholder="请输入密码" >
				</view>
				<view class="f smpt">
					<text>确认密码：</text>
					<input class="f1  kkt" type="password" 
					placeholder="请再次输入密码">
				</view>
			</view>
			<view class="part2">
				<view class="login" @click="regist">
					<text class="dd1">立即注册</text>
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
			regist(){
				uni.navigateTo({
					url:"../regist-result/regist-result"
				})
			}
		}
	}
</script>

<style>
	*{
		/* border: 1upx solid blue; */
	}
	.content{
		font-size:32upx;
		background-color:#FFFFFF ;
	}
	input{
		width: 400upx;
		border: 1.5px solid #14C790;
		height: 58upx;
		border-radius: 10upx;
		/* background-color: ; */
		/* display: flex;
		justify-content:flex-end;
		align-items:stretch; */
	}
	.part1{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		padding-top: 20upx;
	}
	.smpt{
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15upx;
	}
	.c1{
		/* color:#ffffff; */
		font-size:28upx ;
		font-weight: 146upx;
		line-height: 44upx;
		width: 240upx;
		margin-left:34upx;
	}
	.part2{
		width: 100%;
		height: 179upx;
	}
	.f{
		border-bottom: 1px solid #BFBFBF;
		padding-bottom: 100upx;
	}
	.smpt>text{
		font-weight: bold;
	}
	.anniu{
		width: 130upx;
		height: 50upx;
		border-radius:50upx ;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:#14C790 ;
		color: #FFFFFF;
		font-size: 25upx;
	}
	.part2{
		width: 100%;
		height: 280upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login{
		width: 450upx;
		height: 88upx;
		background-color:#14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dd1{
		color:#ffffff;
		font-size:36upx ;
		font-weight: 105upx;
		line-height: 34upx;
	}
</style>
