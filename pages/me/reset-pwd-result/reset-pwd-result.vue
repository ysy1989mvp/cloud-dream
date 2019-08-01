<template>
	<view class="part1">
		<text class="a">密码重置成功，请登录</text>
		<text class="b" @click="login">去登录</text>
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
	.part1{
		width: 100%;
		height: 322upx;
		display:flex;
		flex-direction:column;
		justify-content:flex-end;
		margin-left: 170upx;
		font-size:32upx ;
		font-weight: 600;
		
	}
	.b{
		width: 100%;
		margin-left: 220upx;
		color:#14c790 ;
		margin-top: 30upx;
	}

</style>
