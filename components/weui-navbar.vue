<template>
	<view class="weui-navbar">
		<block v-for="(item,index) in tabs" :key="index">
			<view class="weui-navbar__item" :class="current == index ? 'weui-bar__item_on' : ''" @click="onClick" :data-index="index">
				<view class="weui-navbar__title">{{item}}
				</view>
			</view>
		</block>
		<view class="weui-navbar__slider" :style="'left:' + sliderLeft + 'px; transform: translateX(' + sliderOffset + 'px); -webkit-transform: translateX(' + sliderOffset + 'px);margin:' + marginList[tabs.length -1]"></view>
	</view>
</template>

<script>
	export default {
		name: 'weui-tabs',
		props: {
			current: {
				type: Number,
				default: 0
			},
			tabs: {
				type: Array,
				default () {
					return [];
				}
			},
			sliderLeft: {
				type: Number,
				default: 0
			},
			sliderOffset: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				marginList: ['0 0%', '0 15.5%', '0 7%'] //tabs的个数对应的margin
			}
		},
		methods: {
			onClick(e) {
				this.$emit('tabClick', e);
			}
		},
	}
</script>

<style>
	/* 选项卡——weui */
	.weui-navbar {
		background-color: #fff;
		border-bottom: 1px solid #e5e5e5;
	}

	.weui-navbar__slider {
		width: 20%;
		text-align: center;
		background-color: #fd5a60;
	}

	.weui-bar__item_on {
		color: #fd5a60 !important;
	}

	.weui-flex__item {
		padding: 5px 14px;
	}

	.weui-navbar__item {
		padding: 8px 0;
		position: relative;
	}

	.weui-tab__panel {
		padding-top: 40px;
	}

	.weui-navbar__title {
		position: relative;
		/* overflow: visible; */
	}

	.weui-navbar_counts {
		font-size: 24upx;
		position: absolute;
		left: 100%;
		bottom: 50%;
		color: #fd5a60 !important;
	}
</style>
