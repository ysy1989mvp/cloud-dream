<template>
	<view class="container">
		<weui-tabs class="theTab" :current="current" :tabs="tabs" :sliderLeft="sliderLeft" :sliderOffset="sliderOffset"
		 v-on:tabClick="tabClick"></weui-tabs>
		<view class="content">
			<view class="line" v-for="item in 5">
				<image class="left" src="../../../static/image/_04.png" mode="aspectFit"></image>
				<view class="right">
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex bigFont">【抖音】</text>
							<text class="tex redFont">审核通过</text>
						</view>
						<text class="tex redFont">￥4000</text>
					</view>
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex">抖音点赞</text>
							<text class="tex">1000份</text>
						</view>
						<text class="tex">已完成：999份</text>
					</view>
					<view class="line_inner">
						<view class="inner_left">
							<text class="tex">No:999999</text>
							</view>
						<text class="tex">2012-12-02   16:20</text>
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
				tabs: ["全部", "进行中", "已完成"],
				current: 0,
				sliderOffset: 0,
				sliderLeft: 0,
			}
		},
		methods: {
			tabClick: function(e) {
				this.sliderOffset = e.currentTarget.offsetLeft;
				this.current = e.currentTarget.dataset.index;
			},
		}
	}
</script>

<style>
	@import url("../../../css/main-style.css");
	.content{
		width: 100%;
		position: relative;
	}
	
	.weui-navbar{
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.line{
		width: 100%;
		height: auto;
		padding: 24upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12upx 0;
	}
	
	.left{
		width: 150upx;
		height: 150upx;
	}
	
	.right{
		width: 75%;
	}
	
	.line_inner{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.inner_left .tex:first-child{
		margin-right: 24upx;
	}

</style>
