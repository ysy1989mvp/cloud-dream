<template>
	<view class="container">
		<view class="content">
			<view class="thePart" v-for="item in 3">
				<text class="tex bigFont theTitle">第一步：点击按钮</text>
				<view class="theContent"></view>
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
			
		}
	}
</script>

<style>
@import url("../../../css/main-style.css");
.content{
	width: 100%;
	padding: 24upx;
	background-color: #FFFFFF;
	box-sizing: border-box;
	height: 100vh;
}

.thePart{
	margin-bottom: 24upx;
}

.theTitle{
	font-size: 30upx;
	line-height: 75upx;
}

.theContent{
	background-color: #E5E5E5;
	border-radius: 20upx;
	width: 100%;
	height: 200upx;
}


</style>
