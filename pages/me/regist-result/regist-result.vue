<template>
	<view class="container">
		<view class="content">
			<view class="_part1">
				<view class="word1">
					<text>
						恭喜您成功注册兼职接单平台账户，请前往登录页面进行登录，开启赚钱之路。
					</text>
				</view>
			</view>
			<view class="_part2">
					<view class="login" @click="login">
						<text class="d1">去登录</text>
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
			login(){
				uni.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>
	*{
		/* border: 1upx solid red; */
	}
	._part1{
		width: 100%;
		height: 321upx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.word1{
		width: 80%;
		height: 93upx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-size:32upx ;
		font-weight: bold;
		line-height: 60upx;
	}
	._part2{
		width: 100%;
		height: 329upx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
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
	.d1{
		color:#ffffff;
		font-size:36upx ;
		font-weight: 105upx;
		line-height: 34upx;
	}
</style>
