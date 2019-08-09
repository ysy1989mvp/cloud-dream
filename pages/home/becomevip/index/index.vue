<template>
	<view style="height: calc(100vh); background-color: #FFFFFF;">
		<view class="main">
			<view class="title">VIP会员</view>
			<view class="text1">充值388.00送VIP特权</view>
			<view class="text2">388.00可用于下单</view>
			<image src="../../../../static/image/zxx/vip.png" mode="aspectFit"></image>
			<button>立即下单</button>
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
			
		}
	}
</script>

<style>
	.main{
		float: left;
		background-color: #E5E5E5;
		width: 70%;
		height: 65%;
		margin: 15%;
		border-radius: 20upx;
		text-align: center;
	}
	.title{
		color: #FB7551;
		margin-top: 10%;
	}
	.text1{
		
	}
	.text2{
		font-size: 14px;
		color: #999999;
	}
	image{
		width: 50%;
	}
	button{
		border-radius: 50upx;
		width: 70%;
		color: #FFFFFF;
		background-color: rgb(27,204,141);
	}
</style>
