<template>
	<view class="container">
		
		<view class="content">
			<view class="part_">
				<image class="topImg" src="../../../static/image/_11.png" mode="aspectFill"></image>
				<view class="part_float">
					<view>
						<image src="../../../static/image/01@2x.png"></image>
					</view>
					<view>
						<text class="tex bigFont">等级</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view>
						<text class="tex bigFont">团队总人数</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view>
						<text class="tex bigFont">徒弟数</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
					<view>
						<text class="tex bigFont">累计收益</text>
						<text class="tex redFont">VIP会员</text>
						<text class="tex">等级</text>
					</view>
				</view>
			</view>
			
			<view class="_part">
				<view class="line">
					<view>
						<text class="tex bigFont">任务收入：</text>
						<text class="tex redFont bigFont">25.5</text>
					</view>
					<button class="small_btn">更多金币</button>
				</view>
				<view class="line">
					<view>
						<text class="tex">总任务奖金：</text>
						<text class="tex">25.5</text>
					</view>
					<text class="tex">总团队奖：500</text>
				</view>
				<view class="line">
					<view>
						<text class="tex">总收单奖：</text>
						<text class="tex">25.5</text>
					</view>
					<text class="tex">总渠道经理奖：500</text>
				</view>
			</view>
			
			<view class="bottom">
				<button class="bottom_btn">推荐会员/享永久收益</button>
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
		background-color: #FFFFFF;
		position: relative;
	}
	
	.weui-navbar{
		position: fixed;
		top: 0;
		left: 0;
	}

</style>
